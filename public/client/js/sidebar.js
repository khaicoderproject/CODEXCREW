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
