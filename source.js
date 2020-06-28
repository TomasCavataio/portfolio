var toggle = true;
var sidebar = document.getElementById("sidebar");

function toggleNav() {
    if (toggle) {
        sidebar.style.visibility = "visible"
        sidebar.style.width = "20%"
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
    document.getElementById("teamwork").style.width = "75%"
    document.getElementById("solving").style.width = "73%"
    document.getElementById("money").style.width = "8%"
}

function init() {
    let title = document.getElementById("title");
    let logo = document.getElementById("welcomeLogo");
    setTimeout(() => {
        title.style.opacity = "0";
    }, 1000);

    setTimeout(() => {
        title.innerText = "Designed by TomasCavataio";
        title.style.opacity = "1";
        logo.style.opacity = "1";
    }, 2000);
}