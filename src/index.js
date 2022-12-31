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

updateTime();
setInterval(updateTime, 1000);
