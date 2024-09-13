//scroll animations

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.panoramicContainer',
        start: 'center center',
        end: '400% center',
        scrub: true,
        pin: true,
        markers: true,
    }
});
tl.to('.img-container', {
    duration: 2,
    width: "100%",
    height: "90%",
}, 0);


gsap.set('.panoramic', { backgroundSize: '180% 180%' });

tl.to('.panoramic', {
backgroundSize: "140% 140%"
}, 0);

tl.to('.panoramic', {
    duration: 4,
    backgroundPosition: "100% 100%",
    ease: "power2.inOut"
});

tl.to('.img-container', {
    duration: 2,
    width: "66.6667%",
    height: "50%",
}), 1;

tl.to('.panoramic', {
    backgroundSize: "180% 180%"
}), 1;