
let slides = document.querySelectorAll(".slide");
let dotsContainer = document.querySelector(".dots");
let index = 0;

/* Create dots */
slides.forEach((_, i) => {
    let dot = document.createElement("div");
    if (i === 0) dot.classList.add("active-dot");
    dot.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(dot);
});

let dots = document.querySelectorAll(".dots div");

/* Show slide function */
function showSlide(i) {
    slides[index].classList.remove("active");
    dots[index].classList.remove("active-dot");

    index = i;

    slides[index].classList.add("active");
    dots[index].classList.add("active-dot");
}

/* Next / Prev */
document.querySelector(".next").onclick = () => {
    showSlide((index + 1) % slides.length);
};

document.querySelector(".prev").onclick = () => {
    showSlide((index - 1 + slides.length) % slides.length);
};


