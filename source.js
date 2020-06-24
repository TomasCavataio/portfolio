var toggle = true;

function toggleNav() {

    if (toggle) {
        document.getElementById("sidebar").style.visibility = "visible"
        document.getElementById("sidebar").style.width = "15%"
        toggle = false;
    } else document.getElementById("sidebar").style.width = "0",
        toggle = true,
        document.getElementById("sidebar").style.visibility = "hidden";

}


function showNumber() {
    document.getElementById("phoneInfo").style.opacity = "1";
}

function showMail() {
    document.getElementById("mail").style.opacity = "1";
}

function loadSkills() {
    document.getElementById("frontend").style.width = "70%";
    document.getElementById("backend").style.width = "50%";
    document.getElementById("coding").style.width = "55%";
    document.getElementById("communication").style.width = "88%";
    document.getElementById("teamwork").style.width = "75%"
    document.getElementById("solving").style.width = "73%"
}

function init() {
    let title = document.getElementById("title");
    setTimeout(() => {
        title.style.opacity = "0";
    }, 1000);

    setTimeout(() => {
        title.innerText = "Designed by TomasCavataio";
        title.style.opacity = "1";
    }, 2000);
}