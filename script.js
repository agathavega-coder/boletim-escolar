// Funcionalidade 1 & 2: Calcular Média e Verificar Situação
function calcularResultado() {
  const n1 = parseFloat(document.getElementById('n1').value);
  const n2 = parseFloat(document.getElementById('n2').value);
  const n3 = parseFloat(document.getElementById('n3').value);
  const resultadoBox = document.getElementById('resultado-calculo');

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    alert("Por favor, preencha todas as notas corretamente.");
    return;
  }

  const media = (n1 + n2 + n3) / 3;
  let situacao = "";
  let classeStatus = "";

  if (media >= 7.0) {
    situacao = "APROVADO";
    classeStatus = "status-aprovado";
  } else if (media >= 5.0) {
    situacao = "RECUPERAÇÃO";
    classeStatus = "status-recuperacao";
  } else {
    situacao = "REPROVADO";
    classeStatus = "status-reprovado";
  }

  resultadoBox.style.display = "block";
  resultadoBox.style.backgroundColor = "#e9ecef";
  resultadoBox.innerHTML = `
    <p><strong>Média:</strong> ${media.toFixed(1)}</p>
    <p><strong>Situação:</strong> <span class="${classeStatus}">${situacao}</span></p>
  `;

  // Funcionalidade 3: Calcular e Exibir Frequência fictícia/dinâmica
  exibirFrequencia(92);
}

function exibirFrequencia(porcentagem) {
  const cardFreq = document.getElementById('card-frequencia');
  if (cardFreq) {
    cardFreq.innerText = `${porcentagem}%`;
  }
}

// Auxiliares de Navegação e Form
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function limparFormulario() {
  document.getElementById('calc-form').reset();
  const resultadoBox = document.getElementById('resultado-calculo');
  resultadoBox.style.display = "none";
  resultadoBox.innerHTML = "";
}
