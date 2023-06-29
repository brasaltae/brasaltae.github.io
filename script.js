const menuBtn = document.getElementById('menu-btn');
const menuBtnX = document.getElementById('menu-btn-x');
const navColor = document.getElementById('navbar');
const navLinks = document.getElementById('nav-links');
const icon = document.getElementById('logo-icon');
const links = navLinks.getElementsByTagName('a');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const main = document.querySelector('main');
const logo = document.getElementById('logo');

let isNavLinksVisible = false;

const sectionColors = {
  home: {
    backgroundColor: '#4D5432', // sage green
  },
  about: {
    backgroundColor: '#CAB565', // brown
  },
  work: {
    backgroundColor: '#D8959A', // pink
  },
  contact: {
    backgroundColor: '#4F7584', // blue grey
  },
};

logo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function getId() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Loop through each section and check if it is in the viewport
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const sectionOffset = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Calculate the start and end positions of the section
    const sectionStart = sectionOffset - sectionHeight / 2;
    const sectionEnd = sectionOffset + sectionHeight / 2;

    // Check if the scroll position is within the section's range
    if (scrollPosition >= sectionStart && scrollPosition < sectionEnd) {
      return section.id
    }
  }
}

// Add scroll event listener to the window
window.addEventListener('scroll', () => {
  const s = getId()
  document.body.style.transition = 'background-color 0.45s';
  document.body.style.backgroundColor = sectionColors[s].backgroundColor;

  // Check if the current section is the "about" section
  if ((s === 'home') || (s === 'contact')) {
    // Apply white color to the SVG logo, menu button, and close button
    navColor.classList.add('white');
    icon.setAttribute("href", "assets/waves-w.webp");
  } else {
    // Remove white color from the SVG logo, menu button, and close button
    navColor.classList.remove('white');
    icon.setAttribute("href", "assets/waves-b.webp");
  }
});

// Add click event listeners to the navigation links
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', (event) => {
    event.preventDefault();

    navLinks.classList.toggle('visible');
    isNavLinksVisible = !isNavLinksVisible;
    document.body.style.overflow = '';
    menuBtn.style.display = 'block';
    menuBtnX.style.display = 'none';
    main.classList.remove('transparent'); // Add this line to restore the text visibility

    // Get the target section's ID from the href attribute
    const targetId = links[i].getAttribute('href').substring(1);

    // Find the target section element
    const targetSection = document.getElementById(targetId);
    // Scroll to the target section smoothly with offset
    window.scrollTo({ top: targetSection.offsetTop, behavior: 'smooth' });
  });
}

// Function to toggle the visibility of the navigation links and change the menu button icon
function toggleNavLinks() {
  navLinks.classList.toggle('visible');
  isNavLinksVisible = !isNavLinksVisible;

  // Toggle the scrolling behavior for the body
  if (isNavLinksVisible) {
    navColor.classList.add('white');
    icon.setAttribute("href", "assets/waves-w.webp");
    document.body.style.overflow = 'hidden';
    menuBtn.style.display = 'none';
    menuBtnX.style.display = 'block';
    main.classList.add('transparent'); // Add this line to make the text transparent
  } else {
    if ((getId() !== 'home') && (getId() !== 'contact'))  {
      navColor.classList.remove('white');
      icon.setAttribute("href", "assets/waves-b.webp");
    }
    document.body.style.overflow = '';
    menuBtn.style.display = 'block';
    menuBtnX.style.display = 'none';
    main.classList.remove('transparent'); // Add this line to restore the text visibility
  }
}

// Add click event listener to the menu button
menuBtn.addEventListener('click', toggleNavLinks);
menuBtnX.addEventListener('click', toggleNavLinks);
