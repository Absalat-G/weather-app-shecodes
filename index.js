function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let cityElement = document.querySelector("#current-city");
    let weather = document.querySelector(".current-temperature-value");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity")
    let windElement = document.querySelector("#wind-speed")
    let apiKey = "4b4ffe9fe8335a89335e2t0cebfo9928";
    let city = searchInputElement.value;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  
    axios.get(apiUrl).then(temp);
    function temp(response) {
      weather.innerHTML = Math.round(response.data.temperature.current);
      cityElement.innerHTML = searchInputElement.value;
      descriptionElement.innerHTML = response.data.condition.description;
      humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
      windElement.innerHTML = `${response.data.wind.speed}km/h`;
    }
  }
  
  function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  let currentDateELement = document.querySelector("#current-date");
  let currentDate = new Date();
  
  currentDateELement.innerHTML = formatDate(currentDate);
  