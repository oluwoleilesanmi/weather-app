import { apiKey, msg } from "./js/constants_helper";
import { toFahrenheit } from "./js/conversion_helper";
import { clearInput, getSearchBtn, getErrDiv, getCelDiv, getFehDiv, getInput, clearErr, getContainer} from "./js/view_helper";

let displayTemp = json => {
  const celcius = json.main.temp;
  getFehDiv().innerHTML = toFahrenheit(celcius);
  getCelDiv().innerHTML = celcius;
  getContainer().style.display = "block";
};

let clearTemp = () => {
  getContainer().style.display = "none";
};

let displayErr = msg => {
  getErrDiv().innerHTML = msg;
  clearInput();
  setTimeout(clearErr, 2000);
};

const isValid = city => {
  return city === "" ? false : true;
};

getSearchBtn().addEventListener("click", e => {
  e.preventDefault();
  clearTemp();
  const city = getInput().value;
  if (isValid(city)) getTemperature(city);
});

let getTemperature = city => {
  fetch(urlBuilder(apiKey, city))
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      displayTemp(json);
    })
    .catch(function(err) {
      displayErr(msg);
    });
};

let urlBuilder = (k, c) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=${k}&units=metric`;
};
