// hamburger menu
let navToggle = document.getElementById("nav-toggle");
let dropNav = document.getElementById("dropdown-nav");
let hamOne = document.getElementById("ham-one");
let hamTwo = document.getElementById("ham-two");
let hamThree = document.getElementById("ham-three");

let dropDownMenu = () => {
  if (dropNav.style.width === "100%") {
    dropNav.style.width = "0";
    hamTwo.style.display = "block";
    hamOne.style.transform = "rotate(0deg)";
    hamOne.style.top = "0px";
    hamThree.style.transform = "rotate(0deg)";
    hamThree.style.bottom = "0px";
    hamOne.style.transition = ".15s ease-in-out";
    hamThree.style.transition = ".15s ease-in-out";
    hamTwo.style.transition = ".15s ease-in-out";
  } else {
    dropNav.style.width = "100%";
    hamTwo.style.display = "none";
    hamOne.style.transform = "rotate(45deg)";
    hamThree.style.bottom = "4px";
    hamOne.style.top = "4px";
    hamThree.style.transform = "rotate(-45deg)";
    hamOne.style.transition = ".15s ease-in-out";
    hamThree.style.transition = ".15s ease-in-out";
    hamTwo.style.transition = ".15s ease-in-out";
  }
};

navToggle.addEventListener("click", dropDownMenu);

let about = document.getElementById("ham-nav-abo");
let projects = document.getElementById("ham-nav-pro");
let contact = document.getElementById("ham-nav-con");

const closeDropNav = () => {
  dropNav.style.width = "0";
  hamTwo.style.display = "block";
  hamOne.style.transform = "rotate(0deg)";
  hamOne.style.top = "0px";
  hamThree.style.transform = "rotate(0deg)";
  hamThree.style.bottom = "0px";
  hamOne.style.transition = ".15s ease-in-out";
  hamThree.style.transition = ".15s ease-in-out";
  hamTwo.style.transition = ".15s ease-in-out";
};

about.addEventListener("click", closeDropNav);
projects.addEventListener("click", closeDropNav);
contact.addEventListener("click", closeDropNav);
