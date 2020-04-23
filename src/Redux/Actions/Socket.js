import TYPE from "./../Types/Socket";
import { makeSyncAction } from "./Utils";

export const setSocketData = (data) => (dispatch) => {
  dispatch({ type: TYPE.SET_SOCKET_DATA, payload: data });
  dispatch({ type: TYPE.RESET_SOCKET_DATA });
};

export const resetSocketData = makeSyncAction(TYPE.RESET_SOCKET_DATA);