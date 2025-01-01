// Cotação de moedas do dia

const USD = 4.87;
const EUR = 6.0;
const GBP = 6.08;

// Obtendo os elementos do formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Capturando o evento de submit (Enviar) no formulário.
form.onsubmit = (event) => {
  event.preventDefault(); // Corrigido o erro de digitação

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    //Exibindo de forma dinamica
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    //Aplica a classe que exibe o footer para mostrar o resultado
    footer.classList.add("show-result");
  } catch (error) {
    // Remove a classe do footer removendo ele da tela
    console.log(error);
    footer.classList.remove("show-result");
    alert("Não foi possivel!");
  }
}

// Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value) {
  // Converte para número para utilizar o toLocaleString para formatar no padrão BRL (R$ 00,00)
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
