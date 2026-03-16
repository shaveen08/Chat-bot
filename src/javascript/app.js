let chatInput = document.getElementById("chat-input");
let textBox = document.querySelector(".chat-area");

// ============ Chat User List ==============================
let inboxList = document.querySelector(".inbox-list");
const userList = [
  {
    id: 1,
    name: "Alex Rivera",
    image: "https://i.pravatar.cc/150?img=1",
    status: "online",
  },
  {
    id: 2,
    name: "Jamie Chen",
    image: "https://i.pravatar.cc/150?img=2",
    status: "online",
  },
  { id: 3, name: "Morgan Lee", image: null, status: "away" },
  {
    id: 4,
    name: "Taylor Kim",
    image: "https://i.pravatar.cc/150?img=4",
    status: "offline",
  },
  { id: 5, name: "Casey Park", image: null, status: "online" },
  { id: 6, name: "Jordan Walsh", image: null, status: "online" },
  {
    id: 7,
    name: "Riley Thompson",
    image: "https://i.pravatar.cc/150?img=7",
    status: "away",
  },
  { id: 8, name: "Avery Johnson", image: null, status: "offline" },
  {
    id: 9,
    name: "Quinn Martinez",
    image: "https://i.pravatar.cc/150?img=9",
    status: "online",
  },
  { id: 10, name: "Sage Williams", image: null, status: "online" },
  {
    id: 11,
    name: "Drew Anderson",
    image: "https://i.pravatar.cc/150?img=11",
    status: "away",
  },
  { id: 12, name: "Peyton Clark", image: null, status: "online" },
  {
    id: 13,
    name: "Rowan Scott",
    image: "https://i.pravatar.cc/150?img=13",
    status: "online",
  },
  { id: 14, name: "Skyler Brooks", image: null, status: "away" },
  {
    id: 15,
    name: "Finley Hayes",
    image: "https://i.pravatar.cc/150?img=15",
    status: "offline",
  },
];

