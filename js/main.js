document.addEventListener('DOMContentLoaded', function() {
  // Código principal já está em effects.js e matrix.js
  
  // Adiciona classes de animação aos elementos
  const animatedElements = document.querySelectorAll('.hero-content h1, .hero-content p, .hero-buttons, .hero-image');
  
  animatedElements.forEach((element, index) => {
    element.classList.add('fade-in');
    element.classList.add(`delay-${index + 1}`);
  });
  
  // Inicializa as barras de progresso das habilidades
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });
  
  // Detecta quando o usuário chegou ao final da página
  window.addEventListener('scroll', function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
      // Adiciona efeito de destaque ao footer
      const footer = document.querySelector('.footer');
      if (footer && !footer.classList.contains('highlighted')) {
        footer.classList.add('highlighted');
      }
    }
  });
});
