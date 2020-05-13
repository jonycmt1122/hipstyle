$(document).ready(function (){
  $('.testimonial_active ').owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause: true,
      smartSpeed:1000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          800:{
            items:1
          },
          1000:{
              items:1
          }
      }
  });
    $('select').niceSelect();

    /*scroll button*/
 $(window).scroll(function(){
 if($(this).scrollTop() > 800){
   $('#topBtn').fadeIn();
 }else {
   $('#topBtn').fadeOut();
 }
})
 $('#topBtn').click(function(){
   $('html,body').animate({
     scrollTop: 0},800);
 });
});

function showNav() {
  document.getElementById('myNav').style.width='80%';
}
function hideNav() {
  document.getElementById('myNav').style.width='0%';
}
var Preloader=document.getElementById("loading");
function myFunction(){
  Preloader.style.display="none"}

  /*navbar scroll*/
  $(window).scroll(function () {
      var window_top = $(window).scrollTop() + 1;
      if (window_top > 50) {
        $('.navbar').addClass('menu_fixed animate fadeIn');
      } else {
        $('.navbar').removeClass('menu_fixed fadeOut');
      }
    });
