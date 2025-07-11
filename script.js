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

    if (data.weather[0].main === 'Clouds') {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/414/414825.png";
    }
    else if (data.weather[0].main == 'Mist') {
       weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/1197/1197102.png";

    }
    else if (data.weather[0].main == 'Rain') {
        // document.getElementsByClassName('card').style.backgroundImage="url(images/rain weath.png)";
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/1163/1163624.png";

    }
    else if (data.weather[0].main == 'Haze') {
        //  document.getElementsByClassName('card').style.backgroundImage="url(images/rain weath.png)";
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/4005/4005901.png";
    }
    else if (data.weather[0].main == 'Drizzel') {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/1163/1163657.png";
    }
    else {
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
    }
    document.querySelector(".weather").style.display = "block";
}
searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value)
})
