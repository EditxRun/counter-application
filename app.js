let decrement = document.querySelector("#decre-btn");
let increment = document.querySelector("#incre-btn");

let increClick = document.querySelector("#incre-click-counter");
let decreClick = document.querySelector("#decre-click-counter");

let displayCounter = document.querySelector("#counter");

let counter = 0;
let increClicks = 0,
  decreClicks = 0;

increment.addEventListener("click", () => {
  counter = counter < 10 ? counter + 1 : 0;
  increClicks = increClicks >= 10 ? 0 : increClicks + 1;
  display();
});
decrement.addEventListener("click", () => {
  counter = counter > 0 ? counter - 1 : 0;
  decreClicks = decreClicks >= 10 ? 0 : decreClicks + 1;
  display();
});

const display = () => {
  displayCounter.innerText = counter;
  increClick.innerText = increClicks;
  decreClick.innerText = decreClicks;
};
