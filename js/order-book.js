// java script kóðinn
let init = () => {
  getData();
}

// Notkun: getData(lang, arrivals)
// Fyrir: ekkert
// eftir: Búið að hreinsa töflu á forsíðunni
//        og skrifa út ný gögn sem eru sótt í gegnum API

let getData = (type="order-book") => {
  console.log("success");
  $('#petrol-table').html(' ');
  $.get(`https://apis.is/aur/order-book`, (data) => {
    data.results.map((results) => {
      console.log("success 1");
      if(type == "order-book"){
      $('#petrol-table').append(`
        <tr><td>${ask.rate}</td>
        <td>${ask.order_amount_aur}</td>
        <td>${ask.order_value_isk}</td>
        <td>${ask.timestamp}</td>
        `)
      }
    });
  });
}
let btn_is = document.getElementById("btn_is");
let btn_gas = document.getElementById("btn_gas");

localStorage.setItem("type", "order-book");
btn_is.onclick = function () {
  if(localStorage.getItem("type") === "order-book"){
    getData("order-book");
    localStorage.setItem('type', 'order-book');
    $("#rate").text("rate");
    $("#order_amount_aur").text("Aur");
    $("#order_value_isk").text("Í ISK");
    $("#timestamp").text("timestamp");
  }
}
init();
