// variables
let player, enemy1, enemy2, enemy3;
const start = document.querySelector(".main");

// functions
const removClass = (target, className) => target.classList.remove(className);

// active functions
start.addEventListener("click", function() {
  fadeOut(start);
});
randEnemy1();
randEnemy2();
console.log(enemy1);
console.log(enemy2);
