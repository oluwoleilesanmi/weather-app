const toFahrenheit = celcius => {
  return (celcius * 9) / 5 + 32;
};

const tempInWords = value => {
  if (value > 30) {
    return "hot";
  } else if (value > 19 && value < 31) {
    return "warm";
  } else {
    return "cold";
  }
};

export { toFahrenheit, tempInWords };
