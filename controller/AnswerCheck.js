let answer;
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    answer = document.getElementById('answer-input');
    img.classList.add('reveal-op');
    answer.disabled = true;
    if (answer.value.toLowerCase() === questionOperator.name) {
      document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 1;
      if (parseInt(document.getElementById('score').innerHTML) == 4) {
        img.classList.add('level-2');
      }
      setTimeout(newRound, 3000);
    } else {
      showPopup();
      setTimeout(resetMatch, 3000)
    }
  }
});

function showPopup() {
  document.getElementById('popup').hidden = false;
  const opName = questionOperator.name.charAt(0).toUpperCase() + questionOperator.name.slice(1);
  document.getElementById('popup').innerHTML = "Errou... o correto seria " + opName;
}

function hidePopup() {
  document.getElementById('popup').hidden = true;
}

function resetMatch() {
  img.classList.remove('level-2');
  getRandomOperator();
  hidePopup();
  document.getElementById('score').innerHTML = 0;
  answer.disabled = false;
}

function newRound() {
  answer.disabled = false;
  getRandomOperator();
}