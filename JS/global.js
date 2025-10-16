var homeText = document.getElementById("homeText");
if (homeText) {
    homeText.addEventListener("click", function (e) {
        window.location.href = "home2.html";
    });
}

var workText = document.getElementById("workText");
if (workText) {
    workText.addEventListener("click", function (e) {
        window.location.href = "proyectos.html";
    });
}

var contactText = document.getElementById("contactText");
if (contactText) {
    contactText.addEventListener("click", function (e) {
        window.location.href = "contacto.html";
    });
}