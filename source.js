var toggle = true;
var sidebar = document.getElementById("sidebar");
let title = document.getElementById("title");
let logo = document.getElementById("welcomeLogo");
let bg = document.body;
let moon = document.getElementById("moon");
let sun = document.getElementById("sun");
let isDark = false;

function toggleNav() {
    if (screen.width <= 425) {
        if (toggle) {
            sidebar.style.visibility = "visible"
            sidebar.style.width = "100%"
            sidebar.style.height = "30%"
            toggle = false;
            return
        }
    }
    if (toggle) {
        sidebar.style.visibility = "visible"
        sidebar.style.width = "20%"
        sidebar.style.height = "100%"
        toggle = false;
    } else sidebar.style.width = "0",
        toggle = true,
        sidebar.style.visibility = "hidden";
}

function showNumber() {
    document.getElementById("phoneInfo").style.opacity = "1";
}

function showMail() {
    document.getElementById("mail").style.opacity = "1";
}

function loadSkills() {
    document.getElementById("frontend").style.width = "70%";
    document.getElementById("backend").style.width = "55%";
    document.getElementById("coding").style.width = "65%";
    document.getElementById("communication").style.width = "88%";
    document.getElementById("teamwork").style.width = "100%"
    document.getElementById("solving").style.width = "73%"
    document.getElementById("money").style.width = "8%"
}

function init() {
    setTimeout(() => {
        title.style.opacity = "0";
    }, 1000);

    setTimeout(() => {
        title.innerText = "Designed by TomasCavataio";
        title.style.opacity = "1";
        logo.style.opacity = "1";
    }, 2000);
}

function darkIndex() {
    if (!isDark) {
        bg.classList.remove("bg")
        bg.classList.add("darkBg");
        title.style.color = "white"
        moon.style.display = "none"
        sun.style.display = "block"
        logo.style.filter = "invert(0)";
        isDark = true
    } else if (isDark) {
        bg.classList.remove("darkBg");
        bg.classList.add("bg");
        title.style.color = "black"
        moon.style.display = "block"
        sun.style.display = "none"
        logo.style.filter = "invert(1)";
        isDark = false;
    }
}

function darkContact() {
    let number = document.getElementById("phoneInfo")
    let mail = document.getElementById("mail")
    let contact = document.getElementById("reachTitle");
    let contactIcon = document.getElementsByClassName("contactIcon")
    if (!isDark) {
        bg.classList.remove("bg")
        bg.classList.add("darkBg");
        contact.style.color = "white"
        for (let i = 0; i <= 3; i++) {
            contactIcon[i].style.color = "white"
        }
        number.style.color = "white"
        mail.style.color = "white"
        moon.style.display = "none"
        sun.style.display = "block"
        isDark = true
    } else if (isDark) {
        bg.classList.remove("darkBg");
        bg.classList.add("bg");
        contact.style.color = "black"
        for (let i = 0; i <= 3; i++) {
            contactIcon[i].style.color = "blue"
        }
        number.style.color = "blue"
        mail.style.color = "blue"
        moon.style.display = "block"
        sun.style.display = "none"
        isDark = false;
    }
}