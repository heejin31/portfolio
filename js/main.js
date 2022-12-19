'use strict';

/***************** click to section *******************/
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event) => {  
  const target =event.target;
  const link = target.dataset.link;
  if(link == null){
      return;
  } 
  console.log(event.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior:'smooth'});
})


/***************** navbar toggle small screen *******************/
const navbarToggleBtn = document.querySelector('.navbar_toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});


/***************** portfolio swiper *******************/
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 100,
  lazyLoading: true,
  loop: true,
  keyboard: {
    enabled: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