const chats = {
  1: [
    {
      from: "them",
      text: "Hey! Did you check the new Figma prototype I sent?",
      time: "9:02 AM",
      date: "Today",
    },
    {
      from: "me",
      text: "Yes! The new onboarding flow looks really clean 🔥",
      time: "9:05 AM",
      date: "Today",
    },
    {
      from: "them",
      text: "Thanks! I tweaked the micro-animations based on your feedback.",
      time: "9:06 AM",
      date: "Today",
    },
    {
      from: "me",
      text: "The button hover states are much smoother now.",
      time: "9:08 AM",
      date: "Today",
    },
    {
      from: "them",
      text: "Can we sync at 2pm to walk through the rest?",
      time: "9:10 AM",
      date: "Today",
    },
  ],
  2: [
    {
      from: "them",
      text: "Just pushed the PR for the new dashboard components.",
      time: "Yesterday",
      date: "Yesterday",
    },
    {
      from: "me",
      text: "Nice, I'll review it this afternoon.",
      time: "Yesterday",
      date: "Yesterday",
    },
    {
      from: "them",
      text: "There's a tricky CSS grid issue on mobile — heads up!",
      time: "Yesterday",
      date: "Yesterday",
    },
    {
      from: "me",
      text: "Got it, I'll check it on Safari too.",
      time: "8:30 AM",
      date: "Today",
    },
  ],
  3: [
    {
      from: "them",
      text: "Q3 roadmap deck is ready for your review.",
      time: "Monday",
      date: "Monday",
    },
    {
      from: "me",
      text: "Sending comments by EOD!",
      time: "Monday",
      date: "Monday",
    },
    {
      from: "them",
      text: "The leadership meeting got moved to Thursday.",
      time: "10:00 AM",
      date: "Today",
    },
  ],
  4: [
    {
      from: "them",
      text: "The new campaign went live this morning 🎉",
      time: "8:00 AM",
      date: "Today",
    },
    {
      from: "me",
      text: "Saw it! The copy is super sharp.",
      time: "8:15 AM",
      date: "Today",
    },
    {
      from: "them",
      text: "Let's track conversions by end of week.",
      time: "8:20 AM",
      date: "Today",
    },
  ],
  5: [
    {
      from: "me",
      text: "Can you take a look at the API rate limiter?",
      time: "11:00 AM",
      date: "Today",
    },
    {
      from: "them",
      text: "On it! Found the issue — it's a race condition in the queue.",
      time: "11:20 AM",
      date: "Today",
    },
    {
      from: "me",
      text: "Nice catch! How long to fix?",
      time: "11:22 AM",
      date: "Today",
    },
    {
      from: "them",
      text: "Maybe 30 min. I'll ping you when the fix is deployed.",
      time: "11:23 AM",
      date: "Today",
    },
    {
      from: "them",
      text: "Done! Please test on staging.",
      time: "11:55 AM",
      date: "Today",
    },
  ],
  6: [
    {
      from: "them",
      text: "Retention numbers for June are in — up 12%!",
      time: "9:30 AM",
      date: "Today",
    },
    {
      from: "me",
      text: "That's fantastic news! Send me the full report.",
      time: "9:35 AM",
      date: "Today",
    },
    {
      from: "them",
      text: "Shared to your Drive just now.",
      time: "9:36 AM",
      date: "Today",
    },
  ],
  7: [
    {
      from: "them",
      text: "Closed the Acme deal this morning 🙌",
      time: "10:00 AM",
      date: "Today",
    },
    {
      from: "me",
      text: "Congrats!! That's a huge win.",
      time: "10:05 AM",
      date: "Today",
    },
    {
      from: "them",
      text: "Thank you! The demo last week really sealed it.",
      time: "10:06 AM",
      date: "Today",
    },
    {
      from: "me",
      text: "Let's celebrate on Friday!",
      time: "10:08 AM",
      date: "Today",
    },
    {
      from: "them",
      text: "Absolutely, drinks are on me 🍻",
      time: "10:09 AM",
      date: "Today",
    },
  ],
  8: [
    {
      from: "them",
      text: "User interviews wrapped up. 8 sessions total.",
      time: "Tuesday",
      date: "Tuesday",
    },
    {
      from: "me",
      text: "Awesome! What were the top pain points?",
      time: "Tuesday",
      date: "Tuesday",
    },
    {
      from: "them",
      text: "Navigation confusion and slow search — no surprises there.",
      time: "Tuesday",
      date: "Tuesday",
    },
  ],
  9: [
    {
      from: "me",
      text: "Prod deployment at 6pm good for you?",
      time: "2:00 PM",
      date: "Today",
    },
    {
      from: "them",
      text: "Yep, I'll monitor the pipelines.",
      time: "2:05 PM",
      date: "Today",
    },
    {
      from: "me",
      text: "Thanks! I'll send the release notes shortly.",
      time: "2:06 PM",
      date: "Today",
    },
  ],
  10: [
    {
      from: "them",
      text: "The churn prediction model hit 91% accuracy!",
      time: "9:00 AM",
      date: "Today",
    },
    {
      from: "me",
      text: "Wow, that's above our target. Great work 🎯",
      time: "9:10 AM",
      date: "Today",
    },
    {
      from: "them",
      text: "Running it against live data now. Results soon.",
      time: "9:12 AM",
      date: "Today",
    },
    { from: "me", text: "Keep me posted!", time: "9:13 AM", date: "Today" },
  ],
  11: [
    {
      from: "them",
      text: "DB indexes are optimized. Queries are 3x faster now.",
      time: "Yesterday",
      date: "Yesterday",
    },
    {
      from: "me",
      text: "Huge improvement! Well done.",
      time: "Yesterday",
      date: "Yesterday",
    },
    {
      from: "them",
      text: "Postgres EXPLAIN helped a lot. Should write it up.",
      time: "Yesterday",
      date: "Yesterday",
    },
  ],
  12: [
    {
      from: "them",
      text: "Found 2 critical bugs on the checkout flow.",
      time: "10:00 AM",
      date: "Today",
    },
    {
      from: "me",
      text: "Oh no — can you file them now?",
      time: "10:02 AM",
      date: "Today",
    },
    {
      from: "them",
      text: "Already done! Tickets #874 and #875.",
      time: "10:03 AM",
      date: "Today",
    },
  ],
  13: [
    {
      from: "them",
      text: "Sprint retrospective is at 4pm. Don't forget!",
      time: "8:00 AM",
      date: "Today",
    },
    { from: "me", text: "On my calendar 👍", time: "8:10 AM", date: "Today" },
    {
      from: "them",
      text: "Velocity is up this sprint — team is crushing it.",
      time: "8:12 AM",
      date: "Today",
    },
  ],
  14: [
    {
      from: "them",
      text: "Blog post draft is ready for your review.",
      time: "Yesterday",
      date: "Yesterday",
    },
    {
      from: "me",
      text: "Will read it tonight and leave comments.",
      time: "Yesterday",
      date: "Yesterday",
    },
    {
      from: "me",
      text: "Just finished reading — it's really well written!",
      time: "7:00 AM",
      date: "Today",
    },
    {
      from: "them",
      text: "Thanks so much! Incorporated your edits already 🙏",
      time: "8:30 AM",
      date: "Today",
    },
    {
      from: "them",
      text: "Should I do a thread version for X/Twitter?",
      time: "8:33 AM",
      date: "Today",
    },
    {
      from: "me",
      text: "Yes! Threads do really well for our audience.",
      time: "8:40 AM",
      date: "Today",
    },
  ],
  15: [
    {
      from: "them",
      text: "Kubernetes cluster is fully migrated to v1.30.",
      time: "Monday",
      date: "Monday",
    },
    {
      from: "me",
      text: "Great! Any issues during the migration?",
      time: "Monday",
      date: "Monday",
    },
    {
      from: "them",
      text: "Minor hiccup with the ingress controller but sorted now.",
      time: "Monday",
      date: "Monday",
    },
  ],
};

