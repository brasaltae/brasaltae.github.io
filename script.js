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
const para1 = document.getElementById('para1');
const para2 = document.getElementById('para2');

//pics from https://www.webdew.com/blog/best-digital-marketing-tactics
var section1 = sections[0];
var section4 = sections[3];
var section5 = sections[4];
var section6 = sections[5];
section1.classList.toggle('white');
section4.classList.toggle('white');
section5.classList.toggle('white');
section6.classList.toggle('white');
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
if (ismobile){
  //para1.remove();
  //para2.remove();
  if (sections.length > 1) {
    if (sections[1].id === "about") {
      if (browserType() === 3) {
        sections[1].classList.add("androidchrome");
      } else if (browserType() === 4) {
        sections[1].classList.add("iossafari");
      }
    }
  }
}

const sectionColors = {
  home: {
    backgroundColor: 'black', // sage green WHITE
  },
  about: {
    backgroundColor: '#CAB565', // yellow brown
  },
  work1: {
    backgroundColor: '#a37e80', // pink
  },
  work2: {
    backgroundColor: '#446570', // blue grey WHITE
  },
  work3: {
    backgroundColor: '#58426b', // purple
  },
  contact: {
    backgroundColor: '#42472a', // sage green WHITE
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
    if ((s !== 'home') && (s !== 'work2') && (s !== 'work3') && (s !== 'contact')) {
      // Remove white color from the SVG logo, menu button, and close button
      navColor.classList.remove('white');
      bitlogo.setAttribute("href", "assets/waves-b.webp");
    } else {
      // Apply white color to the SVG logo, menu button, and close button
      navColor.classList.add('white');
      bitlogo.setAttribute("href", "assets/waves-w.webp");
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
  section1.classList.toggle('white');
  section4.classList.toggle('white');
  section5.classList.toggle('white');
  section6.classList.toggle('white');
  
  // Toggle the scrolling behavior for the body
  if (navbar.classList.contains("active")) {
    console.log("lit");
    main.classList.add('transparent'); // Add this line to restore the text visibility
    document.body.style.overflow = 'hidden';
    opacityStrength = "0.4";
    navColor.classList.add('white');
    bitlogo.setAttribute("href", "assets/waves-w.webp");
  } else {
    main.classList.remove('transparent'); // Add this line to restore the text visibility
    document.body.style.overflow = '';
    const s = getId();
    if ((s !== 'home') && (s !== 'work2') && (s !== 'work3') && (s !== 'contact')) {
      // Remove white color from the SVG logo, menu button, and close button
      navColor.classList.remove('white');
      bitlogo.setAttribute("href", "assets/waves-b.webp");
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
  "Coding", "the", "World", "<br>", "Bit", "by", "Bit."
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


