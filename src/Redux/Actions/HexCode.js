import TYPE from "../Types/HexCode";

export const setHexCode = (data) => (dispatch) => {
  dispatch({ type: TYPE.SET_HEX_CODE, payload: data });
};