// ============= Send message dynamically =====================
let currentChatUser = null;
function sendMessage() {
  let textMsg = chatInput.value.trim();
  if (!textMsg || !currentChatUser) return;

  let chatMessage = {
    from: "me",
    text: textMsg,
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    date: "Today"
  };

  // store message in correct chat
  if (!chats[currentChatUser]) {
    chats[currentChatUser] = [];
  }

  chats[currentChatUser].push(chatMessage);

  // create message element
  let newChat = document.createElement("div");
  newChat.classList.add("text-box");

  let avatar = document.createElement("div");
  avatar.classList.add("user-avatar");

  let userProfile = document.createElement("span");
  newChat.id = "text-box";
  userProfile.textContent = "B";

  let userMessage = document.createElement("span");
  userMessage.id = "text-message";
  userMessage.textContent = chatMessage.text;

  let time = document.createElement("span");
  time.id = "user-messaged-date-time";
  time.textContent = chatMessage.time;

  newChat.appendChild(avatar);
  newChat.appendChild(userMessage);

  avatar.appendChild(userProfile);
  newChat.appendChild(time);

  textBox.appendChild(newChat);

  chatInput.value = "";
  textBox.scrollTop = textBox.scrollHeight;
}

// =========== Render User List in Inbox ==================
function renderUsers(list = userList) {
  inboxList.innerHTML = "";

  if (list.length === 0) {
    inboxList.innerHTML = `<img src="https://i.pinimg.com/1200x/87/67/1f/87671f9f3e8549d385575a90682f39a9.jpg" height="auto" width="100%"></img>`;
    return;
  }

  list.forEach((user) => {
    // Inbox div
    let inbox = document.createElement("div");
    inbox.onclick = () => openChat(user.id);

    // clearChat(user.id);
    // exportChat(user.id);

    inbox.id = user.id;
    inbox.classList.add("inbox");

    // Inbox User Avatar
    let inboxUserAvatar = document.createElement("div");
    if (user.image) {
      let img = document.createElement("img");
      img.classList.add("user-avatar");
      img.src = user.image;
      img.height = 42;

      inboxUserAvatar.appendChild(img);
    } else {
      let avatar = document.createElement("div");
      avatar.classList.add("user-avatar");
      avatar.textContent = user.name[0];

      inboxUserAvatar.appendChild(avatar);
    }

    // User Info
    let inboxUserInfo = document.createElement("div");
    inboxUserInfo.classList.add("user-info");

    let inboxUserName = document.createElement("p");
    inboxUserName.id = "user-name";
    inboxUserName.textContent = user.name;

    let inboxUserRecentChat = document.createElement("p");
    inboxUserRecentChat.id = "recent-chat";
    inboxUserRecentChat.textContent = user.message;

    inboxUserInfo.appendChild(inboxUserName);
    inboxUserInfo.appendChild(inboxUserRecentChat);

    inbox.appendChild(inboxUserAvatar);
    inbox.appendChild(inboxUserInfo);

    inboxList.appendChild(inbox);
  });
}
renderUsers();
openChat(userList[0].id);

