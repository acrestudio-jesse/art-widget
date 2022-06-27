const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu');

//Open Close Menu
const resetMenu = function () {
  menuBtn.classList.remove('active');
  menuList.classList.add('hidden');
};

document.body.addEventListener('click', function (e) {
  if (!menuBtn.classList.contains('active')) {
    return;
  }

  if (!e.target.closest('.open') && menuBtn.classList.contains('active')) {
    resetMenu();
  }
});

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menuList.classList.toggle('hidden');
});

//Modal

//Fast Travel to Menu

const fastScroll = function () {
const sections = document.querySelectorAll('.section')
const linksAll = document.querySelectorAll('.link')

  const scrollTo = function (e) {
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('hidden');


    linksAll.forEach((link, i ) => {
      if(e.target === link) {
        console.log(link);
        sections[i].scrollIntoView({ behavior: 'smooth'})
      }
    })
  };

  menuList.addEventListener('click', scrollTo);
};

//Reviews Container
const reviewContainter = function () {
  const reviews = document.querySelectorAll('.review');
  const reviewBtns = document.querySelectorAll('.view-review');
  const revBtnBox = document.querySelector('.review-buttons');

  const activateReview = function (e) {
    reviewBtns.forEach(btn => btn.classList.remove('btn-active'));
    if (!e.target.closest('.view-review')) return;
    e.target.closest('.view-review').classList.add('btn-active');

    reviewBtns.forEach((btn, i) => {
      if (btn.classList.contains('btn-active')) {
        reviews.forEach(rev => rev.style.opacity = "0");
        reviews[i].style.opacity = "100";
      }
    });
  };

  revBtnBox.addEventListener('click', activateReview);
};

//Sliders
const slider = function () {
  const slides = document.querySelectorAll('.img-slide');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  let curSlide = 0;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const slidePrev = function () {
    if (curSlide === 0) {
      curSlide = slides.length;
    }

    curSlide--;

    goToSlide(curSlide);
  };

  const slideNext = function () {
    if (curSlide === slides.length - 1) {
      curSlide = -1;
    }

    curSlide++;

    goToSlide(curSlide);
  };

  goToSlide(curSlide);

  prevBtn.addEventListener('click', slidePrev);
  nextBtn.addEventListener('click', slideNext);
};

fastScroll();
reviewContainter();
slider();
