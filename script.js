// เปิด / ปิดเมนูบนมือถือ

function toggleMenu() {
    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");
}


// ปิดเมนูเมื่อกดลิงก์

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector(".nav-links")
            .classList.remove("active");

    });

});


// แสดงปีปัจจุบันใน Footer

document.getElementById("year").textContent =
    new Date().getFullYear();