// =========== Chats ===============================
function openChat(userId) {
  currentChatUser = userId;

  // Clearing previous chat when user move/click to next chat
  textBox.innerHTML = "";

  // Finding user to set image and chat
  const user = userList.find(u => u.id === userId);

  // active user highlight
  document.querySelectorAll(".inbox").forEach((item) => {
    item.classList.remove("active");
  });
  document.getElementById(userId).classList.add("active");

  // Getting chat id and assigning to message variable
  const messages = chats[userId] || [];

  // Navbar Profile Update
  let navbarProfile = document.getElementById("nav-user-avatar");
  let navbarProfileName = document.getElementById("nav-user-name");

  if(user.image){
    navbarProfile.innerHTML = `
      <img 
        src=${user.image}
      />
    `;
  } else {
    navbarProfile.innerHTML = `
      <span id="user-name">${user.name[0]}</span>
    `;
  }

  navbarProfileName.textContent = user.name;

  // Each time user clicking move get their chat
  messages.forEach((msg) => {
    // My Message
    if (msg.from === "them") {
      let chat = `
      <div class="text-box">
        <div class="user-avatar">
          <span id="user-name">B</span>
        </div>
        <span id="text-message">${msg.text}</span>
        <span id="user-messaged-date-time">${msg.time}</span>
      </div>
      `;
      textBox.innerHTML += chat;
    }

    // Their Message
    if (msg.from === "me") {
      let chat = `
      <div class="text-box bot">
        <div class="user-avatar">
          ${
            user.image
              ? `<img src="${user.image}" height="42" style="border-radius:50%">`
              : `<span>${user.name[0]}</span>`
          }
        </div>
        <span id="text-message">${msg.text}</span>
        <span id="user-messaged-date-time">${msg.time}</span>
      </div>
      `;
      textBox.innerHTML += chat;
    }
  });
  textBox.scrollTop = textBox.scrollHeight;
}

// =========== Search =============================
let searchInput = document.getElementById("user-search");

// Finding user in the inbox user list
function searchUser() {
  const value = document.getElementById("user-search").value.toLowerCase();

  // Filtering user from userList
  const filteredUsers = userList.filter((user) =>
    user.name.toLowerCase().includes(value),
  );

  // Sending filtered user data to renderUsers function
  renderUsers(filteredUsers);
}

// =========== Open Modal =============================
function openMore() {
  document.querySelector(".open-more-modal").classList.remove("hidden");
}

function closeMoreModal(){
  document.querySelector(".open-more-modal").classList.add("hidden");
}

// =========== Clear Active Chat ====================================
function clearChat() {

  // Check if any chat is open
  if (!currentChatUser) return;

  // Clear messages only for active user
  if(confirm("Clear this chat?")){
    chats[currentChatUser] = [];
  
    // Clear chat UI
    textBox.innerHTML = "";
  }

}

// =========== Export Active Chat ====================================
function exportChat(){
  if(!currentChatUser) return;
  let messages = chats[currentChatUser] || [];
  let chatText = messages.map(msg => {
    return `${msg.from} : ${msg.text} (${msg.time})`;
  }).join("\n");

  // Create downloadable file
  const blob = new Blob([chatText], { type: "text/plain" });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "chat.txt";
  link.click();
}

// =========== Logout ====================================
function logOut(){
  if(confirm("Are you sure you want to logout?")){
    localStorage.removeItem("userData");
    window.location.href = "/index.html";
  }
}

// ====== Open Search Chat =======================
let searchChatContainer = document.querySelector(".search-modal");
function openSearch(){
  document.querySelector(".search-modal").classList.remove("hidden");
}

// ====== Search Chat =======================
function searchChat(){

  let searchValue = document.getElementById("chat-search").value.toLowerCase();

  if(searchValue === ""){
    openChat(currentChatUser); // restore old chat
    return;
  }

  const messages = chats[currentChatUser] || [];

  const filtered = messages.filter(msg =>
    msg.text.toLowerCase().includes(searchValue)
  );

  textBox.innerHTML = "";

  filtered.forEach(msg => {

    let chat = `
      <div class="text-box ${msg.from === "me" ? "bot" : ""}">
        <span id="text-message">${msg.text}</span>
        <span id="user-messaged-date-time">${msg.time}</span>
      </div>
    `;

    textBox.innerHTML += chat;

  });

}

// ====== Close Search Modal =====================
function closeSearchModal(){
  document.querySelector(".search-modal").classList.add("hidden");
}

// ===== Profile Modal ===================
function viewProfile(){
  document.querySelector(".profile-modal-overlay").classList.remove("hidden");
  document.querySelector(".open-more-modal").classList.add("hidden");
  console.log(document.querySelector(".profile-modal-overlay"))
}

function closeProfileModal(){
  document.querySelector(".profile-modal-overlay").classList.add("hidden");
}

console.log(document.querySelector(".profile-modal-overlay"))
