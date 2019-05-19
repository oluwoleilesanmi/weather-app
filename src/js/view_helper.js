const clearInput = () => {
  document.getElementById("search").value = "";
};

const getSearchBtn = () => {
  return document.getElementById("search-btn");
};

const getInput = () => {
  return document.getElementById("search");
};

const getErrDiv = () => {
  return document.getElementById("err-msg");
};

const getCelDiv = () => {
  return document.getElementById("cel-msg");
};

const getFehDiv = () => {
  return document.getElementById("feh-msg");
};

let clearErr = () => {
  getErrDiv().innerHTML = "";
};

let getContainer = () => {
  return document.getElementById("container");
};

export {
  clearInput,
  getSearchBtn,
  getErrDiv,
  getCelDiv,
  getFehDiv,
  getInput,
  clearErr,
  getContainer
};
