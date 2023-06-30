const menuBtnX = document.getElementById('menu-btn-x');
const icon = document.getElementById('logo-icon');
const logo = document.getElementById('logo');
const sections = document.querySelectorAll('section');

let isNavLinksVisible = false;

var section1 = sections[0];
section1.style.color = "white";
document.body.style.backgroundColor = '#4F7584';

logo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Function to toggle the visibility of the navigation links and change the menu button icon
function toggleNavLinks() {
  window.location.href = "index.html#contact";
}

// Add click event listener to the menu button
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