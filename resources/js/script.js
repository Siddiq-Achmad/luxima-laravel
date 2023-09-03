

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,

        },
        600:{
            items:2,

        },
        1000:{
            items:3,

        }
    }
})

var btn = $('.btn');

btn.on('click', function() {
  $(this).toggleClass('active not-active');
});





//Hamburger Start
$('.hamburger').on("click", function(e){
    $('.hamburger.active').not(this).removeClass('active');
     $(this).toggleClass('active');
 });

 var $hamburger = $('.hamburger');

 gsap.set('.line01',{x:40});
 gsap.set('.line03',{x:-40});
 //gsap.set('.navigation',{xPercent:-50, yPercent:-50})
 gsap.set('.navigation li',{x:0, opacity:0});

 var hamburgerMotion = gsap.timeline();
 hamburgerMotion.to('.line03',0.4,{x:'-=40'},0)
 hamburgerMotion.to('.line01',0.4,{x:'+=40'},0)
 hamburgerMotion.to('.menu',0.4,{autoAlpha:1},0)
 hamburgerMotion.staggerTo('.navigation li',0.4,{y:-30, opacity:1, ease: "sine.out"},0.2,0.5)
 hamburgerMotion.to('.copyright',0.4,{y:-20, opacity:1, ease: "sine.Out"},0.2,0.5)
 // hamburgerMotion.to('.navigation li',1,{marginBottom:'40px', ease: Power1.easeOut})
 // hamburgerMotion.from('.getintouch',.8,{y:30, opacity:0, ease: "sine.out"})
 hamburgerMotion.reverse();

 $hamburger.on('click', function(e) {
   hamburgerMotion.reversed(!hamburgerMotion.reversed());
 });


 $('.menu-links').on("mouseover", function (e){
     gsap.to($(this), .4, {x:20, ease: "sine.out"});
 })

 $('.menu-links').on("mouseout", function (e){
     gsap.to($(this), .4, {x:0, ease: "sine.out"});
 })


 $(".hamburger").on("click", function (e) {
   if ($(this).hasClass("active")) {
     $(".cursor-follower").addClass("reverse");
   }
   else {
     $(".cursor-follower").removeClass("reverse");
   }
 });


 $('.menu-links').on("click", function (e){

     e.preventDefault()

     hamburgerMotion.reversed(!hamburgerMotion.reversed());
     $('.hamburger.active').removeClass('active');

     const goTo = $(this).attr("href");
     hamburgerMotion.eventCallback('onReverseComplete', () => { window.location = goTo })


 })



 //Back to TOP
 const btt = document.querySelector(".backtotop");

 btt.addEventListener("click", () => gsap.to(window, {
   duration: 0.1,
   scrollTo: 0,
   ease: "Power1.easeInOut"
 }));
 gsap.set(btt, {y: 50});

 gsap.to(btt, {
   y: 0,
   autoAlpha: 1,
   scrollTrigger: {
     trigger: "body",
     start: "top -20%",
     end: "top -20%",
     scrub: 1,
     toggleActions: "play none reverse none"
   }
 });



