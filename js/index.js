// java script kóðinn
let init = () => {
  getData();
}

// Notkun: getData(lang, arrivals)
// Fyrir: ekkert
// eftir: Búið að hreinsa töflu á forsíðunni
//        og skrifa út ný gögn sem eru sótt í gegnum API
// lang="en" eða lang="is" og type="arrivals" eða type="departments"

let getData = (type="bensin") => {
  console.log("success");
  $('#petrol-table').html(' ');
  $.get(`http://apis.is/petrol`, (data) => {
    data.results.map((results) => {
      console.log("success 1");
      if(type == "bensin"){
      $('#petrol-table').append(`
        <tr><td>${results.company}</td>
        <td>${results.name}</td>
        <td>${results.bensin95}</td>`)
      }
      else{
        $('#petrol-table').append(`
          <tr><td>${results.company}</td>
          <td>${results.name}</td>
          <td>${results.diesel}</td></tr>`)
      }
      /*<td>${results.lat}</td>
        <td>${results.lon}</td>
        <td>${results.key}</td> */
    });
  });
}
/*{
"company":"Atlantsolía",
"name":"Baldursnes Akureyri"
"bensin95":191.3,
"diesel":184.3,
"bensin95_discount":188.3,
"diesel_discount":181.3,
"geo":{"lat":65.69913,"lon":-18.135231},
"key":"ao_000",
}
*/
let btn_is = document.getElementById("btn_is");
let btn_gas = document.getElementById("btn_gas");

localStorage.setItem("type", "bensin");

btn_gas.onclick = function () {
  if(localStorage.getItem("type") === "bensin"){
    getData("diesel");
    localStorage.setItem('type', 'diesel');
    $("#company").text("Fyrirtæki");
    $("#name").text("Staðsetning");
    $("#Bensin95").text("Dísel");
    /*$("#lat").text("Áætlaður tími");
    $("#lon").text("Staðfestur tími");
    $("#key").text("Staða");*/
    $("#btn_gas").text("Bensín");
  }
  else {
    getData();
    localStorage.setItem('type', 'bensin');
    $("#company").text("Fyrirtæki");
    $("#name").text("Staðsetning");
    $("#Bensin95").text("Bensín");
    /*$("#lat").text("Áætlaður tími");
    $("#lon").text("Staðfestur tími");
    $("#key").text("Staða");*/
    $("#btn_gas").text("Dísel");
  }
}

/*btn_dep.onclick = function () {
  getData(localStorage.getItem("lang"), "departures");
  if(localStorage.getItem("lang") === "is"){
    $("#name").text("Til");
  }
  else{
    $("#name").text("To");
  }

}*/

/*btn_arr.onclick = function () {
  getData(localStorage.getItem("lang"), "arrivals");
  if(localStorage.getItem("lang") === "is"){
    $("#to_From").text("Frá");
  }
  else{
    $("#to_From").text("From");
  }
}
*/
init();
