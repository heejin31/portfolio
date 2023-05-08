$(function(){
   /* Trigger */
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  $('section, .menu a').click(function(){
    $('.gnb').removeClass('active')
    $('.trigger').removeClass('active')
  })
  /* Smooth Scrolling */
  /* $('.menu a').click(function(e) {
    e.preventDefault();
    $.scrollTo(0, 500);
  }); */

  /* Change CSS Scroll */
  $(window).scroll(function(){
    if($(window).scrollTop() > 50){
      $('header, .goTop').addClass('active')
    }else {
      $('header, .goTop').removeClass('active')
    }
  })

  /* slick.js skill */
  $('.listSlider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 2,
  })
  /* slick.js portfolio */
  $('.portfolioPhoto').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade:true,
    autoplay:true,
    autoplaySpeed:2000,
    cssEase:"linear"
  })

})