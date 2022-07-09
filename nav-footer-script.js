let ham_icon = document.querySelector(".ham-icon");
let close_btn = document.querySelector(".close-btn");

ham_icon.addEventListener("click", displayFooter);
close_btn.addEventListener("click", displayFooter);

function displayFooter(){
    close_btn.classList.toggle("displayToggleClose");
    document.querySelector("footer").classList.toggle("displayToggle");
}

