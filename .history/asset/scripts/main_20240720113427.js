const navLinks = document.querySelectorAll(".navbar .nav-link");
const popups = document.querySelectorAll(".popup");
const closeBtns = document.querySelectorAll(".popup-close");
const overlay = document.querySelector(".popup-overlay");

// Hàm hiển thị popup
function showPopup(popupClass) {
  popups.forEach((popup) => {
    if (popup.classList.contains(popupClass)) {
      popup.classList.add("show");
    } else {
      popup.classList.remove("show");
    }
  });
  overlay.classList.add("show"); // Hiển thị lớp phủ
}

// Hàm ẩn tất cả popup
function hidePopup() {
  popups.forEach((popup) => popup.classList.remove("show"));
  overlay.classList.remove("show"); // Ẩn lớp phủ
}

// Thêm sự kiện click cho các liên kết
navLinks.forEach((link, index) => {
  link.style.setProperty("--i", index + 1);
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

    // Xóa class active từ tất cả các liên kết
    navLinks.forEach((nav) => nav.classList.remove("active"));

    // Thêm class active vào liên kết đang được nhấp
    this.classList.add("active");

    // Lấy lớp popup từ thuộc tính data-popup và loại bỏ dấu "."
    const targetPopup = this.getAttribute("data-popup").replace(".", "").trim();
    if (targetPopup) {
      hidePopup(); // Ẩn tất cả các popup hiện có
      showPopup(targetPopup); // Hiển thị popup mới
    }
  });
});

// Thêm sự kiện click cho các nút đóng trong popup
closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    hidePopup(); // Ẩn tất cả các popup khi nhấp vào nút đóng
  });
});

// Ẩn popup khi nhấp ra ngoài popup
window.addEventListener("click", (e) => {
  if (e.target === overlay) {
    hidePopup(); // Ẩn popup khi nhấp vào lớp phủ
  }
});

// Đóng popup khi nhấn phím ESC
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hidePopup(); // Ẩn tất cả các popup khi nhấn phím ESC
  }
});

// Lấy phần tử chuyển đổi chế độ tối
const toggle = document.querySelector(".toggle");
const body = document.body;

// Thay đổi chế độ tối khi nhấp vào biểu tượng chuyển đổi
toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// JavaScript to update the current year in the footer
document.addEventListener("DOMContentLoaded", (event) => {
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;
});

document
  .getElementById("downloadCvBtn")
  .addEventListener("click", function (e) {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

    const fileUrl =
      "https://drive.google.com/file/d/1wr9MVfK_eWA53ME2Ljpyk4kudloyDoPO/view?usp=drive_link/1.baitap.pdf"; // Đường dẫn đến file CV

    // Mở file trong tab mới để tải xuống
    window.open(fileUrl, "_blank");
  });
