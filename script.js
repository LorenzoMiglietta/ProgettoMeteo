async function getTempo(city){
    var str="http://api.openweathermap.org/geo/1.0/direct?q="+city+"&appid=e06672eb3d022cf9dbdffb18d384e515";
    var response = await
    fetch(str,
    {
        method:"GET"
    });
    var jsonData = await response.json();
    var lat = jsonData[0].lat.toPrecision(5);
    var lon = jsonData[0].lon.toPrecision(5);
    var url = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=e06672eb3d022cf9dbdffb18d384e515";
    var response = await
    fetch (url,
    {
        method:"GET"
    });
    var jsonData = await response.json();
    var temperaturaCelsius = jsonData.main.temp-273.15;
    //document.getElementById("tempo").innerText = temperaturaCelsius.toPrecision(2)+"°";
    console.log(temperaturaCelsius);
}

function getCity(){
    var city = document.getElementById("inputCity").value;
    getTempo(city);
}

var input = document.getElementById("inputCity");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn1").click();
  }
});


let myChart = document.getElementById("myChart").getContext('2d');
  let massPopChart = new Chart(myChart,{
    type:'line', //tipo di chart
    data:{
      labels:['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge','New Bedford'],
      datasets:[{
        label: 'Temperature',
        data:[
          617549,
          1252364,
          24234,
          23525,
          63546,
          66664
        ],
        backgroundColor: 'blue'
      }]
    },
    options:{}

  });