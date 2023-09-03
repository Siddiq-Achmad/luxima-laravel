//loader
let loader = gsap.timeline({yoyo:true})

    loader.to('.bluee', {
        duration: 0.5,
        delay: 1,
        attr: { d: 'M0 502S175 272 500 272s500 230 500 230V0H0Z'},
        ease: 'power2.in',
    })
    .to('.bluee', {
        duration: 0.5,
        attr: { d: 'M0 2S175 1 500 1s500 1 500 1V0H0Z'},
        ease: 'power2.out',

    })



  gsap.to(".loader", 1, {
    delay: 1,
    opacity: 0,
    ease:"power2.inOut",
  });


  gsap.to(".vtext .ovallink", {
    xPercent: -100,
    x: -innerWidth,
    ease: "none",
    scrollTrigger: {
      pinnedContainer: ".vendor",
      trigger: ".vtext",

      start: "bottom bottom",
      end: () => innerWidth,
      scrub: true,
      //invalidateOnRefresh: true
    }
  });



  const tl = gsap.timeline({
    defaults: {
        ease: "power4.out"
    }
  });


  tl.fromTo("p, ul, li",{
    opacity: 0,
    y: "100%"
  },{
    duration: 1,
    y: "0%",
    opacity: 1
  });

  tl.fromTo("h1, h2, h3, h4, h5, h6",{
    opacity: 0,
    y: "100%"
  },{
    duration: 1,
    y: "0%",
    opacity: 1
  });


  tl.fromTo(".vendor",{
    opacity: 0,
    x: "-100%",
  },{
    duration: 1,
    x: "0",
    opacity: 1,
  });

  tl.fromTo(".lxm",{
    opacity: 0,
    y: "-100%",
  },{
    y: "0",
    opacity: 1,
    duration: 2,
    ease: "elastic.out(1, 0.5)",
  });


  tl.fromTo(".navlink",{
    opacity: 0,
    y: "-100%",
  },{
    y: "0",
    opacity: 1,
    duration: 2,
    ease: "elastic.out(1, 0.5)",
  },"-=1.5");









