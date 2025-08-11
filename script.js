const rates = {
  USD: 1,
  EUR: 0.91,
  UAH: 40,
  GBP: 0.78,
};

const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");

function populateSelect(selectElement) {
  for (let currency in rates) {
    const option = document.createElement("option");
    option.value = currency;
    option.textContent = currency;
    selectElement.appendChild(option);
  }
}

populateSelect(fromSelect);
populateSelect(toSelect);

document.getElementById("convert").addEventListener("click", function () {
  const amount = parseFloat(document.getElementById("amount").value);

  const fromCurrency = fromSelect.value;
  const toCurrency = toSelect.value;

  if (isNaN(amount)) {
    alert("введи суму коректно");
    return;
  }

  const amountInUSD = amount / rates[fromCurrency];
  const result = amountInUSD * rates[toCurrency];

  document.getElementById("result").textContent = result.toFixed(2);
});
