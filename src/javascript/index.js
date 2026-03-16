// ======== Getting User Input ==========================
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("pwd");

// ======== Error Message ===============================
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const logInError = document.getElementById("login-error");

// ========== Validation ================================
function validateEmail(){
    let emailValue = emailInput.value.trim();
    if(!emailValue){ 
        emailError.textContent = "Email required"; 
        emailInput.style.background = "#fff3f3";
        emailInput.style.border = "1px solid #e04747";
    } else {
        emailError.textContent = "";
        emailInput.style.background = "#edffed";
        emailInput.style.border = "1px solid #388E3C";
    }
}
function validatePassword(){
    let passwordValue = passwordInput.value.trim();
    if(!passwordValue){
        passwordError.textContent = "Password required";
        passwordInput.style.background = "#fff3f3";
        passwordInput.style.border = "1px solid #e04747";
    } else if(passwordValue.length < 8 || passwordValue.length > 14){
        passwordError.textContent = "Password length must be 8 to 14 characters";
        passwordInput.style.background = "#fff3f3";
        passwordInput.style.border = "1px solid #e04747";
    } else {
        passwordError.textContent = "";
        passwordInput.style.background = "#edffed";
        passwordInput.style.border = "1px solid #388E3C";
    }
}

// ========= Handle Form Submission =====================
function handleFormSubmit(event){
    event.preventDefault();

    // Validation
    validateEmail();
    validatePassword();

    if(!emailInput.value.trim() || !passwordInput.value.trim()){
        return;
    }

    let userData = JSON.parse(localStorage.getItem("userData"));
    
    if(!userData){
        logInError.textContent = "No user registered";
        return;
    }

    let { email, password } = userData;

    if(emailInput.value.trim() === email && passwordInput.value.trim() === password){
        logInError.textContent = "";
        alert("Log In Successfully");
        window.location.replace("/src/html/app.html");
    } else {
        logInError.textContent = "Invalid User";
    }

}