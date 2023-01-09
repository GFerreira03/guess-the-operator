var img;
let questionOperator;
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
  answer.value = "";
}