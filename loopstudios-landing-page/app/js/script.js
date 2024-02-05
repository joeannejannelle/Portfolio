const overlay = document.querySelector('#overlay');
const sidenavbar = document.querySelector('#sidenavbar');

function toggle_sidenavbar(command) {
    if (command == "open") { //To open side navbar
        sidenavbar.classList.remove("close");
        overlay.classList.remove("close");
    }

    if (command == "close") {
        sidenavbar.classList.add("close");
        overlay.classList.add("close");
    }
}