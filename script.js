function toggleMenu() {
  const sidebar = document.querySelector(".sidebar");
  const navbar = document.querySelector(".navbar");
  const body = document.querySelector("body");
  // const container = document.querySelector(".container");
  // if (sidebar.style.left === "-250px") {
  sidebar.style.left = "0";
  navbar.style.width = "1035px";
  body.style.overflow = "hidden";
  // } else {
  //   sidebar.style.left = "-250px";
  //   navbar.style.width = "-1015px";
  //   body.style.overflow = "auto";
  // }
}
function closeMenu() {
  const sidebar = document.querySelector(".sidebar");
  const navbar = document.querySelector(".navbar");
  const body = document.querySelector("body");
  sidebar.style.left = "-250px";
  navbar.style.width = "0px";
  body.style.overflow = "auto";
}
