import { apiKey, msg } from "./js/constants_helper";
import { toFahrenheit } from "./js/conversion_helper";
import {
  clearInput,
  getSearchBtn,
  getErrDiv,
  getCelDiv,
  getFehDiv,
  getInput,
  clearErr
} from "./js/view_helper";

let getTemperature = city => {
  fetch(urlBuilder(apiKey, city))
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {})
    .catch(function(err) {});
};

let urlBuilder = (k, c) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=${k}&units=metric`;
};
