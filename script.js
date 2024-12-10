document.addEventListener("DOMContentLoaded", function () {
  const frase = document.getElementById("frase");
  const botao = document.getElementById("ver-mais-redes-sociais");

  botao.addEventListener("click", function () {
    frase.textContent = "Instagram: bh_vecchia/Facebook bh_vecchia";
    frase.style.color = "black";
  });

  // botão resetar
  const botaoResetar = document.getElementById("Voltar");

  botaoResetar.addEventListener("click", function () {
    frase.textContent = "Clique e veja mais redes sociais!";
    frase.style.color = "black";
  });
});