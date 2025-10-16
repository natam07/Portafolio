const items = document.querySelectorAll(".explorar-child");
items.forEach(item => {
    item.addEventListener("click", () => {
        const link = item.getAttribute("data-link");
        window.location.href = link;
    });
});
