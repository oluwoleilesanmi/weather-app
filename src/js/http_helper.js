const http_helper = () => {
  let getTemperature = (key, city, errMsg) => {
    fetch(urlBuilder(key, city), { mode: "cors" })
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log(json.main.temp);
      })
      .catch(function(err) {
        console.log(errMsg);
      });
  };

  let urlBuilder = (k, c) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=${k}&units=metric`;
  };
  return { getTemperature };
};

module.exports = http_helper;
