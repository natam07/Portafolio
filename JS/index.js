//Dco giratorio
const circle = document.querySelector(".circle");
let rotation = 0;

// Gira el círculo con el scroll
window.addEventListener("scroll", () => {
    rotation = window.scrollY * 0.2; // Ajusta la velocidad
    circle.style.transform = `rotate(${rotation}deg)`;
});

// Click en los proyectos
const items = document.querySelectorAll(".circle-item");
items.forEach(item => {
    item.addEventListener("click", () => {
        const link = item.getAttribute("data-link");
        window.location.href = link;
    });
});

// Click en el centro (+)
const goToProjects = document.getElementById("goToProjects");
goToProjects.addEventListener("click", () => {
    window.location.href = "proyectos.html";
});

// Carrusel

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let currentSlide = 0;

function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
});

prevButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
});

window.addEventListener("resize", updateCarousel);
