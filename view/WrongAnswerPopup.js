function hidePopup() {
  const popup = document.getElementById('popup');
  popup.hidden = true;
}

function showPopup() {
  const popup = document.getElementById('popup');
  popup.hidden = false;
  const opName = questionOperator.name.charAt(0).toUpperCase() + questionOperator.name.slice(1);
  popup.innerHTML = "Errou... o correto seria " + opName;
  let width = 100;
  let id = setInterval(() => {
    if (width <= 1) {
      resetMatch();
      clearInterval(id);
      answer.value = '';
    }
    width -= .1;
    popup.style.setProperty('--width', width);
  }, 3);
}