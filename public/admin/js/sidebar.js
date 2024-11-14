function toggleSidebarBtn() {
  let sidebar = document.getElementById("sidebar");
  let mainContent = document.getElementById("main-content");
  sidebar.classList.add("show");
  mainContent.classList.add("shifted");
  document.getElementById("main-content").style.width = "1100px";
}
function closeSidebarBtn() {
  let sidebar = document.getElementById("sidebar");
  let mainContent = document.getElementById("main-content");

  sidebar.classList.remove("show");
  mainContent.classList.remove("shifted");
  document.getElementById("main-content").style.width = "1100px";
}

// sidebar.js
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  // Kiểm tra trạng thái đã lưu trong localStorage và thêm class active cho nav-link đó
  const activeLink = localStorage.getItem("activeLink");
  if (activeLink) {
    const link = document.querySelector(`.nav-link[href="${activeLink}"]`);
    if (link) {
      link.classList.add("active");
    }
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Xóa class active từ tất cả các nav-link
      navLinks.forEach((link) => link.classList.remove("active"));

      // Thêm class active vào nav-link được bấm
      this.classList.add("active");

      // Lưu trạng thái của nav-link vào localStorage
      localStorage.setItem("activeLink", this.getAttribute("href"));
    });
  });
});
