const TYPE = require("../Types/HexCode");

const setHexCode = (data) => (dispatch) => {
  dispatch({ type: TYPE.SET_HEX_CODE, payload: data });
};

module.exports = {
  setHexCode
};