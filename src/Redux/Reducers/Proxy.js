import TYPE from "../Types/Proxy";
import { connections } from "../../__Mocks__/Data/Connection";

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

    default:
      return state;
  }
};