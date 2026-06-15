// ================================
// PLANOS JS
// ================================

function escolherPlano(plano, event) {

  // impede o link de subir pro topo (#)
  if (event) event.preventDefault();

  // salva o plano
  localStorage.setItem("planoEscolhido", plano);

  // feedback
  alert("Você escolheu o plano: " + plano);

  // redireciona (pode mudar depois)
  window.location.href = "../index.html";
}


// opcional: quando abrir a página
document.addEventListener("DOMContentLoaded", () => {

  const plano = localStorage.getItem("planoEscolhido");

  if (plano) {
    console.log("Plano salvo:", plano);
  }

});