const menuBtn = document.getElementById('menu-btn');
const menuBtnX = document.getElementById('menu-btn-x');
const navColor = document.getElementById('navbar');
const langColor= document.getElementById('lang-color');
const navLinks = document.getElementById('nav-links');
const bitlogo = document.getElementById('logo-icon');
const links = navLinks.getElementsByTagName('a');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const main = document.querySelector('main');
const logo = document.getElementById('logo');
const mainDivs = main.getElementsByTagName("div");
const para1 = document.getElementById('para1');
const para2 = document.getElementById('para2');

//pics from https://www.webdew.com/blog/best-digital-marketing-tactics
menuBtn.classList.toggle('visible');

function browserType() { 
  if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 )  {
    return 1;
  } else if(navigator.userAgent.indexOf("Edg") != -1 ) {
    return 2;
  } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
    return 3;
  } else if(navigator.userAgent.indexOf("Safari") != -1) {
    return 4;
  } else if(navigator.userAgent.indexOf("Firefox") != -1 )  {
    return 5;
  } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
    return 6;
  } else {
    return 0;
  }
}

var ismobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
if (ismobile) {
  para1.remove();
  para2.remove();
}

const sectionColors = {
  home: {
    backgroundColor: '#446570',
  },
  about: {
    backgroundColor: '#F2C744', // yellow
  },
  work1: {
    backgroundColor: '#ff8f00', // orange
  },
  work2: {
    backgroundColor: '#6a263a', // red
  },
  work3: {
    backgroundColor: '#3949ab', // purple
  },
  work4: {
    backgroundColor: '#44704b', // green
  },
  contact: {
    backgroundColor: '#446570', // blue grey WHITE
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
  if (sectionColors.hasOwnProperty(s)) {
    console.log(s);
    document.body.style.transition = 'background-color 0.8s';
    document.body.style.backgroundColor = sectionColors[s].backgroundColor;
    // Check if the current section is the "about" section
    if ((s === 'about') || (s === 'work1')) {
      // Remove white color from the SVG logo, menu button, and close button
      navColor.classList.remove('white');
      langColor.classList.remove('white');
      bitlogo.setAttribute("href", "assets/waves-b.svg");
    } else {
      // Apply white color to the SVG logo, menu button, and close button
      navColor.classList.add('white');
      langColor.classList.add('white');
      bitlogo.setAttribute("href", "assets/waves-w.svg");
    }
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
  
  // Toggle the scrolling behavior for the body
  if (navbar.classList.contains("active")) {
    console.log("lit");
    main.classList.add('transparent'); // Add this line to restore the text visibility
    document.body.style.overflow = 'hidden';
    opacityStrength = "0.15";
    navColor.classList.add('white');
    langColor.classList.add('white');
    bitlogo.setAttribute("href", "assets/waves-w.svg");
  } else {
    main.classList.remove('transparent'); // Add this line to restore the text visibility
    document.body.style.overflow = '';
    const s = getId();
    if ((s === 'about') || (s === 'work1')) {
      // Remove white color from the SVG logo, menu button, and close button
      navColor.classList.remove('white');
      langColor.classList.remove('white');
      bitlogo.setAttribute("href", "assets/waves-b.svg");
      console.log("lit2");
    }
  }

  //console.log(navLinks.classList.contains("visible"));
  for (var i = 0; i < mainDivs.length; i++) {
    mainDivs[i].style.opacity = opacityStrength;
  }
}

// Add click event listener to the menu button
menuBtn.addEventListener('click', toggleNavLinks);
menuBtnX.addEventListener('click', toggleNavLinks);


// Binary to word animation
var binaryElement = document.getElementById("binary");
var binarySegments = [
  "0110001", "0110", "001101", "01101", "0110", "010", "0101"
];
var wordSegments = [
  "Coder", "le", "Monde", "<br>", "Bit", "par", "Bit."
];
var currentSegment = 0;
var bitIndex = 0;

function typeBinary() {
  var binarySegment = binarySegments[currentSegment];
  var bit = binarySegment[bitIndex];

  binaryElement.innerHTML += bit;
  bitIndex++;

  if (bitIndex === binarySegment.length) {
    binaryElement.innerHTML += " ";
    bitIndex = 0;
    if (currentSegment < wordSegments.length) {
      typeWord(currentSegment);
    }
    currentSegment++;
  }

  if (currentSegment === binarySegments.length && bitIndex === 0) {
    setTimeout(deleteSentence, 4000); // Wait before deleting the sentence
  } else {
    setTimeout(typeBinary, 155); // Adjust the typing speed for binary segments here (in milliseconds)
  }
}

function typeWord(index) {
  binaryElement.innerHTML = wordSegments.slice(0, index + 1).join(" ") + " ";
}

function deleteSentence() {
  var sentence = binaryElement.innerHTML;
  var intervalId = setInterval(function() {
    sentence = sentence.slice(0, -1);
    binaryElement.innerHTML = sentence;
    if (sentence === "") {
      clearInterval(intervalId);
      setTimeout(startAnimation, 2300); // Wait before restarting the animation
    }
  }, 50); // Adjust the deletion speed here (in milliseconds)
}

function startAnimation() {
  currentSegment = 0;
  bitIndex = 0;
  binaryElement.innerHTML = "";
  typeBinary();
}

// Start the binary to word typing animation
startAnimation();