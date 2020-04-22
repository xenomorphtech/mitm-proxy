import TYPE from "./../Types/Proxy";
import TYPE_PAGE from "./../Types/Page";

import { packets } from "./../../__Mocks__/Data/Packets";
import { connections } from "./../../__Mocks__/Data/Connection";

export const getPackets = (data) => (dispatch, getState) => {
  dispatch({ type: TYPE_PAGE.SHOW_BACKDROP, payload: { count: ++getState().page.backdrop.count } });
  dispatch({ type: TYPE.GET_PACKETS, payload: packets() });
  dispatch({ type: TYPE_PAGE.HIDE_BACKDROP, payload: { count: --getState().page.backdrop.count } });
};

export const resetPackets = () => (dispatch) => {
  dispatch({ type: TYPE.RESET_PACKETS, payload: [] });
};

export const setPackets = (data) => (dispatch) => {
  dispatch({ type: TYPE.SET_PACKETS, payload: data });
};

export const getConnections = (data) => (dispatch, getState) => {
  dispatch({ type: TYPE_PAGE.SHOW_BACKDROP, payload: { count: ++getState().page.backdrop.count } });
  dispatch({ type: TYPE.GET_CONNECTIONS, payload: connections });
  dispatch({ type: TYPE_PAGE.HIDE_BACKDROP, payload: { count: --getState().page.backdrop.count } });
};

export const setConnections = (data) => (dispatch) => {
  dispatch({ type: TYPE.SET_CONNECTIONS, payload: data});
};