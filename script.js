const menuBtn = document.getElementById('menu-btn');
const menuBtnX = document.getElementById('menu-btn-x');
const navLinks = document.getElementById('nav-links');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
let isNavLinksVisible = false;

const sectionColors = {
  about: {
    backgroundColor: '#D3C17F', // brown
  },
  work: {
    backgroundColor: '#C1D37F', // sage green
  },
  contact: {
    backgroundColor: '#7FBBD3', // teal
  },
};

// Add scroll event listener to the window
window.addEventListener('scroll', () => {
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
      const sectionColor = sectionColors[section.id].backgroundColor;
      document.body.style.transition = 'background-color 0.5s';
      document.body.style.backgroundColor = sectionColor;
    }
  }
});

// Add click event listeners to the navigation links
const links = navLinks.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', (event) => {
    event.preventDefault();

    navLinks.classList.toggle('visible');
    isNavLinksVisible = !isNavLinksVisible;
    document.body.style.overflow = '';
    menuBtn.style.display = 'block';
    menuBtnX.style.display = 'none';

    // Get the target section's ID from the href attribute
    const targetId = links[i].getAttribute('href').substring(1).toLowerCase();

    // Find the target section element
    const targetSection = document.getElementById(targetId);

    // Show navLinks temporarily to get its offset height
    navLinks.style.display = 'block';

    // Calculate the offset with navLinks offset height + additional offset
    const offset = targetId === 'about' ? 0 : targetSection.offsetTop;

    // Hide navLinks again
    navLinks.style.display = '';

    // Scroll to the target section smoothly with offset
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
}

// Function to toggle the visibility of the navigation links and change the menu button icon
function toggleNavLinks() {
  navLinks.classList.toggle('visible');
  isNavLinksVisible = !isNavLinksVisible;

  // Toggle the scrolling behavior for the body
  if (isNavLinksVisible) {
    document.body.style.overflow = 'hidden';
    menuBtn.style.display = 'none';
    menuBtnX.style.display = 'block';
  } else {
    document.body.style.overflow = '';
    menuBtn.style.display = 'block';
    menuBtnX.style.display = 'none';
  }
}

// Add click event listener to the menu button
menuBtn.addEventListener('click', toggleNavLinks);
menuBtnX.addEventListener('click', toggleNavLinks);
