var img;
let questionOperator;
let canAnswer;

document.addEventListener("DOMContentLoaded", () => {
  img = document.getElementById('question-img');
})
window.onload = function () {
  getRandomOperator();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomOperator() {
  questionOperator = operator[getRandomInt(operator.length)];
  img.classList.remove('reveal-op');
  img.src = questionOperator.art;
  canAnswer = true;
}