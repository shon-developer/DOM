let counter = document.querySelector("#counter");
let developer = document.querySelector("#developer");

let count = 1;

setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerHTML = count;
  }
}, 1);

setTimeout(() => {
  developer.innerHTML = "Javascript Developer";
}, 4000);
