document.addEventListener("DOMContentLoaded", function () {
    // Lấy tất cả ảnh trong trang
    var images = document.querySelectorAll("img");
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImg");

    images.forEach(function (img) {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    // Đóng modal khi bấm vào nút close
    document.querySelector(".close").addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Đóng modal khi click ra ngoài ảnh
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
