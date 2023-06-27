// Get the menu button and navigation links
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

// Add click event listener to the menu button
menuBtn.addEventListener('click', () => {
  // Toggle the "visible" class on the navigation links
  navLinks.classList.toggle('visible');
});

// Add click event listeners to the navigation links
const links = navLinks.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior
    
    // Get the target section's ID from the href attribute
    const targetId = links[i].getAttribute('href').substring(1);
    
    // Find the target section element
    const targetSection = document.getElementById(targetId);
    
    // Scroll to the target section smoothly
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
}
