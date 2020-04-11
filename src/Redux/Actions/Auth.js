import TYPE from "../Types/Auth";
import TYPE_PAGE from "../Types/Page";
import { logInAPI, signUpAPI } from "../../Api/Auth";

const makeAction = (api, successType, failureType) => (payload) => async (dispatch, getState) => {
  dispatch({ type: TYPE_PAGE.SHOW_BACKDROP, payload: { count: ++getState().page.backdrop.count } });
  try {
    const data = await (await api(payload)).json();
    dispatch({ type: successType, payload: data });
    dispatch({ type: TYPE_PAGE.HIDE_BACKDROP, payload: { count: --getState().page.backdrop.count } });
  }
  catch (err) {
    dispatch({ type: failureType, payload: err, error: true });
    dispatch({ type: TYPE_PAGE.HIDE_BACKDROP, payload: { count: --getState().page.backdrop.count } });
  }
};

export const logIn = makeAction(logInAPI, TYPE.SIGN_IN_SUCCESS, TYPE.SIGN_IN_FAILURE);

export const signUp = makeAction(signUpAPI, TYPE.SIGN_UP_SUCCESS, TYPE.SIGN_UP_FAILURE);

export const resetUser = () => (dispatch) => {
  dispatch({ type: TYPE.RESET_USER, payload: {} });
}