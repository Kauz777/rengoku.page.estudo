// Seleciona todos os elementos que queremos animar ao rolar
const elements = document.querySelectorAll('.section h3, .section p, .gallery');

// Função para verificar posição e adicionar a classe de animação
function checkScroll() {
  const triggerBottom = window.innerHeight * 0.85; // ponto onde animação começa
  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('show-on-scroll'); // adiciona a classe que anima
    }
  });
}

// Event listeners para rolagem e carregamento da página
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);