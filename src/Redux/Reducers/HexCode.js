import TYPE from "./../Types/HexCode";

const initialState = {
  selectedHexCode: "00"
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case TYPE.SET_HEX_CODE:
      return { ...state, selectedHexCode: payload };

    case TYPE.RESET_HEX_CODE:
      return { ...state, selectedHexCode: null };

    default:
      return state;
  }
};