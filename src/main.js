// variables
let player, enemy1, enemy2, enemy3;
const start = document.querySelector(".main");

// functions
const fadeOut = function(target) {
  gsap.to(target, 1, {
    x: -300,
    stagger: 0.6,
    ease: Power2.easeOut
  });
};
const removClass = (target, className) => target.classList.remove(className);

// active functions
start.addEventListener("click", function() {
  fadeOut(start);
});
randEnemy1();
randEnemy2();

console.log(enemy1);
console.log(enemy2);
