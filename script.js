async function getTempo(city){
    var url=getURLByCity(city);
    var response = await
    fetch ("https://api.openweathermap.org/data/2.5/weather?lat=45.46&lon=9.18&appid=e06672eb3d022cf9dbdffb18d384e515",
    {
        method:"GET"
    });
    var jsonData = await response.json();
    console.log(jsonData);
    var temperaturaCelsius = jsonData.main.temp-273.15;
    document.getElementById("tempo").innerText = temperaturaCelsius.toPrecision(2)+"°";
}

async function getURLByCity(city){
    var response = await
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=Milan&appid=e06672eb3d022cf9dbdffb18d384e515",
    {
        method:"GET"
    });
    var jsonData = await response.json();
    var lat = jsonData.lat;
    var lon = jsonData.lon;
    var str = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=e06672eb3d022cf9dbdffb18d384e515";
    return str;
}
getTempo("Milan");

