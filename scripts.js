const input = document.querySelector("input");
const button = document.querySelector(".convertButton");
const paragraphReais = document.querySelector(".paragraph-reais");
const paragraphDolar = document.querySelector(".paragraph-dolar");
const selectCurrency = document.querySelector(".selectCurrency")
const spanName = document.querySelector(".span-name")
const imgMoney = document.querySelector(".imgMoney")

function convertMoney() {

//conversão do Dolar
  const dolarValueToday = 5.2;
// Conversão do Euro
   const euroValueToday = 6.2;
// Conversão do Libra
   const libraValueToday = 6.3 ;
// Conversão do Bitcoin
   const bitcoinValueToday = 135;
  
  const inputValue = input.value

  if(selectCurrency.value == "dolar") {
    paragraphDolar.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(inputValue/ dolarValueToday);
  }
  if(selectCurrency.value == "euro") {
    paragraphDolar.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputValue/ euroValueToday )
  }
  if(selectCurrency.value == "libra") {
    paragraphDolar.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
      }).format(inputValue / libraValueToday);
  }
  if(selectCurrency.value == "bitcoin") {
    paragraphDolar.innerHTML = (inputValue / bitcoinValueToday).toFixed(8) + " BTC";
  }

    paragraphReais.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputValue);
  
  input.value = ""
}

function changeMoney() {

    if(selectCurrency.value == "dolar") {
        spanName.innerHTML = "Dólar americano"
        imgMoney.src = "./assets/dolar.png"
    } 

    if(selectCurrency.value == "euro") {
        spanName.innerHTML = "Euro"
        imgMoney.src ="./assets/euro.png"
    }
    if(selectCurrency.value == "libra") {
        spanName.innerHTML = "Libra"
        imgMoney.src = "./assets/libra.png"
    }
    if(selectCurrency.value == "bitcoin"){
        spanName.innerHTML = "Bitcoin"
        imgMoney.src = "./assets/bitcoin.png"
    }

    convertMoney()
}


selectCurrency.addEventListener("change", changeMoney )
button.addEventListener("click", convertMoney);