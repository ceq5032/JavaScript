

window.addEventListener('DOMContentLoaded',init, false);

function init() {
  alert('WELCOME. Lets have some fun with JavaScript');
}


function changeBackgroundColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}


function startCountdown(seconds) {
  let timeLeft = seconds;
  const intervalId = setInterval(() => {
    if (timeLeft === -1) {
      clearInterval(intervalId);
      alert("Time's up!");
    } else {
      document.getElementById("timer").textContent = timeLeft;
      timeLeft--;
    }
  }, 1000);
}


const funFacts = [
  "Honeybees can recognize human faces.",
  "The moon experiences moonquakes.",
  "Ice pops were invented by accident in 1905.",
"Flamingos aren't born pink",
];

function displayFunFact() {
  const randomIndex = Math.floor(Math.random() * funFacts.length);
  alert(funFacts[randomIndex]);
}


function moveBox() {
  const box = document.getElementById("box");
  let x = 0;
  const intervalId = setInterval(() => {
    if (x >= 300) {
      clearInterval(intervalId);
    } else {
      x++;
      box.style.left = x + "px";
    }
  }, 10);
}









