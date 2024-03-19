
// descrição
document.querySelectorAll(".card-imagem").forEach(function(element) {
  element.addEventListener("click", function() {
    this.classList.toggle("Menu")
  });
});

var swiper = new Swiper(".slide-cont", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


// modo noturno/dia
const modoNoturnoBtn = document.getElementById("modo-noturno-btn");
const diaImg = document.getElementById("dia");
const noturnoImg = document.getElementById("noturno");
  
modoNoturnoBtn.addEventListener("click", function() {
    document.body.classList.toggle("modo-noturno");
    const isModoNoturno = document.body.classList.contains("modo-noturno");
    if (isModoNoturno) {
        diaImg.style.display = "none";
        noturnoImg.style.display = "block";
    } else {
        diaImg.style.display = "block";
        noturnoImg.style.display = "none";
    }
});

window.onload = function() {
  window.scrollTo(0, 0);
};

document.addEventListener('DOMContentLoaded', function() {
  i18next.init({
    lng: 'pt',
    resources: {
      pt: {
        translation: {
          'inicio': 'Início',
          'Sobre mim': 'Sobre mim',
          'Linguagens': 'Linguagens',
          'Projetos': 'Projetos',
          'Contato': 'Contato',
          'titulo-1': 'Mostrando um pouco de tudo',
          'titulo-1-baixo': 'e tudo de um pouco',
          'titulo-1-desc': 'Um site para mostar os meus projetos',
          'prazer': 'Muito prazer',
          'apresentação': 'Olá! Eu sou o Marcus, um jovem de 17 anos apaixonado pelo mundo da tecnologia. Desde cedo, desenvolvi uma grande curiosidade e fascínio por entender como as coisas funcionam, especialmente quando se trata de sistemas digitais. Meu objetivo é estudar e me tornar um especialista em desenvolvimento de sistemas. Estou determinado a fazer a diferença nesse campo, buscando constantemente aprimorar minhas habilidades e conhecimentos. Estou ansioso para deixar minha marca em um mundo cada vez mais digitalizado.',
          'Hollow': '"Hollow Knight" é um jogo de plataforma e ação desenvolvido e publicado pela Team Cherry, um estúdio independente sediado em Adelaide, Austrália. Lançado inicialmente em 2017, o jogo se destaca por sua jogabilidade desafiadora, visual impressionante e atmosfera envolvente.',
          'desc': 'clique na imagem para saber mais',
          'java': 'Java (aprendendo)',
        }
      },
      en: {
        translation: {
          'inicio': 'Home',
          'Sobre mim': 'About me',
          'Linguagens': 'Languages',
          'Projetos': 'Projects',
          'Contato': 'Contact',
          'titulo-1': 'Showcasing a bit of everything',
          'titulo-1-baixo': 'And everything of a bit',
          'titulo-1-desc': 'A website to showcase my projects',
          'prazer': 'Nice to meet you',
          'apresentação': 'Hello! I am Marcus, a 17-year-old passionate about the world of technology. Since I was young, I have developed a great curiosity and fascination for understanding how things work, especially when it comes to digital systems. My goal is to study and become an expert in system development. I am determined to make a difference in this field, constantly improving my skills and knowledge. I am eager to leave my mark in an increasingly digitalized world.',
          'Hollow': '"Hollow Knight" is a platform and action game developed and published by Team Cherry, an independent studio based in Adelaide, Australia. Initially released in 2017, the game stands out for its challenging gameplay, impressive visuals, and immersive atmosphere.',        
          'desc' : 'Click on the image to learn more',
          'java': 'JAVA (learning)',
        }
      }
    }
  }, function(err, t) {
  
    translateContent();
  });

  
  function translateContent() {
    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function(element) {
      var key = element.getAttribute('data-i18n');
      element.textContent = i18next.t(key);
    });
  }

 
  document.getElementById('changeLanguage').addEventListener('click', function() {
    var newLanguage = i18next.language === 'en' ? 'pt' : 'en';
    i18next.changeLanguage(newLanguage, function(err, t) {
      translateContent(); 
    });
  });
});