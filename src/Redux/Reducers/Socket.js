import TYPE from "./../Types/Socket";

const initialState = {
  data: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case TYPE.SET_SOCKET_DATA:
      return { ...state, data: payload };

    case TYPE.RESET_SOCKET_DATA:
        return { ...state, data: null };

    default:
      return state;
  }
};