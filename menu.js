const menuBtn = document.getElementById("menuBtn");
const menuList = document.getElementById("menuList");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menuList.classList.toggle("show");
});