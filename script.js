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

function displayWeather(response) {
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;

  document.querySelector("#current-city").innerHTML = city;
  document.querySelector("#temperature").innerHTML = temperature;
}

function search(event) {
  event.preventDefault();

  let apiKey = "0d3379b46oc5bbf60f2b70t899b1a212";
  let city = document.querySelector("#search-input").value;

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

document.querySelector("#current-date").innerHTML = formatDate(new Date());

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
