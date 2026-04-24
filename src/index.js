let apiKey = "0d3379b46oc5bbf60f2b70t899b1a212";

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function formatForecastDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHTML += `
        <div class="forecast-day">
          <div>${formatForecastDay(day.time)}</div>
          <img
            src="${day.condition.icon_url}"
            alt="${day.condition.description}"
            class="forecast-icon"
          />
          <div class="forecast-temperatures">
            <span>${Math.round(day.temperature.maximum)}°</span>
            <span class="forecast-min">${Math.round(
              day.temperature.minimum
            )}°</span>
          </div>
        </div>
      `;
    }
  });

  forecastElement.innerHTML = forecastHTML;
}

function getForecast(city) {
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayWeather(response) {
  let city = response.data.city;
  let temperature = Math.round(response.data.temperature.current);
  let humidity = Math.round(response.data.temperature.humidity);
  let windSpeed = Math.round(response.data.wind.speed);
  let description = response.data.condition.description;
  let iconUrl = response.data.condition.icon_url;

  document.querySelector("#current-city").innerHTML = city;
  document.querySelector("#temperature").innerHTML = temperature;
  document.querySelector("#humidity").innerHTML = `${humidity}%`;
  document.querySelector("#wind-speed").innerHTML = `${windSpeed}km/h`;
  document.querySelector("#weather-description").innerHTML = description;

  let iconElement = document.querySelector("#weather-icon");
  iconElement.setAttribute("src", iconUrl);
  iconElement.setAttribute("alt", description);

  getForecast(city);
}

function searchCity(city) {
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function handleSearch(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  searchCity(city);
}

document.querySelector("#current-date").innerHTML = formatDate(new Date());

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearch);

searchCity("Paris");
