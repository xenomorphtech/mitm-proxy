import TYPE from "./../Types/Proxy";

const initialState = {
  packets: [],
  connections: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case TYPE.GET_PACKETS:
      return { ...state, packets: payload };

    case TYPE.GET_CONNECTIONS:
      return { ...state, connections: payload };

    case TYPE.SET_CONNECTIONS:
      return { ...state, connections: payload };

    case TYPE.RESET_PACKETS:
      return { ...state, packets: [] };

    case TYPE.SET_PACKETS:
      return { ...state, packets: payload };

    default:
      return state;
  }
};