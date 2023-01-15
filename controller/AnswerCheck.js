let answer;

document.addEventListener("DOMContentLoaded", () => {
  answer = document.getElementById('answer-input');
})

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && canAnswer == true) {
    canAnswer = false;
    img.classList.add('reveal-op');
    answer.disabled = true;
    if (answer.value.toLowerCase().trim() === questionOperator.name) {
      document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 1;
      if (parseInt(document.getElementById('score').innerHTML) == 10) {
        img.classList.add('level-2');
      }
      setTimeout(() => {
        newRound();
        answer.value = '';
      }, 3000);
    } else {
      showPopup();
    }
  }
});

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
