const numBox = document.getElementById("guessbox");
const button = document.getElementById("submit");
const notification = document.getElementById("notification-text");
const counter = document.getElementById("counter");
const reset = document.querySelector(".reset-btn");
const uList = document.querySelector(".dice");
let guessNumber = null;
let trys = null;
let count = 8;
counter.innerText = count;

// Number Gen
const number = Math.floor(Math.random() * 90) + 11;
let randNum = number.toString();

// regex validation
const validate = (input) => {
  const regex = /^0*(?:[1-9][0-9]?|100)$/;
  if (!regex.test(input)) {
    return "only numbers from 1-100";
  }
  return false;
};

reset.addEventListener("click", function (e) {
  e.preventDefault();
  location.reload();
});

// submitt Button
button.addEventListener("click", function (e) {
  e.preventDefault();
  const notAllowed = validate(numBox.value);
  if (notAllowed) {
    numBox.value = "";
    return (notification.innerText = notAllowed);
  } else if (count === 0) {
    notification.innerText = "Sorry, Out of attempts!";
    gameOff();
  } else {
    trys += 1;
    gameRules();
    addDice();
    numBox.value = "";
    count -= 1;
    counter.innerText = count;
  }
});

function gameRules() {
  const yourNumber = numBox.value;
  if (yourNumber === randNum) {
    notification.innerText = `Wonderfull you did it in ${trys} attempts!`;
    gameOff();
  } else if (yourNumber > number) {
    notification.innerText = `The number is lower then ${yourNumber}`;
  } else if (yourNumber < number) {
    notification.innerText = `The number is higher then ${yourNumber}`;
  }
}

// Game Dice

function addDice() {
  const li = document.createElement("li");
  uList.append(li);
  li.innerText = numBox.value;
}

// Game on or Game off

function gameOff() {
  button.disabled = true;
  numBox.disabled = true;
}

function gameOn() {
  button.disable = false;
  numBox.disabled = false;
}
