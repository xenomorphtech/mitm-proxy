import TYPE from './../Types/Socket';

const initialState = {
  data: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case TYPE.SET_SOCKET_DATA:
      return { ...state, data: payload };

    case TYPE.RESET_SOCKET_DATA:
        return { ...state, data: '' };

    default:
      return state;
  }
};