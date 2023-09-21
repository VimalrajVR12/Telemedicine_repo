
import navbar from "../components/navbar.js"
let header = document.getElementById("navbar");
header.innerHTML = navbar();



let dropDown = false;
let parentLink = document.querySelectorAll(`.subMenuHead`);
let parentSubMenuLink = document.querySelectorAll(`.subMenu`);
//console.log(parentSubMenuLink);

for(let i of parentLink){
    i.addEventListener("mouseenter", (event) => { showSubMenu(event); });
    i.addEventListener("mouseleave", (event) => { hideSubMenu(event); });
}

for(let i of parentSubMenuLink){
    i.addEventListener("mouseenter", (event) => { checkShowSubMenu(event); });
    i.addEventListener("mouseleave", (event) => { checkHideSubMenu(event); });
}

function showSubMenu(event){
    let element = event.target.textContent;
    let temp = document.getElementById(element);
    temp.classList.remove("hide");
}

function hideSubMenu(event){
    setTimeout(() => {
        if(!dropDown){
            let element = event.target.textContent;
            let temp = document.getElementById(element);
            temp.classList.add("hide");
        }
    }, 100)
}

function checkShowSubMenu(event){
    dropDown = true;
}

function checkHideSubMenu(event){
    dropDown = false;
    let temp = event.target;
    temp.classList.add("hide");
}


// FOOTER PART

import footer from "../components/footer.js";
let foot = document.getElementById("footer");
foot.innerHTML = footer();