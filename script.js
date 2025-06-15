document.addEventListener("DOMContentLoaded", function () {

    var images = document.querySelectorAll("img");
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImg");

    images.forEach(function (img) {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    document.querySelector(".close").addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
