var numSquares = 6
var colors = [];
var pickedColor;

//selectors
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init() {

  setupModeButtons();
  setupSquares();
  reset();

}

function setupModeButtons() {
    //mode buttons event listeners
    for (var i = 0; i < modeButtons.length; i++) {
      modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected")
        modeButtons[1].classList.remove("selected")
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        reset();
        });
      }
}

function setupSquares() {
  //handle squares
  for (var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //retrieve color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play again";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again"
      }
    })
  }
}



function reset() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick new random color from the array
  pickedColor = pickColor();
  //change rgb code in the header
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = "";
  //change colors of the squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}


//
// easyBtn.addEventListener("click", function(){
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
    // if (colors[i]) {
    //   squares[i].style.backgroundColor = colors[i];
    // } else {
    //   squares[i].style.display = "none";
    // }
//   }
// })
//
// hardBtn.addEventListener("click", function(){
//   easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
//       squares[i].style.backgroundColor = colors[i];
//       squares[i].style.display = "block";
//     }
// })

resetButton.addEventListener("click", function(){
  reset();
});



function changeColors(color){
  //loop through all the colors
  for (var i = 0; i < squares.length; i++) {
    //change colors to match winning color
    squares[i].style.backgroundColor = color;
    }
  }

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an empty array
  var reeks = [];
  //repeat num times
  for (var i = 0; i < num; i++){
  //push random colors to array
    reeks.push(randomColor());
  }
  //return the array
  return reeks;
  }


function randomColor() {
  //pick a "red" from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0-255
  var b = Math.floor(Math.random() * 256);
  //generate string with colors like this rgb(r, g, b);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
