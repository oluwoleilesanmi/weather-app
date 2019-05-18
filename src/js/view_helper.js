const clearInput = () => {
  document.getElementById("search").value = "";
};

const getSearchBtn = () => {
  return document.getElementById("search-btn");
};

const getErrDiv = () => {
  return document.getElementById("err-msg");
};

const getTempDiv = () => {
  return document.getElementById("temp-msg");
};

export { clearInput, getSearchBtn, getErrDiv, getTempDiv };
