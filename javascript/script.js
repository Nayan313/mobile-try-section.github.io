
//image slider
//
var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation
var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });

      slides[i].classList.add("active");
      btns[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 5000);
  };
  repeater();
};
repeat();

//tab bar [women    men    kid]

let TrendingWomenPage = document.getElementById("trendingWomenPage");
let TrendingMenPage = document.getElementById("trendingMenPage");
let TrendingKidPage = document.getElementById("trendingKidPage");

let TrendingBtn1 = document.getElementById("trendingBtn1");
let TrendingBtn2 = document.getElementById("trendingBtn2");
let TrendingBtn3 = document.getElementById("trendingBtn3");

function openWOMEN() {
  TrendingWomenPage.style.display = "flex";
  TrendingMenPage.style.display = "none";
  TrendingKidPage.style.display = "none";
  TrendingBtn1.style.color = "#1a1f71";
  TrendingBtn2.style.color = "#9c9c9c";
  TrendingBtn3.style.color = "#9c9c9c";
  TrendingBtn3.style.borderColor = "#fff";
  TrendingBtn2.style.borderColor = "#fff";
  TrendingBtn1.style.borderColor = "#1a1f71";
}
function openMEN() {
  TrendingWomenPage.style.display = "none";
  TrendingMenPage.style.display = "flex";
  TrendingKidPage.style.display = "none";
  TrendingBtn1.style.color = "#9c9c9c";
  TrendingBtn2.style.color = " #1a1f71";
  TrendingBtn3.style.color = "#9c9c9c";
  TrendingBtn1.style.borderColor = "#fff";
  TrendingBtn3.style.borderColor = "#fff";
  TrendingBtn2.style.borderColor = "#1a1f71";
}
function openKID() {
  TrendingWomenPage.style.display = "none";
  TrendingMenPage.style.display = "none";
  TrendingKidPage.style.display = "flex";
  TrendingBtn1.style.color = "#9c9c9c";
  TrendingBtn2.style.color = "#9c9c9c";
  TrendingBtn3.style.color = "#1a1f71";
  TrendingBtn1.style.borderColor = "#fff";
  TrendingBtn2.style.borderColor = "#fff";
  TrendingBtn3.style.borderColor = "#1a1f71";
}
