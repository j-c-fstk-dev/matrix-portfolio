# Guia de Personalização do Portfólio DevMatrix

Este guia detalhado explica como personalizar todos os elementos do seu portfólio, desde cores e fontes até efeitos visuais e conteúdo.

## Índice
1. [Estrutura de Arquivos](#estrutura-de-arquivos)
2. [Personalização de Cores](#personalização-de-cores)
3. [Fontes e Tipografia](#fontes-e-tipografia)
4. [Imagens e Mídia](#imagens-e-mídia)
5. [Efeitos Visuais](#efeitos-visuais)
6. [Conteúdo e Seções](#conteúdo-e-seções)
7. [Responsividade](#responsividade)
8. [Efeito Matrix do Cursor](#efeito-matrix-do-cursor)
9. [Otimização e Performance](#otimização-e-performance)

## Estrutura de Arquivos

O portfólio está organizado da seguinte forma:

```
portfolio/
├── css/
│   ├── colors.css       # Variáveis de cores e gradientes
│   ├── styles.css       # Estilos principais
│   ├── effects.css      # Efeitos visuais (glow, revelação, etc.)
│   └── responsive.css   # Estilos responsivos
├── js/
│   ├── matrix.js        # Efeito Matrix para preloader e footer
│   ├── effects.js       # Interatividade e efeitos JS
│   ├── main.js          # Script principal
│   └── cursor-matrix.js # Efeito Matrix no cursor
├── images/
│   ├── matrix-bg.jpg    # Imagem de fundo Matrix
│   ├── developer-avatar.png # Avatar do desenvolvedor
│   ├── client1.jpg      # Imagens de clientes/depoimentos
│   └── project1.jpg     # Imagens de projetos
└── index.html           # Arquivo HTML principal
```

## Personalização de Cores

### Esquema de Cores Principal

Todas as cores do site são definidas como variáveis CSS no arquivo `css/colors.css`. Para alterar o esquema de cores:

```css
:root {
  /* Cores principais */
  --dark-bg: #0a0e17;        /* Fundo escuro principal */
  --darker-bg: #060a12;      /* Fundo escuro secundário */
  --card-bg: #111a24;        /* Fundo dos cards */
  
  /* Cores de destaque */
  --primary: #00e5cc;        /* Verde água (cor principal) */
  --primary-dark: #00b3a1;   /* Verde água escuro */
  --primary-light: #4dfff0;  /* Verde água claro */
  
  --secondary: #0088ff;      /* Azul (cor secundária) */
  --secondary-dark: #0066cc; /* Azul escuro */
  --secondary-light: #66b3ff;/* Azul claro */
  
  /* Cores de texto */
  --text-primary: #ffffff;   /* Texto principal */
  --text-secondary: #b3e0ff; /* Texto secundário */
  --text-muted: #718096;     /* Texto menos destacado */
  
  /* Cores de efeito */
  --glow-primary: rgba(0, 229, 204, 0.6);   /* Brilho verde água */
  --glow-secondary: rgba(0, 136, 255, 0.6); /* Brilho azul */
  --matrix-green: #00ff41;   /* Verde Matrix */
  
  /* Gradientes */
  --gradient-primary: linear-gradient(135deg, var(--primary), var(--secondary));
  --gradient-glow: linear-gradient(135deg, var(--primary-dark), var(--secondary-dark));
}
```

Para mudar para um esquema de cores roxo e rosa, por exemplo:

```css
:root {
  /* Cores principais */
  --dark-bg: #0a0a14;
  --darker-bg: #06060f;
  --card-bg: #14101f;
  
  /* Cores de destaque */
  --primary: #9d4edd;        /* Roxo */
  --primary-dark: #7b2cbf;   /* Roxo escuro */
  --primary-light: #c77dff;  /* Roxo claro */
  
  --secondary: #ff49db;      /* Rosa */
  --secondary-dark: #d61cac; /* Rosa escuro */
  --secondary-light: #ff85e8;/* Rosa claro */
  
  /* Cores de efeito */
  --glow-primary: rgba(157, 78, 221, 0.6);
  --glow-secondary: rgba(255, 73, 219, 0.6);
  
  /* Atualize também o verde Matrix se desejar */
  --matrix-green: #c77dff;   /* Ou mantenha o verde original */
}
```

### Gradientes e Efeitos de Brilho

Os gradientes são definidos nas variáveis `--gradient-primary` e `--gradient-glow`. Você pode ajustá-los alterando as cores ou o ângulo:

```css
--gradient-primary: linear-gradient(45deg, var(--primary), var(--secondary));
```

Para um gradiente com mais cores:

```css
--gradient-primary: linear-gradient(45deg, var(--primary), var(--secondary), #ff6b6b);
```

## Fontes e Tipografia

### Fontes Principais

O site usa as fontes Poppins (texto geral) e Space Mono (efeito Matrix). Para alterar:

1. Modifique os links de importação no `<head>` do arquivo `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

2. Atualize as referências no CSS (`styles.css`):

```css
body {
  font-family: 'Poppins', sans-serif;
  /* ... */
}

.matrix-text {
  font-family: 'Space Mono', monospace;
}
```

### Tamanhos e Pesos de Fonte

Os tamanhos de fonte estão definidos em `rem` para melhor escalabilidade. Para ajustar:

```css
h1 {
  font-size: 3.5rem; /* Altere para aumentar/diminuir */
  font-weight: 700;  /* Altere para mais leve/pesado (300-900) */
}

p {
  font-size: 1rem;   /* Tamanho padrão de texto */
}
```

## Imagens e Mídia

### Avatar do Desenvolvedor

Para substituir o avatar:

1. Prepare uma imagem quadrada (preferencialmente 600x600px)
2. Substitua o arquivo `images/developer-avatar.png` ou atualize o caminho no HTML:

```html
<img src="images/seu-novo-avatar.png" alt="Desenvolvedor Full Stack">
```

### Imagens de Projetos

Para cada projeto no portfólio:

1. Prepare imagens com proporção 16:9 (recomendado)
2. Substitua os arquivos `images/project1.jpg`, `images/project2.jpg`, etc.
3. Ou atualize os caminhos no HTML:

```html
<img src="images/seu-projeto.jpg" alt="Nome do Projeto">
```

### Imagem Matrix de Fundo

Para alterar a imagem Matrix usada no efeito de revelação:

1. Substitua o arquivo `images/matrix-bg.jpg`
2. Ou atualize o caminho no CSS (`effects.css`):

```css
.hidden-image {
  background-image: url('../images/seu-matrix.jpg');
}
```

## Efeitos Visuais

### Botões com Glow

Os botões com efeito glow são controlados em `effects.css`. Para personalizar:

```css
/* Intensidade do brilho */
.glow-button.primary:hover {
  box-shadow: 
    0 0 5px rgba(0, 229, 204, 0.5),  /* Primeiro halo (mais intenso) */
    0 0 15px rgba(0, 229, 204, 0.3), /* Segundo halo (médio) */
    0 0 30px rgba(0, 229, 204, 0.2); /* Terceiro halo (suave) */
}

/* Velocidade da animação de pulsação */
@keyframes primaryPulse {
  /* ... */
}

.glow-button.primary:hover {
  animation: primaryPulse 2s infinite; /* Altere 2s para mais rápido/lento */
}
```

### Efeito de Luzes Rotativas

Para ajustar o efeito de luzes rotativas:

```css
.light-effect {
  /* Cores do gradiente */
  background: conic-gradient(
    transparent,
    rgba(0, 229, 204, 0),
    rgba(0, 229, 204, 0.1),
    rgba(0, 229, 204, 0.2),
    rgba(0, 136, 255, 0.2),
    rgba(0, 136, 255, 0.1),
    rgba(0, 136, 255, 0),
    transparent
  );
  
  /* Velocidade de rotação */
  animation: rotate 15s linear infinite; /* Altere 15s para mais rápido/lento */
}
```

### Efeito Matrix no Preloader

O efeito Matrix no preloader é controlado em `matrix.js`. Para personalizar:

```javascript
// Tamanho dos caracteres
const fontSize = 14; // Aumente/diminua para caracteres maiores/menores

// Velocidade de queda
const matrixInterval = setInterval(drawMatrix, 50); // Diminua para mais rápido

// Cor dos caracteres
ctx.fillStyle = '#00ff41'; // Altere para outra cor
```

## Conteúdo e Seções

### Informações Pessoais

Para atualizar suas informações pessoais, edite as seções correspondentes no `index.html`:

```html
<!-- Hero Section -->
<h1>Transformando <span class="gradient-text">ideias</span> em <span class="gradient-text">código</span></h1>
<p>Desenvolvedor Full Stack Freelancer especializado em criar experiências digitais inovadoras e impactantes</p>

<!-- About Section -->
<h3>Olá, sou <span class="gradient-text">Desenvolvedor Full Stack</span></h3>
<p>Com mais de 5 anos de experiência no desenvolvimento de aplicações web e mobile...</p>
```

### Projetos

Para adicionar ou modificar projetos:

```html
<div class="project-card" data-category="web">
  <div class="project-image">
    <img src="images/seu-projeto.jpg" alt="Nome do Projeto">
    <div class="project-overlay">
      <div class="project-links">
        <a href="https://seu-link.com" class="project-link"><i class="fas fa-link"></i></a>
        <a href="https://github.com/seu-usuario/projeto" class="project-link"><i class="fab fa-github"></i></a>
      </div>
    </div>
  </div>
  <div class="project-info">
    <h3>Nome do Projeto</h3>
    <p>Descrição do projeto...</p>
    <div class="project-tech">
      <span>Tecnologia 1</span>
      <span>Tecnologia 2</span>
      <span>Tecnologia 3</span>
    </div>
  </div>
</div>
```

### Habilidades

Para atualizar suas habilidades:

```html
<div class="skill-item">
  <div class="skill-icon"><i class="fab fa-html5"></i></div>
  <h4>HTML5</h4>
  <div class="skill-bar"><div class="skill-progress" style="width: 95%"></div></div>
</div>
```

Altere o ícone usando classes do Font Awesome e o nível de habilidade ajustando o valor de `width` no `skill-progress`.

## Responsividade

### Pontos de Quebra (Breakpoints)

Os breakpoints responsivos estão definidos em `responsive.css`:

```css
/* Desktop grande */
@media (max-width: 1200px) {
  /* ... */
}

/* Tablet e desktop pequeno */
@media (max-width: 992px) {
  /* ... */
}

/* Tablet e celular grande */
@media (max-width: 768px) {
  /* ... */
}

/* Celular */
@media (max-width: 576px) {
  /* ... */
}
```

Para ajustar como o site se comporta em diferentes tamanhos de tela, modifique as regras dentro desses breakpoints.

### Menu Mobile

O comportamento do menu mobile é controlado em `effects.js`. Para personalizar:

```javascript
// Navegação e menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}
```

## Efeito Matrix do Cursor

O novo efeito Matrix que segue o cursor é controlado em `cursor-matrix.js`. Para personalizar:

```javascript
// Tamanho da área de revelação
const size = 200; // Aumente/diminua para uma área maior/menor

// Opacidade do efeito
cursorLight.style.opacity = '1'; // Valor entre 0 e 1

// Tamanho dos caracteres Matrix
const fontSize = 10; // Aumente/diminua para caracteres maiores/menores

// Velocidade de atualização
setInterval(drawCursorMatrix, 50); // Diminua para mais rápido

// Cor dos caracteres
ctx.fillStyle = '#00ff41'; // Altere para outra cor
```

Para adicionar o efeito ao CSS, adicione estas regras ao arquivo `effects.css`:

```css
/* Efeito Matrix no cursor */
.cursor-light {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%);
  mix-blend-mode: screen;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cursor-matrix {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}
```

E adicione a referência ao script no `index.html`:

```html
<script src="js/cursor-matrix.js"></script>
```

## Otimização e Performance

### Imagens

Para otimizar o desempenho do site:

1. Comprima todas as imagens antes de usá-las (use ferramentas como TinyPNG)
2. Use formatos modernos como WebP quando possível
3. Especifique dimensões de imagem no HTML para evitar layout shifts

```html
<img src="images/project1.jpg" alt="Projeto 1" width="350" height="200">
```

### Efeitos JavaScript

Se o site estiver lento em dispositivos mais antigos, você pode desativar alguns efeitos:

1. Remova o efeito Matrix do preloader:
   - Comente ou remova a chamada para `drawMatrix()` em `matrix.js`

2. Simplifique o efeito de cursor:
   - Aumente o intervalo de atualização em `cursor-matrix.js`:
     ```javascript
     setInterval(drawCursorMatrix, 100); // Valor maior = menos atualizações
     ```

3. Desative animações para usuários que preferem movimento reduzido:
   - Já implementado em `responsive.css` com `prefers-reduced-motion`

---

Este guia cobre os principais aspectos de personalização do seu portfólio. Se precisar de ajustes mais específicos, consulte os arquivos de código diretamente, pois eles contêm comentários adicionais para orientação.
