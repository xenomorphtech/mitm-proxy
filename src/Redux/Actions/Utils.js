import TYPE_PAGE from "./../Types/Page";

export const makeAPIAction = (api, successType, failureType) => (payload) => async (dispatch, getState) => {
  dispatch({ type: TYPE_PAGE.SHOW_BACKDROP, payload: ++getState().page.backdrop });
  try {
    const data = await (await api(payload)).json();
    dispatch({ type: successType, payload: data });
    dispatch({ type: TYPE_PAGE.HIDE_BACKDROP, payload: --getState().page.backdrop });
    dispatch({ type: TYPE_PAGE.SHOW_SNACKBAR, payload: { open: true, msg: "SUCCESS", severity: "success" } });
  } catch (err) {
    dispatch({ type: failureType, payload: err, error: true });
    dispatch({ type: TYPE_PAGE.HIDE_BACKDROP, payload: --getState().page.backdrop });
    dispatch({ type: TYPE_PAGE.SHOW_SNACKBAR, payload: { open: true, msg: "Error", severity: "error" } });
  }
};

export const makeSyncAction = (type) => (payload = {}) => (dispatch) => dispatch({ type, payload });
