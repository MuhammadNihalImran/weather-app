window.getWeather = function () {
  
    // let formatedTime = moment().format("ddd ha");

    let cityName = document.querySelector('#cityName').value;
    console.log("city",cityName);
    let API_KEY = "f889da55794f19f359935c03f9154a2d";
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
    
    .then(function (response) {
      // handle succes
  console.log(response.data);
    document.querySelector("#main").innerHTML = 
  `<div id="page1">

    <span id="upResult"></span>
    <h1 id ="result"></h1>
    <img src=""id="icon"/>
    <span id ="downResult"></span>

    
 </div> ,<div id="page3">
   
  <span id="index" class="style"></span>
  <span id="sunset" class="style"></span>
  <span id="wind" class="style"></span>
  <span id="precip" class="style"></span>
  <span id="feels" class="style"></span>
  <span id="humidity" class="style"></span>
  <span id="visibility" class="style"></span>
  <span id="pressure" class="style"></span>

</div>`

    let temp = Math.round(response.data.main.temp);
    let lat = Math.round(response.data.coord.lat);
    let lon = Math.round(response.data.coord.lon);
    let feels_like = Math.round(response.data.main.feels_like);
    let visibility = Math.round((response.data.visibility)/ 1609);
    let pressure = Math.round((response.data.main.pressure)* 29.921);
    
     let sunrise = moment((response.data.sys.sunrise)/3600).format('hh:mm');   
    let sunset = moment((response.data.sys.sunset)/3600).format('hh:mm');   
    let deg = (response.data.wind.deg);
    let speed = Math.round((response.data.wind.speed) * 3.6);

     if (deg >= 0 && deg <= 45) {
          document.querySelector("#wind").innerHTML = `hey : ${deg}EAST`
        } else if (deg > 45 && deg <= 135) {
          document.querySelector("#wind").innerHTML = `hey : ${deg}NORTH`
        } else if (deg > 135 && deg <= 225) {
          document.querySelector("#wind").innerHTML = `hey : ${deg}WEST`
        } else if (deg > 225 && deg <= 315) {
          document.querySelector("#wind").innerHTML = `hey : ${deg}SOUTH`
        } else if(deg > 315 ) { 
          document.querySelector("#wind").innerHTML = `hey : ${deg}EAST`
        }
        
    document.querySelector("#result").innerHTML = `${temp}°C <br/><span class="desc">${response.data.weather[0].description}<br/>  H:${lat}° L:${lon}°</span> `;
    
    document.querySelector("#upResult").innerHTML = `${response.data.name} Now`;
    document.querySelector("#downResult").innerHTML = `${response.data.main.temp_min}°C - ${response.data.main.temp_max}°C`;

    document.querySelector("#icon").src = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@4x.png`

    document.querySelector("#index").innerHTML = `uv index : ${response.data.sys.type}`
    document.querySelector("#sunset").innerHTML = ` sunset:${sunset}PM <br/> sunrise:${sunrise}AM`
    // document.querySelector("#wind").innerHTML = ` sunset:${deg}`
    
    document.querySelector("#precip").innerHTML = `Speed :${speed}km/hr`
    document.querySelector("#feels").innerHTML = `Feels like :${feels_like}°`
    document.querySelector("#humidity").innerHTML = `Humidity :${response.data.main.humidity}%`
    document.querySelector("#visibility").innerHTML = `Visibility :${visibility}`
    document.querySelector("#pressure").innerHTML = `Pressure :${pressure} in Hg`
  })
  .catch(function (error) {
    // handle error
    console.log(error.data);
    document.querySelector("#result").innerHTML =`weather is noy get` 
  })
 
};



