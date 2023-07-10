const menuBtnX = document.getElementById('menu-btn-x');
const icon = document.getElementById('logo-icon');
const logo = document.getElementById('logo');
const sections = document.querySelectorAll('section');

let isNavLinksVisible = false;

var section1 = sections[0];
section1.classList.toggle('white');

logo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Function to toggle the visibility of the navigation links and change the menu button icon
function toggleNavLinks() {
  window.location.href = "index.html#contact";
}

// Add click event listener to the menu button
menuBtnX.addEventListener('click', toggleNavLinks);
/*
const copyContent = async () => {
    try {
      await navigator.clipboard.writeText("contact@bitwaves.ca");
      document.getElementById("tooltip").innerHTML = "copied"
    } catch (err) {
    }
}*/