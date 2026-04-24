function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return `${days[day]} ${hours}:${minutes}`;
}

function displayWeather(response) {
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;

  document.querySelector("#temperature").innerHTML = temperature;
  document.querySelector("#current-city").innerHTML = city;
}

function search(event) {
  event.preventDefault();

  let city = document.querySelector("#search-input").value;
  let apiKey = "0d3379b46oc5bbf60f2b70t899b1a212";

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let now = new Date();
document.querySelector("#current-date").innerHTML = formatDate(now);
