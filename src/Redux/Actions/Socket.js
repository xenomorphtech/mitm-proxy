import TYPE from "./../Types/Socket";
// import TYPE_PAGE from "./../Types/Page";

export const setSocketData = (data) => (dispatch, getState) => {
  // dispatch({ type: TYPE_PAGE.SHOW_BACKDROP, payload: { count: ++getState().page.backdrop.count } });
  dispatch({ type: TYPE.SET_SOCKET_DATA, payload: data });
  // dispatch({ type: TYPE_PAGE.HIDE_BACKDROP, payload: { count: --getState().page.backdrop.count } });
};

export const resetSocketData = () => (dispatch, getState) => {
  // dispatch({ type: TYPE_PAGE.SHOW_BACKDROP, payload: { count: ++getState().page.backdrop.count } });
  dispatch({ type: TYPE.RESET_SOCKET_DATA });
  // dispatch({ type: TYPE_PAGE.HIDE_BACKDROP, payload: { count: --getState().page.backdrop.count } });
};