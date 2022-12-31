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
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment.tz(cityTimeZone);
  let cities = document.querySelector("#cities");
  cities.innerHTML = `
  <div class="city">
  <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
  </div>
  <div class="time">${cityTime.format("h:mm:ss ")}<small>${cityTime.format(
    "A"
  )}</small></div>
</div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);
