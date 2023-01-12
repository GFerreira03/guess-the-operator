var img;
let questionOperator;
let canAnswer;
window.onload = function () {
  img = document.getElementById('question-img');
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
  document.getElementById('answer-input').value == "";
}