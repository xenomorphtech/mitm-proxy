import TYPE from "./../Types/Proxy";
import TYPE_PAGE from "./../Types/Page";

import { packets } from "./../../__Mocks__/Data/Packets";
import { connections } from "./../../__Mocks__/Data/Connection";

export const getPackets = (data) => (dispatch, getState) => {
  dispatch({ type: TYPE_PAGE.SHOW_BACKDROP, payload: { count: ++getState().page.backdrop.count } });
  dispatch({ type: TYPE.GET_PACKETS, payload: packets() });
  dispatch({ type: TYPE_PAGE.HIDE_BACKDROP, payload: { count: --getState().page.backdrop.count } });
};

export const getConnections = (data) => (dispatch, getState) => {
  dispatch({ type: TYPE_PAGE.SHOW_BACKDROP, payload: { count: ++getState().page.backdrop.count } });
  dispatch({ type: TYPE.GET_CONNECTIONS, payload: connections });
  dispatch({ type: TYPE_PAGE.HIDE_BACKDROP, payload: { count: --getState().page.backdrop.count } });
};