const grid = document.querySelector("#gridContainer");
const resetButton = document.querySelector("#reset");
let userInput;
const squareColor = "#F25287";

createGrid = () => {
  grid.style.gridTemplateColumns = `repeat(16, 2fr)`;
  grid.style.gridTemplateRows = `repeat(16, 2fr)`;
  for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = squareColor;
    });
    grid.appendChild(div);
  }
};

updateGrid = () => {
  let number = prompt("Please choose the size of your grid.");
  if (number <= 100 && number > 0) {
    userInput = number;
  } else {
    alert("Please enter a valid number");
  }
  grid.innerHTML = "";
  grid.style.setProperty("grid-template-columns", `repeat(${userInput}, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(${userInput}, 2fr)`);
  for (let i = 0; i < userInput * userInput; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = squareColor;
    });
    grid.appendChild(div);
  }
  console.log(userInput);
};

resetGrid = () => {
  const resetNumber = 16;
  grid.innerHTML = "";
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${resetNumber}, 2fr)`
  );
  grid.style.setProperty("grid-template-rows", `repeat(${resetNumber}, 2fr)`);
  for (let i = 0; i < resetNumber * resetNumber; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = squareColor;
    });
    grid.appendChild(div);
  }
};

createGrid();
