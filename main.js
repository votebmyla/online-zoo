const sidebarButton = document.querySelector(".button-sidebar");
const sidebar = document.querySelector(".sidebar");

sidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-zoos_closed");
});
