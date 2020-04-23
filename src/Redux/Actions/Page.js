import TYPE from '../Types/Page';
import { makeSyncAction } from "./Utils";

export const showLoading = () => (dispatch, getState) => {
  dispatch({ type: TYPE.SHOW_BACKDROP, payload: ++getState().page.backdrop });
};

export const hideLoading = () => (dispatch, getState) => {
  dispatch({ type: TYPE.HIDE_BACKDROP, payload: --getState().page.backdrop });
};

export const showSnackbar = makeSyncAction(TYPE.SHOW_SNACKBAR);

export const hideSnackbar = (q) => makeSyncAction(TYPE.HIDE_SNACKBAR)({ ...q, open: false });