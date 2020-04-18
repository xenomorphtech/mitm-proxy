import TYPE from '../Types/Page';

export const showLoading = () => (dispatch, getState) => {
  dispatch({ type: TYPE.SHOW_BACKDROP, payload: { count: ++getState().page.backdrop.count } });
};

export const hideLoading = () => (dispatch, getState) => {
  dispatch({ type: TYPE.HIDE_BACKDROP, payload: { count: --getState().page.backdrop.count } });
};

export const showSnackbar = (queries) => (dispatch) => {
  dispatch({ type: TYPE.SHOW_SNACKBAR, payload: queries });
};

export const hideSnackbar = (queries) => (dispatch) => {
  dispatch({ type: TYPE.HIDE_SNACKBAR, payload: { ...queries, open: false } });
};