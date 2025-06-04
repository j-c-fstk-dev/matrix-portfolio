// Efeitos visuais e interatividade
document.addEventListener('DOMContentLoaded', function() {
  // Navegação e menu mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
  
  // Navegação ativa com base na seção visível
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    // Header fixo com sombra ao rolar
    const header = document.querySelector('.header');
    if (scrollPosition > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Botão voltar ao topo
    const backToTop = document.querySelector('.back-to-top');
    if (scrollPosition > 300) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
    
    // Atualiza link ativo no menu
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
    
    // Efeito de revelação ao scroll
    document.querySelectorAll('.scroll-reveal').forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.classList.add('revealed');
      }
    });
  });
  
  // Adiciona classe scroll-reveal a elementos para animação
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const sectionChildren = section.children;
    for (let i = 0; i < sectionChildren.length; i++) {
      if (sectionChildren[i].classList.contains('container')) {
        const container = sectionChildren[i];
        const containerChildren = container.children;
        
        for (let j = 0; j < containerChildren.length; j++) {
          if (!containerChildren[j].classList.contains('section-header')) {
            containerChildren[j].classList.add('scroll-reveal');
          }
        }
      }
    }
  });
  
  // Filtro de projetos
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove classe active de todos os botões
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Adiciona classe active ao botão clicado
      this.classList.add('active');
      
      // Filtra os projetos
      const filter = this.getAttribute('data-filter');
      
      projectCards.forEach(card => {
        if (filter === 'all') {
          card.style.display = 'block';
        } else {
          if (card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });
  
  // Slider de depoimentos
  const testimonialSlider = document.querySelector('.testimonials-slider');
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');
  
  if (testimonialSlider && testimonialCards.length > 0) {
    let currentSlide = 0;
    
    // Esconde todos os slides exceto o primeiro
    for (let i = 1; i < testimonialCards.length; i++) {
      testimonialCards[i].style.display = 'none';
    }
    
    // Função para mostrar um slide específico
    function showSlide(n) {
      // Esconde todos os slides
      testimonialCards.forEach(card => {
        card.style.display = 'none';
      });
      
      // Remove a classe active de todos os dots
      dots.forEach(dot => {
        dot.classList.remove('active');
      });
      
      // Mostra o slide atual
      testimonialCards[n].style.display = 'block';
      
      // Adiciona a classe active ao dot atual
      dots[n].classList.add('active');
      
      currentSlide = n;
    }
    
    // Adiciona evento de clique aos dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
        showSlide(index);
      });
    });
    
    // Função para avançar para o próximo slide
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= testimonialCards.length) {
        currentSlide = 0;
      }
      showSlide(currentSlide);
    }
    
    // Avança para o próximo slide a cada 5 segundos
    setInterval(nextSlide, 5000);
  }
  
  // Formulário de contato
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulação de envio de formulário
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      submitButton.textContent = 'Enviando...';
      submitButton.disabled = true;
      
      setTimeout(function() {
        // Simula sucesso no envio
        submitButton.textContent = 'Mensagem Enviada!';
        submitButton.style.backgroundColor = 'var(--primary)';
        submitButton.style.color = 'var(--dark-bg)';
        
        // Limpa o formulário
        contactForm.reset();
        
        // Restaura o botão após 3 segundos
        setTimeout(function() {
          submitButton.textContent = originalText;
          submitButton.disabled = false;
          submitButton.style.backgroundColor = '';
          submitButton.style.color = '';
        }, 3000);
      }, 1500);
    });
  }
  
  // Efeito de partículas flutuantes
  const particlesContainers = document.querySelectorAll('.particles-container');
  
  particlesContainers.forEach(container => {
    const particlesCount = 20;
    
    for (let i = 0; i < particlesCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Propriedades aleatórias para cada partícula
      const size = Math.random() * 5 + 2;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = posX + '%';
      particle.style.top = posY + '%';
      particle.style.opacity = Math.random() * 0.5 + 0.1;
      particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
      
      container.appendChild(particle);
    }
  });
  
  // Efeito de hover para botões glow
  const glowButtons = document.querySelectorAll('.glow-button');
  
  document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    glowButtons.forEach(button => {
      const rect = button.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;
      
      const distanceX = mouseX - buttonCenterX;
      const distanceY = mouseY - buttonCenterY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      if (distance < 150) {
        const intensity = 1 - distance / 150;
        
        if (button.classList.contains('primary')) {
          button.style.boxShadow = `
            0 0 ${5 + intensity * 10}px rgba(0, 229, 204, ${0.3 + intensity * 0.2}),
            0 0 ${15 + intensity * 20}px rgba(0, 229, 204, ${0.2 + intensity * 0.1})
          `;
        } else if (button.classList.contains('secondary')) {
          button.style.boxShadow = `
            0 0 ${5 + intensity * 10}px rgba(0, 136, 255, ${0.3 + intensity * 0.2}),
            0 0 ${15 + intensity * 20}px rgba(0, 136, 255, ${0.2 + intensity * 0.1})
          `;
        }
      } else {
        button.style.boxShadow = '';
      }
    });
  });
  
  // Botão voltar ao topo
  const backToTopButton = document.querySelector('.back-to-top');
  if (backToTopButton) {
    backToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Links de navegação suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Fecha o menu mobile se estiver aberto
      if (menuToggle && menuToggle.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});
