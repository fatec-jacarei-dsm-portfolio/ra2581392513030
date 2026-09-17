// Seleciona o botão pelo ID
const changeBgButton = document.getElementById('changeBgButton');

// Função que alterna a classe background-changed no body e no html
// (o html precisa da classe também para que o fundo mude até nas
// bordas da tela, em monitores mais largos que o conteúdo)
changeBgButton.addEventListener('click', function() {
  document.body.classList.toggle('background-changed');
  document.documentElement.classList.toggle('background-changed');
});
