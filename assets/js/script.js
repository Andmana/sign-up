const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

const root = document.querySelector(":root");
const submit = document.getElementById("submit");
const checkbox = document.getElementById("themeCB");
const inputs = document.querySelectorAll(".input");
const errors = document.querySelectorAll(".error");
const remail = /\S+@\S+\.\S+/;
const rephone = /^-?\d+(\.\d+)?$/;

const validInput = 0;

function valMsg(message, input) {
    const span = input.parentNode.querySelector("span");
    span.textContent = message;
}

fname.addEventListener("keyup", () => {
    if (fname.value === "") valMsg("Required", fname);
    else valMsg("", fname);
});

lname.addEventListener("keyup", () => {
    if (lname.value === "") valMsg("Required", lname);
    else valMsg("", lname);
});

email.addEventListener("keyup", () => {
    if (email.value === "") valMsg("Required", email);
    else if (!remail.test(email.value)) valMsg("Invalid email", email);
    else valMsg("", email);
});

phone.addEventListener("keyup", () => {
    if (phone.value === "") valMsg("Required", phone);
    else if (!rephone.test(phone.value)) valMsg("Invalid phone number", phone);
    else valMsg("", phone);
});

password.addEventListener("keyup", () => {
    if (password.value === "") valMsg("Required", password);
    else if (password.value.length < 8) valMsg("Pasword length > 8", password);
    else valMsg("", password);
});

repassword.addEventListener("keyup", () => {
    if (repassword.value === "") valMsg("Required", repassword);
    else if (repassword.value != password.value)
        valMsg("Password not match", repassword);
    else valMsg("", repassword);
});

submit.addEventListener("click", () => {
    var invalid = false;
    inputs.forEach((input, index) => {
        if (input.value == "") {
            errors[index].textContent = "Required";
            invalid = true;
        } else if (errors[index].textContent != "") invalid = true;
    });

    if (!invalid) alert("Sign Up Success");
});

function toggleDarkMode() {
    let isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
    changeCurrent();
}

// On page load
document.addEventListener("DOMContentLoaded", (event) => {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        checkbox.checked = true;
        root.style.setProperty("--current", "#121212");
        root.style.setProperty("--current-text", "white");
    }
});

checkbox.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {
        toggleDarkMode();
    } else {
        toggleDarkMode();
    }
});

function changeCurrent() {
    var rootStyle = getComputedStyle(root);
    var current = rootStyle.getPropertyValue("--current");
    root.style.setProperty("--current-text", current);
    current = current == "white" ? "#121212" : "white";
    root.style.setProperty("--current", current);
}
