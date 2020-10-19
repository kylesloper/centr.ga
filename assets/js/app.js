(function($) {
  "use strict";
/*--
  Menu Sticky
-----------------------------------*/
var $window = $(window);
$window.on('scroll', function() {
var scroll = $window.scrollTop();
if (scroll < 300) {
  $(".sticker").removeClass("stick");
}else{
  $(".sticker").addClass("stick");
}
});

  
$('a[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
var target = $(this.hash);
target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
if (target.length) {
$('html, body').animate({
  scrollTop: target.offset().top - 75
}, 1000);
return false;
}
}
});
  
/*--
Counter UP
-----------------------------------*/
$('.counter').counterUp({
  delay: 20,
  time: 3000
});

// Close Modal
$(".close").on('click',function(){
$(".modalDialog").css({"opacity":"0","pointer-events":"none"});
});	

/* copywrite protection */
$("body").on("contextmenu",function(e){
return false;
});

$("img").mousedown(function(e){
e.preventDefault()
});

//countdown
const countdown = document.querySelector('.countdown');


// Set Launch Date (ms)
const launchDate = new Date('July 02, 2021 22:33:00').getTime();

// Update every second
const intvl = setInterval(() => {
// Get todays date and time (ms)
const now = new Date().getTime();

// Distance from now and the launch date (ms)
const distance = launchDate - now;

// Time calculation
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor(
  (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display result
countdown.innerHTML = `
<div>${days}<span>Days</span></div> 
<div>${hours}<span>Hours</span></div>
<div>${mins}<span>Minutes</span></div>
<div>${seconds}<span>Seconds</span></div>
`;

// If launch date is reached
if (distance < 0) {
  // Stop countdown
  clearInterval(intvl);
  // Style and output text
  countdown.style.color = '#17a2b8';
countdown.innerHTML = 'Launched!';
let modal = document.querySelector('.modalDialog');
modal.classList.add('HideModalClass'); 
window.scrollTo(0,0);}


  // 10 sec vid
  if (distance < 10000) {
  // Style and output text
  countdown.style.color = '#FF0000'; }

}, 1000);


var vid = document.getElementById("countdown");
var vidshow = document.getElementById("vidshow");


    setTimeout(function(){
$(".logo-blink").css({"opacity":"0","pointer-events":"none"});
}, 200);



})(jQuery);



