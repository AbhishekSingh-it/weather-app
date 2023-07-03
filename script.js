const apikey = "7cbaf3b7455670fb600dc6235e9aca93";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";
const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
let weatherIcon = document.querySelector(".weather-icon");
async function checkweather(city) {
    const response = await fetch(apiurl + city + '&appid=7cbaf3b7455670fb600dc6235e9aca93&units=metric')
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == 'Clouds') {
      //  document.getElementsByClassName('card').style.backgroundImage="url('images/cloudweath.png')";
         weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == 'Mist') {
    weatherIcon.src = "images/mist.png"
    }
    else if (data.weather[0].main == 'Rain') {
       // document.getElementsByClassName('card').style.backgroundImage="url(images/rain weath.png)";
       weatherIcon.src = "images/rain.png"

    }
    else if (data.weather[0].main == 'Haze') {
      //  document.getElementsByClassName('card').style.backgroundImage="url(images/rain weath.png)";
         weatherIcon.src ="images/rain.png"
    }
    else if (data.weather[0].main == 'Drizzel'){
        weatherIcon.src = "images/drizzel.png"
    }
    else {
        weatherIcon.src = "images/clear.png"
    }
    document.querySelector(".weather").style.display = "block";
}
searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value)
})
