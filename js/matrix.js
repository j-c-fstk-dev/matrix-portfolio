// Efeito Matrix para o preloader e background
document.addEventListener('DOMContentLoaded', function() {
  // Configuração do efeito Matrix
  const canvas = document.createElement('canvas');
  const preloader = document.querySelector('.preloader .matrix-code');
  preloader.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  
  // Ajusta o tamanho do canvas para preencher o container
  function resizeCanvas() {
    canvas.width = preloader.offsetWidth;
    canvas.height = preloader.offsetHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Caracteres para o efeito Matrix
  const matrixChars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  // Configurações do efeito
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = [];
  
  // Inicializa as posições das gotas
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
  }
  
  // Função para desenhar o efeito Matrix
  function drawMatrix() {
    // Fundo semi-transparente para criar o efeito de desvanecimento
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
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
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      
      // Move a gota para baixo
      drops[i]++;
    }
  }
  
  // Anima o efeito Matrix
  const matrixInterval = setInterval(drawMatrix, 50);
  
  // Remove o preloader após 2 segundos
  setTimeout(function() {
    document.querySelector('.preloader').style.opacity = '0';
    setTimeout(function() {
      document.querySelector('.preloader').style.display = 'none';
      clearInterval(matrixInterval);
    }, 500);
  }, 2000);
  
  // Efeito Matrix para o footer
  const footerMatrix = document.querySelector('.matrix-background');
  if (footerMatrix) {
    const footerCanvas = document.createElement('canvas');
    footerMatrix.appendChild(footerCanvas);
    
    const footerCtx = footerCanvas.getContext('2d');
    
    function resizeFooterCanvas() {
      footerCanvas.width = footerMatrix.offsetWidth;
      footerCanvas.height = footerMatrix.offsetHeight;
    }
    
    resizeFooterCanvas();
    window.addEventListener('resize', resizeFooterCanvas);
    
    const footerColumns = Math.floor(footerCanvas.width / fontSize);
    const footerDrops = [];
    
    for (let i = 0; i < footerColumns; i++) {
      footerDrops[i] = Math.floor(Math.random() * footerCanvas.height / fontSize);
    }
    
    function drawFooterMatrix() {
      footerCtx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      footerCtx.fillRect(0, 0, footerCanvas.width, footerCanvas.height);
      
      footerCtx.fillStyle = '#00ff41';
      footerCtx.font = fontSize + 'px monospace';
      
      for (let i = 0; i < footerDrops.length; i++) {
        const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
        footerCtx.fillText(text, i * fontSize, footerDrops[i] * fontSize);
        
        if (footerDrops[i] * fontSize > footerCanvas.height && Math.random() > 0.975) {
          footerDrops[i] = 0;
        }
        
        footerDrops[i]++;
      }
    }
    
    setInterval(drawFooterMatrix, 50);
  }
});
