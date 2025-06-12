function atualizarContador() {
  const inicio = new Date('2024-07-26T00:00:00');
  const agora = new Date();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById('contador').innerText =
    `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

const carrossel = document.getElementById('carrossel');
const imagens = carrossel.querySelectorAll('img');
let indice = 0;

function moverCarrossel() {
  const larguraImagem = imagens[0].clientWidth;
  indice = (indice + 1) % imagens.length;
  carrossel.style.transform = `translateX(-${indice * larguraImagem}px)`;
}

setInterval(moverCarrossel, 3000);
