// =================================================
// FORMULÁRIO
// =================================================

const form = document.querySelector(".contact-form");

if(form){

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    const btn = form.querySelector(".btn");

    if(btn){

      btn.innerHTML = "Enviando...";

      btn.style.opacity = "0.8";

      setTimeout(() => {

        btn.innerHTML = "Mensagem enviada ✓";

        btn.style.background =
        "linear-gradient(135deg,#22c55e,#16a34a)";

      }, 1500);

    }

  });

}

// =================================================
// REVEAL SCROLL
// =================================================

const elements =
document.querySelectorAll(
".contact-form-box, .info-card, .support-card"
);

if(elements.length > 0){

  const observer =
  new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if(entry.isIntersecting){

        entry.target.classList.add("show");

      }

    });

  }, {
    threshold:0.2
  });

  elements.forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

  });

}