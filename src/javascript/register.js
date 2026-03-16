// ======== Getting User Input ==========================
const nameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("pwd");

// ======== Error Message ===============================
const nameError = document.getElementById("username-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

// ========== Validation ================================
function validateUsername(){
    let nameValue = nameInput.value.trim();
    if(!nameValue){ 
        nameError.textContent = "Name required"; 
        nameInput.style.background = "#fff3f3";
        nameInput.style.border = "1px solid #e04747";
    } else {
        nameError.textContent = "";        
        nameInput.style.background = "#edffed";
        nameInput.style.border = "1px solid #388E3C";
    }
}
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
function handleRegister(event){
    event.preventDefault();

    // Validation
    validateUsername();
    validateEmail();
    validatePassword();

    if(!nameInput.value.trim() || !emailInput.value.trim() || !passwordInput.value.trim()){
        return;
    }

    const userData = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }
    
    if(validateUsername && validateEmail && validatePassword){
        localStorage.setItem("userData", JSON.stringify(userData));

        nameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";

        alert("Registeration Successful")
        window.location.replace("../html/index.html");
    }
}