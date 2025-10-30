let letraSorteada = '';
let pontuacao = 0;

// Função para sortear uma nova letra
function novaRodada() {
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  letraSorteada = letras[Math.floor(Math.random() * letras.length)];
  document.getElementById('letraAtual').textContent = '?';
  document.getElementById('mensagem').textContent = '';
  document.getElementById('entrada').value = '';
  document.getElementById('entrada').focus();
}

// Função para verificar se a letra está correta
function verificarLetra() {
  const tentativa = document.getElementById('entrada').value.toUpperCase();
  const mensagem = document.getElementById('mensagem');
  
  if (tentativa === '') {
    mensagem.textContent = 'Digite uma letra!';
    return;
  }

  if (tentativa === letraSorteada) {
    mensagem.textContent = '✅ Acertou! Era a letra ' + letraSorteada + '!';
    pontuacao++;
    document.getElementById('letraAtual').textContent = letraSorteada;
  } else {
    mensagem.textContent = '❌ Errou! Tente novamente.';
  }

  document.getElementById('pontuacao').textContent = 'Pontuação: ' + pontuacao;
  document.getElementById('entrada').value = '';
  document.getElementById('entrada').focus();
}

// Eventos dos botões
document.getElementById('btnVerificar').addEventListener('click', verificarLetra);
document.getElementById('btnNovaLetra').addEventListener('click', novaRodada);

// Permite usar Enter para verificar
document.getElementById('entrada').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    verificarLetra();
  }
});

// Inicia o jogo
novaRodada();
