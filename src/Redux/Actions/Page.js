import TYPE from '../Types/Page';

export const showLoading = (queries) => (dispatch) => {
  dispatch({ type: TYPE.SHOW_BACKDROP, payload: queries });
};

export const hideLoading = (queries) => (dispatch) => {
  dispatch({ type: TYPE.HIDE_BACKDROP, payload: queries });
};

export const showSnackbar = (queries) => (dispatch) => {
  dispatch({ type: TYPE.SHOW_SNACKBAR, payload: queries });
};

export const hideSnackbar = (queries) => (dispatch) => {
  dispatch({ type: TYPE.HIDE_SNACKBAR, payload: { ...queries, open: false } });
};