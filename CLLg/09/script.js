let quantity = 0;

const buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click", () => {
  console.log(`Cart Quantity: ${quantity}`);
});

buttons[1].addEventListener("click", () => {
  quantity += 1;
  console.log(quantity);
});

buttons[2].addEventListener("click", () => {
  quantity += 2;
  console.log(quantity);
});

buttons[3].addEventListener("click", () => {
  quantity += 3;
  console.log(quantity);
});

buttons[4].addEventListener("click", () => {
  quantity = 0;
  console.log(quantity);
});

