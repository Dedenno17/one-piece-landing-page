// character card image
const charactersHeader = document.querySelectorAll(
  ".character-card .character-card__header img"
);

// hero image
const firstImage = document.querySelectorAll("header .hero .bg")[0];
const secondImage = document.querySelectorAll("header .hero .bg")[1];
const thirdImage = document.querySelectorAll("header .hero .bg")[2];
const fourthImage = document.querySelectorAll("header .hero .bg")[3];
const fifthImage = document.querySelectorAll("header .hero .bg")[4];
const seventhImage = document.querySelectorAll("header .hero .bg")[7];
const logo = document.querySelectorAll("header .hero .bg")[5];

// hamburger menu
const hamburgerToggle = document.querySelector(".hamburger");

// modal nav
const modalNav = document.querySelector(".modal-nav");

// link modal nav
const modalNavLink = document.querySelectorAll(
  ".modal-nav .modal-nav__ul li a"
);

// background modal
const backgroundModal = document.querySelector(".background-modal");

// lebar screen
let screenWidth = window.innerWidth;

// event handler
// mentoggle character profile

charactersHeader.forEach((item) => {
  let toggle = false;
  item.addEventListener("click", function () {
    const characterProfile = this.parentElement.parentElement.lastElementChild;
    const characterImage =
      this.parentElement.parentElement.lastElementChild.firstElementChild;

    if (toggle === false) {
      toggle = true;
      characterProfile.style.height = screenWidth <= 600 ? "570px" : "850px";
      characterProfile.style.visibility = "visible";
      characterImage.style.padding = "40px";
      characterImage.style.height = "500px";
    } else {
      toggle = false;
      characterProfile.style.height = "0";
    }
  });
});

// parallax effect

window.addEventListener("scroll", function () {
  const scrollYValue = this.scrollY;

  fifthImage.style.top = scrollYValue * 0.3 + "px";
  fourthImage.style.top = scrollYValue * 0.6 + "px";
  thirdImage.style.top = scrollYValue * 0.7 + "px";
  secondImage.style.top = scrollYValue * 0.8 + "px";
  firstImage.style.top = scrollYValue * 0.9 + "px";
  seventhImage.style.left = scrollYValue * 0.9 + "px";
  logo.style.transform = `translateX(-${(scrollYValue * 20) / 100}%)`;
});

// open modal nav
hamburgerToggle.addEventListener("click", function () {
  backgroundModal.style.display = "block";
  modalNav.style.visibility = "visible";
  modalNav.style.opacity = "1";
  modalNav.style.top = "50px";
});

// close modal nav
backgroundModal.addEventListener("click", function () {
  this.style.display = "none";
  modalNav.style.visibility = "hidden";
  modalNav.style.opacity = "0";
  modalNav.style.top = "30px";
});

modalNavLink.forEach((li) => {
  li.addEventListener("click", () => {
    backgroundModal.style.display = "none";
    modalNav.style.visibility = "hidden";
    modalNav.style.opacity = "0";
    modalNav.style.top = "30px";
  });
});
