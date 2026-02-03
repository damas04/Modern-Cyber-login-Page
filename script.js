const body = document.body;
const form = document.getElementById("authForm");
const switchLink = document.getElementById("switchLink");
const title = document.getElementById("modeTitle");
const submitBtn = document.getElementById("submitBtn");
const hudTop = document.getElementById("hudTop");
1
let signup = false;

switchLink.addEventListener("click", (e) => {
    e.preventDefault();
    signup = !signup;

    body.classList.toggle("signup", signup);
    body.classList.toggle("login", !signup);

    form.classList.toggle("signup", signup);
    title.textContent = signup ? "SIGNUP" : "LOGIN";
    submitBtn.value = signup ? "REGISTER" : "ACCESS";
    hudTop.textContent = signup ? "NEW USER REGISTRATION" : "SYSTEM ONLINE";
    switchLink.textContent = signup ? "LOGIN" : "SIGNUP";
});
