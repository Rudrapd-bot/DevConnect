const apiKey = "5230bee3e3e248f9ffa36b29330d3772";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status === 404) {
      alert("City not found");
      return;
    }
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    // Change weather icon based on weather type
    const weatherMain = data.weather[0].main;
    if (weatherMain === "Clouds") {
      weatherIcon.src = "./weather-app-img/images/clouds.png";
    } else if (weatherMain === "Clear") {
      weatherIcon.src = "./weather-app-img/images/clear.png";
    } else if (weatherMain === "Rain") {
      weatherIcon.src = "./weather-app-img/images/rain.png";
    } else if (weatherMain === "Drizzle") {
      weatherIcon.src = "./weather-app-img/images/drizzle.png";
    } else if (weatherMain === "Mist") {
      weatherIcon.src = "./weather-app-img/images/mist.png";
    } else {
      weatherIcon.src = "./weather-app-img/images/clear.png"; // default fallback
    }
  } catch (error) {
    alert("Error fetching data. Check your internet or API key.");
    console.error(error);
  }
}

searchBtn.addEventListener("click", () => {
  const city = searchBox.value.trim();
  if (city !== "") {
    checkWeather(city);
  }
});
