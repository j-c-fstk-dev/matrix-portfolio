// Efeito de revelação Matrix ao redor do cursor
document.addEventListener('DOMContentLoaded', function() {
  // Cria o elemento que seguirá o cursor
  const cursorLight = document.createElement('div');
  cursorLight.classList.add('cursor-light');
  document.body.appendChild(cursorLight);
  
  // Cria o canvas para o efeito Matrix dentro do cursor-light
  const cursorCanvas = document.createElement('canvas');
  cursorCanvas.classList.add('cursor-matrix');
  cursorLight.appendChild(cursorCanvas);
  
  const ctx = cursorCanvas.getContext('2d');
  
  // Ajusta o tamanho do canvas
  function resizeCursorCanvas() {
    const size = 200; // Tamanho da área de revelação
    cursorCanvas.width = size;
    cursorCanvas.height = size;
    cursorLight.style.width = size + 'px';
    cursorLight.style.height = size + 'px';
    cursorLight.style.marginLeft = -(size / 2) + 'px';
    cursorLight.style.marginTop = -(size / 2) + 'px';
  }
  
  resizeCursorCanvas();
  
  // Caracteres para o efeito Matrix
  const matrixChars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  // Configurações do efeito
  const fontSize = 10;
  const columns = Math.floor(cursorCanvas.width / fontSize);
  const drops = [];
  
  // Inicializa as posições das gotas
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * cursorCanvas.height / fontSize);
  }
  
  // Função para desenhar o efeito Matrix
  function drawCursorMatrix() {
    // Fundo transparente para criar o efeito de desvanecimento
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, cursorCanvas.width, cursorCanvas.height);
    
    // Cor e fonte para os caracteres
    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px monospace';
    
    // Desenha os caracteres
    for (let i = 0; i < drops.length; i++) {
      // Seleciona um caractere aleatório
      const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
      
      // Desenha o caractere
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      // Reinicia a posição da gota quando ela chega ao final ou aleatoriamente
      if (drops[i] * fontSize > cursorCanvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      
      // Move a gota para baixo
      drops[i]++;
    }
  }
  
  // Anima o efeito Matrix
  setInterval(drawCursorMatrix, 50);
  
  // Atualiza a posição do cursor-light
  document.addEventListener('mousemove', function(e) {
    cursorLight.style.left = e.clientX + 'px';
    cursorLight.style.top = e.clientY + 'px';
    
    // Verifica se o cursor está sobre elementos interativos
    const elementsUnderCursor = document.elementsFromPoint(e.clientX, e.clientY);
    let isOverInteractive = false;
    
    for (let i = 0; i < elementsUnderCursor.length; i++) {
      const element = elementsUnderCursor[i];
      
      // Verifica se é um elemento interativo
      if (
        element.tagName === 'A' || 
        element.tagName === 'BUTTON' || 
        element.tagName === 'INPUT' || 
        element.tagName === 'TEXTAREA' || 
        element.tagName === 'SELECT' ||
        element.tagName === 'IMG' ||
        element.classList.contains('project-card') ||
        element.classList.contains('skill-item') ||
        element.classList.contains('service-card') ||
        element.classList.contains('testimonial-card') ||
        element.classList.contains('social-link') ||
        element.classList.contains('nav-link') ||
        element.classList.contains('logo') ||
        element.classList.contains('menu-toggle') ||
        element.classList.contains('cursor-light') ||
        element.classList.contains('cursor-matrix')
      ) {
        isOverInteractive = true;
        break;
      }
    }
    
    // Mostra ou esconde o efeito baseado no elemento sob o cursor
    if (isOverInteractive) {
      cursorLight.style.opacity = '0';
    } else {
      cursorLight.style.opacity = '1';
    }
  });
  
  // Esconde o cursor-light quando o mouse sai da janela
  document.addEventListener('mouseout', function() {
    cursorLight.style.opacity = '0';
  });
  
  // Mostra o cursor-light quando o mouse entra na janela
  document.addEventListener('mouseover', function() {
    cursorLight.style.opacity = '1';
  });
});
