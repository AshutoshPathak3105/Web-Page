// TOGGLE MENU
let hamburger = document.getElementById("hamburger");
let sideMenu = document.getElementById("sideMenu");

hamburger.addEventListener("click", () => {
    sideMenu.style.left =
        sideMenu.style.left === "0px" ? "-200px" : "0px";
});

// CLOSE BUTTON

document.getElementById("closeMenu").onclick = function () {
    document.getElementById("sideMenu").style.left = "-250px";
};

/* -------------------------
   IMAGE SLIDER
-------------------------- */
let slides = document.querySelectorAll(".slide");
let dotsContainer = document.querySelector(".dots");
let currentIndex = 0;

// Create dots
slides.forEach((_, i) => {
    let dot = document.createElement("span");
    dot.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(dot);
});

let dots = dotsContainer.querySelectorAll("span");

// Show Slide
function showSlide(index){
    slides[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active-dot");

    currentIndex = index;

    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active-dot");
}

// Next Button
document.querySelector(".next").addEventListener("click", () => {
    showSlide((currentIndex + 1) % slides.length);
});

// Prev Button
document.querySelector(".prev").addEventListener("click", () => {
    showSlide((currentIndex - 1 + slides.length) % slides.length);
});

// Activate 1st dot
dots[0].classList.add("active-dot");
