function findCoins() {
  return fetch('https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL');
}

const form = document.getElementById('coins-form');

form.addEventListener('submit', el => {
  el.preventDefault();
  doSubmit();
});

async function doSubmit() {
  const conversionDolar = document.getElementById('dolar');
  const conversionEuro = document.getElementById('euro');
  const coin = document.getElementById('coin-brl').value;

  const coinsResponse = await findCoins();
  const data = await coinsResponse.json();
  
  let dolar = data.USD.bid * coin;
  conversionDolar.innerHTML = dolar.toFixed(2);

  let euro = data.EUR.bid * coin;
  conversionEuro.innerHTML = euro.toFixed(2);
}