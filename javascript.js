let color = "black";
let click = true;

function createDivs(input) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${input}, 1fr)`;

  let amount = input * input;

  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.addEventListener("touchmove", colorSquare);

    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}
createDivs(16);

const sizeSlider = document.getElementById("sizeSlider");
const initialValue = 16;

document.getElementById(
  "sliderValue"
).textContent = `${initialValue}x${initialValue}`;

function sliderValue(input) {
  const sliderValue = document.querySelector("#sliderValue");
  sliderValue.textContent = `${input.value}x${input.value}`;
  input.addEventListener("input", (event) => {
    sliderValue.textContent = `${event.target.value}x${event.target.value}`;
  });
}

function colorSquare() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function changeSize(input) {
  createDivs(input);
}

function changeSlider(input) {
  sliderValue(input);
}

function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}
document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON" && e.target.tagName != "INPUT" && e.target.tagName != "SPAN" && e.target.tagName != "I"){
    click = !click;
    if (click) {
      document.querySelector(".mode").textContent = "Mode: Coloring";
    } else {
      document.querySelector(".mode").textContent = "Mode: Not coloring";
    }
  }
});
