const fadeOut = function(target) {
  gsap.to(target, 1, {
    x: -300,
    stagger: 0.6,
    ease: Power2.easeOut
  });
};
