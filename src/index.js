function updateTime() {
  let chicagoElement = document.querySelector("#chicago");
  let chicagoDate = chicagoElement.querySelector(".date");
  let chicagoTime = chicagoElement.querySelector(".time");
  chicagoDate.innerHTML = moment.tz("America/Chicago").format("MMMM D, YYYY");
  chicagoTime.innerHTML = moment
    .tz("America/Chicago")
    .format("h:mm:ss [<small>]A[</small>]");

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDate = sydneyElement.querySelector(".date");
  let sydneyTime = sydneyElement.querySelector(".time");
  sydneyDate.innerHTML = moment.tz("Australia/Sydney").format("MMMM D, YYYY");
  sydneyTime.innerHTML = moment
    .tz("Australia/Sydney")
    .format("h:mm:ss [<small>]A[</small>]");

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDate = tokyoElement.querySelector(".date");
  let tokyoTime = tokyoElement.querySelector(".time");
  tokyoDate.innerHTML = moment.tz("Asia/Tokyo").format("MMMM D, YYYY");
  tokyoTime.innerHTML = moment
    .tz("Asia/Tokyo")
    .format("h:mm:ss [<small>]A[</small>]");
}

function updateCity(event) {
  setInterval(function () {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment.tz(cityTimeZone);
    let cities = document.querySelector("#cities");
    if (event.target.value.length > 0) {
      cities.innerHTML = `
  <div class="city">
  <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
  </div>
  <div class="time">${cityTime.format("h:mm:ss ")}<small>${cityTime.format(
        "A"
      )}</small></div>
</div>
<a class="all-cities" href="/"> ← All Cities</a>`;
    }
  }, 1000);
}

function darkMode() {
  let body = document.querySelector("body");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);

let button = document.querySelector(".changeTheme");
button.addEventListener("click", darkMode);
