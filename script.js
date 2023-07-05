const menuBtn = document.getElementById('menu-btn');
const menuBtnX = document.getElementById('menu-btn-x');
const navColor = document.getElementById('navbar');
const navLinks = document.getElementById('nav-links');
const bitlogo = document.getElementById('logo-icon');
const links = navLinks.getElementsByTagName('a');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const main = document.querySelector('main');
const logo = document.getElementById('logo');
const mainDivs = main.getElementsByTagName("div");

var section1 = sections[0];
var section4 = sections[3];
var section6 = sections[5];
section1.classList.toggle('white');
section4.classList.toggle('white');
section6.classList.toggle('white');
menuBtn.classList.toggle('visible');

const sectionColors = {
  home: {
    backgroundColor: '#4D5432', // sage green WHITE
  },
  about: {
    backgroundColor: '#CAB565', // brown
  },
  work1: {
    backgroundColor: '#CCA2A5', // pink
  },
  work2: {
    backgroundColor: '#6B8791', // blue grey WHITE
  },
  work3: {
    backgroundColor: '#A993BD', // purple
  },
  contact: {
    backgroundColor: '#4D5432', // sage green WHITE
  }
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
      return section.id;
    }
  }
}

// Add scroll event listener to the window
window.addEventListener('scroll', () => {
  const s = getId();
  document.body.style.transition = 'background-color 0.45s';
  console.log(s);
  document.body.style.backgroundColor = sectionColors[s].backgroundColor;

  // Check if the current section is the "about" section
  if ((s === 'home') || (s === 'work2') || (s === 'contact')) {
    // Apply white color to the SVG logo, menu button, and close button
    navColor.classList.add('white');
    bitlogo.setAttribute("href", "assets/waves-w.webp");
  } else {
    // Remove white color from the SVG logo, menu button, and close button
    navColor.classList.remove('white');
    bitlogo.setAttribute("href", "assets/waves-b.webp");
  }
});

// Add click event listeners to the navigation links
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', (event) => {
    event.preventDefault();    
    toggleNavLinks();

    // Find the target section element
    const targetSection = document.getElementById(links[i].getAttribute('href').substring(1));
    // Scroll to the target section smoothly with offset
    window.scrollTo({ top: targetSection.offsetTop, behavior: 'smooth' });
  });
}

// Function to toggle the visibility of the navigation links and change the menu button icon
function toggleNavLinks() {
  var opacityStrength = "1";
  navbar.classList.toggle('active');
  navLinks.classList.toggle('visible');

  menuBtn.classList.toggle('visible');
  menuBtnX.classList.toggle('visible');
  section1.classList.toggle('white');
  section4.classList.toggle('white');
  section6.classList.toggle('white');
  
  // Toggle the scrolling behavior for the body
  if (navLinks.classList.contains("visible")) {
    navColor.classList.add('white');
    bitlogo.setAttribute("href", "assets/waves-w.webp");
    main.classList.add('transparent'); // Add this line to restore the text visibility
    document.body.style.overflow = 'hidden';
    opacityStrength = "0.4";
  } else {
    navColor.classList.remove('white');
    bitlogo.setAttribute("href", "assets/waves-b.webp");
    main.classList.remove('transparent'); // Add this line to restore the text visibility
    document.body.style.overflow = '';
  }

  //console.log(navLinks.classList.contains("visible"));
  for (var i = 0; i < mainDivs.length; i++) {
    mainDivs[i].style.opacity = opacityStrength;
  }
}

// Add click event listener to the menu button
menuBtn.addEventListener('click', toggleNavLinks);
menuBtnX.addEventListener('click', toggleNavLinks);

var txtTypeHome = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
};

txtTypeHome.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = this.txt;

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  var el = document.getElementById("typed-main");
  if (el) {
      for (var i = 0; i < elements.length; i++) {
          var toRotate = elements[i].getAttribute("data-type");
          var period = elements[i].getAttribute("data-period");
          if (toRotate) {
              new txtTypeHome(el, JSON.parse(toRotate), period);
          }
      }
  }
}