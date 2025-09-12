// Seleciona o botão pelo ID
const changeBgButton = document.getElementById('changeBgButton');

// Função que alterna a classe background-changed no body
changeBgButton.addEventListener('click', function() {
  document.body.classList.toggle('background-changed');
});
