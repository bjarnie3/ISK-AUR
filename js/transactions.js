// java script kóðinn
let init = () => {
  getData();
}

// Notkun: getData(lang, arrivals)
// Fyrir: ekkert
// eftir: Búið að hreinsa töflu á forsíðunni
//        og skrifa út ný gögn sem eru sótt í gegnum API

let getData = (type="transactions") => {
  console.log("success");
  $('#transactions-table').html(' ');
  $.get(`https://apis.is/aur/transactions`, (data) => {
    data.results.map((results) => {
      console.log("success 1");
      if(type == "transactions"){
      $('#transactions-table').append(`
        <tr><td>${results.id}</td>
        <td>${results.amount_isk}</td>
        <td>${results.amount_aur}</td>
        <td>${results.rate}</td>
        <td>${results.type}</td>
        <td>${results.timestamp}</td>
        `)
      }
    });
  });
}
let btn_is = document.getElementById("btn_is");
let btn_gas = document.getElementById("btn_gas");

localStorage.setItem("type", "transactions");
localStorage.setItem("type", "order-book");
btn_gas.onclick = function () {
  if(localStorage.getItem("type") === "transactions"){
    getData("transactions");
    localStorage.setItem('type', 'transactions');
    $("#id").text("ID");
    $("#amount_isk").text("Islensk");
    $("#amount_aur").text("Aur");
    $("#rate").text("rate");
    $("#type").text("type");
    $("#timestamp").text("timestamp");
  }
}

let getData1 = (type="order-book") => {
  console.log("success");
  $('#orderbooks-table').html(' ');
  $.get(`https://apis.is/aur/order-book`, (data) => {
    data.ask.map((ask) => {
      console.log("success 1");
      if(type == "order-book"){
      $('#orderbooks-table').append(`
        <tr><td>${ask.rate}</td>
        <td>${ask.order_amount_aur}</td>
        <td>${ask.order_value_isk}</td>
        <td>${ask.timestamp}</td>
        `)
      }
    });
  });
}

btn_gas.onclick = function () {
  if(localStorage.getItem("type") === "order-book"){
    getData1("order-book");
    localStorage.setItem('type', 'order-book');
    $("#rate").text("rate");
    $("#order_amount_aur").text("Aur");
    $("#order_value_isk").text("Í ISK");
    $("#timestamp").text("timestamp");
  }
}
init();
