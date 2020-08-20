var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var currentColor = colors[0];
var colorRGBText = document.getElementById("currentColor");
var newColorButton = document.getElementById("newColor");
var messageDisplay = document.querySelector("#message");
var heading = document.querySelector("#heading");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
var mode = "hard";

function generateRandomColors(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  return (
    "rgb(" +
    Math.floor(Math.random() * 256) +
    ", " +
    Math.floor(Math.random() * 256) +
    ", " +
    Math.floor(Math.random() * 256) +
    ")"
  );
}
function playGame() {
  document.body.style.backgroundColor = "#232323";
  newColorButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  for (var i = 0; i < colors.length; i++) {
    colors[i] = randomColor();
  }
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.opacity = "1";
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function () {
      var clickedColor = this.style.backgroundColor;

      if (clickedColor === currentColor) {
        changeColors(clickedColor);
        messageDisplay.textContent = "Correct!";
        newColorButton.textContent = "Play Again?";
      } else {
        this.classList.add(".hidden");
        this.style.opacity = "0";
        messageDisplay.textContent = "Try Again";
      }
    });
  }

  currentColor = colors[Math.floor(Math.random() * colors.length)];
  colorRGBText.textContent = currentColor;
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.opacity = "1";
    squares[i].style.backgroundColor = color;
  }

  heading.style.backgroundColor = currentColor;
}

newColorButton.addEventListener("click", function () {
  heading.style.backgroundColor = "#232323";
  playGame();
});

easyButton.addEventListener("click", function () {
  heading.style.backgroundColor = "#232323";
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  if (mode === "hard") {
    colors = generateRandomColors(3);
    for (var i = 3; i < squares.length; i++) {
      squares[i].style.display = "none";
    }
    mode = "easy";

    playGame();
  } else {
  }
});

hardButton.addEventListener("click", function () {
  heading.style.backgroundColor = "#232323";
  easyButton.classList.remove("selected");
  hardButton.classList.add("selected");
  if (mode === "easy") {
    colors = generateRandomColors(6);
    for (var i = 3; i < squares.length; i++) {
      squares[i].style.display = "block";
    }
    mode = "hard";
    playGame();
  } else {
  }
});

playGame();
