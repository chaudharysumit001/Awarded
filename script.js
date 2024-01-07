var tl = gsap.timeline({
    scrollTrigger : {
        trigger:"#home",
        start: "top top",
        scrub : 1,
        pin:true,
        end: "bottom -250%"
    }
})
tl
    .to("#circle #btm img", {
        scale: 1,
        rotate:"-180deg",
        duration: 1,
        stagger: .1,
        ease: Power1,
    },"hello")
    .to("#circle #top img", {
        scale: 1,
        duration: 1,
        stagger: .1,
        ease: Power1,
    },"hello")
    .to("#cimage img", {
        scale:"0",
        duration: 1,
        stagger: .1,
        ease: Power1,

    },"hello")
    .to("#centerimg h5", {
        opacity:0,
        stagger: .1,
        ease: Power1,

    },"hello")
    .to("#circle", {
        scale: .6,
        opacity:0,
        ease: Power1,
    },"hello")
    .to("#overlay #gallery", {
        bottom:"-150%",
        ease: Power1
    },"hello")
    .to("#gola", {
        top: "50%",
        scale: 2,
        ease: Power1
    },"hello")
    .to("#gola", {
        opacity: 0,
        ease: Power1
    },"hello2")
    .to("#smcircle", {
        scale:0,
        ease: Power1,
    },"hello1")
    .to("#circle", {
        scale:0,
        ease: Power1,
    },"hello1")
    .to("#overlay #pf", {
        rotate: 0,
        bottom: "2%",
        ease: Power1
    },"hello2")
    .to("#pinkpart", {
        top: "0%",
        ease: Power1
    })
    .to("#pinkpart", {
        top: "-50%",
        duration: 3,
        ease: Power1
    })
    