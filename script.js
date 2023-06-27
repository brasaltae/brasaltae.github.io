const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');

const sectionColors = {
  about: {
    backgroundColor: '#D3C17F', // brown
  },
  work: {
    backgroundColor: '#C1D37F', // sage green
  },
  contact: {
    backgroundColor: '#7FD3C1', // teal
  },
};

function getActiveSectionId() {
  let maxSection = sections[0];
  let maxSectionHeight = 0;

  sections.forEach((section) => {
    const sectionHeight = section.getBoundingClientRect().height;
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;

    // Consider the section active if it occupies more than half of the viewport's height
    if (sectionHeight > maxSectionHeight && sectionTop <= window.innerHeight / 2 && sectionBottom >= window.innerHeight / 2) {
      maxSection = section;
      maxSectionHeight = sectionHeight;
    }
  });

  let targetId = maxSection ? maxSection.getAttribute('id') : '';
  const section = document.getElementById(targetId);
  return sectionColors[targetId].backgroundColor;
}


// Add click event listener to the menu button
menuBtn.addEventListener('click', () => {
  // Toggle the "visible" class on the navigation links
  navLinks.classList.toggle('visible');

  if (navLinks.classList.contains('visible')) {
    document.body.style.overflow = 'hidden';
    applySectionBackground(getActiveSectionId()); // Reset navbar background color
  } else {
    document.body.style.overflow = '';
  }
});

// Add click event listeners to the navigation links
const links = navLinks.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', (event) => {
    event.preventDefault();

    navLinks.classList.toggle('visible');
    document.body.style.overflow = '';

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
