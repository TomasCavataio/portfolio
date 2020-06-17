var toggle = true;

function slide() {

    if (toggle) {
        document.getElementById("sidebar").style.visibility = "visible"
        document.getElementById("sidebar").style.width = "15%"
        toggle = false;
    } else document.getElementById("sidebar").style.width = "0",
        toggle = true,
        document.getElementById("sidebar").style.visibility = "hidden";



}