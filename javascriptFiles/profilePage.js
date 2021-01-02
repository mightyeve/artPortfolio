/***************navigation menu and hamburger toggler**************/
const openToggle = document.getElementById("toggle");
const nav2 = document.getElementById("nav2");
const navLink = document.getElementById("navLink");

toggle.addEventListener('click', () => {
  nav2.classList.toggle('active');
  nav2.style.width = "100%";
  
});


navLink.addEventListener('click', () => {
  nav2.classList.remove(nav2.classList.toggle('active'));
 
});

