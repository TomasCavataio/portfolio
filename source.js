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