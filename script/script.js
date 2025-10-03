const tl = gsap.timeline()
tl.from('#header-container .animation',{
    y:'50',
    opacity:0,
    duration:0.8,
    stagger:0.4
})

gsap.from('.shop-container .animation2',{
    y:'50',
    opacity:0,
    duration:0.5,
    stagger:0.3,
    scrollTrigger:{
        trigger:'.shop-container',
        scroller:'body',
        start:'top 60%',
        end:'top 20%',
        scrub:3,
        
    }
})

gsap.from('.dessert-section .animation3',{
    y:'50',
    opacity:0,
    duration:0.5,
    stagger:0.3,
    scrollTrigger:{
        trigger:'.dessert-section',
        scroller:'body',
        start:'top 60%',
        end:'top 20%',
        scrub:3,
    }
})


tl.from('.checkout .animation4',{
    x:'150',
    opacity:0,
    duration:0.8,
    stagger:0.3,
    scrollTrigger:{
        trigger:'.checkout',
        scroller:'body',
        start:'top 60%',
        end:'top 40%',
        scrub:2,
    }
})

gsap.from('.review-container .animation5',{
    x:'-150',
    opacity:0,
    duration:0.8,
    // stagger:0.3,
    scrollTrigger:{
        trigger:'.review-container',
        scroller:'body',
        start:'top 60%',
        end:'top 40%',
        scrub:1,
    }
})

gsap.from('.subscribe-container .animation6',{
    y:'50',
    opacity:0,
    duration:0.5,
    stagger:0.3,
    scrollTrigger:{
        trigger:'.subscribe-container',
        scroller:'body',
        start:'top 60%',
        end:'top 50%',
        scrub:2,
    }
})


gsap.from('.footer-section .animation7',{
    y:'50',
    opacity:0,
    duration:0.8,
    stagger:0.3,
    scrollTrigger:{
        trigger:'.footer-section',
        scroller:'body',
        start:'top 80%',
        end:'top 85%',
        scrub:3,
        markers:true
    }
})