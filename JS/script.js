// =================================================
// FORMULÁRIO
// =================================================

const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

if(formulario && mensagem){

  formulario.addEventListener("submit", function(e){

    e.preventDefault();

    mensagem.innerHTML = "Mensagem enviada com sucesso!";

    setTimeout(() => {

      mensagem.innerHTML = "";

      formulario.reset();

    }, 3000);

  });

}


// =================================================
// FAQ
// =================================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    item.classList.toggle("active");

  });

});


// =================================================
// REVEAL SCROLL
// =================================================

const hiddenElements =
document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

});

hiddenElements.forEach((el) => observer.observe(el));


// =================================================
// SETTINGS PANEL
// =================================================

const settingsBtn =
document.getElementById("settingsBtn");

const settingsPanel =
document.querySelector(".settings-panel");

if(settingsBtn && settingsPanel){

  settingsBtn.addEventListener("click", () => {

    settingsPanel.classList.toggle("active");

  });

}


// =================================================
// DARK MODE
// =================================================

const darkBtn =
document.getElementById("darkModeToggle");

if(darkBtn){

  darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

  });

}


// =================================================
// MENU MOBILE
// =================================================

const mobileBtn =
document.querySelector(".menu-mobile-btn");

const mobileMenu =
document.querySelector(".mobile-menu");

if(mobileBtn && mobileMenu){

  mobileBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

  });

}


// =================================================
// HEADER SCROLL
// =================================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    header.classList.add("scroll");

  }else{

    header.classList.remove("scroll");

  }

});
