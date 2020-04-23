import TYPE from "./../Types/Auth";
import { makeAPIAction, makeSyncAction } from "./Utils";
import { logInAPI, signUpAPI } from "./../../Api/Auth";

export const logIn = makeAPIAction(logInAPI, TYPE.SIGN_IN_SUCCESS, TYPE.SIGN_IN_FAILURE);

export const signUp = makeAPIAction(signUpAPI, TYPE.SIGN_UP_SUCCESS, TYPE.SIGN_UP_FAILURE);

export const resetUser = makeSyncAction(TYPE.RESET_USER);

export const setUser = makeSyncAction(TYPE.SET_USER);