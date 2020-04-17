import moment from "moment";

import TYPE from "../Types/App";
import { saveFile } from "../../Utils/File";

export const resetApp = (data) => (dispatch, getState) => {
  const store = { ...getState() };
  store.proxy = { ...data.proxy };
  dispatch({ type: TYPE.SET_STORE, payload: store });
};

export const saveApp = () => async (dispatch, getState) => {
  const proxy = { ...getState().proxy };
  const store = { proxy };

  // Save to JSON file
  saveFile(JSON.stringify(store), `SESSION_${moment().format("YYYYMMDD_hhmm")}.json`);

  dispatch({ type: TYPE.SAVE_STORE, payload: {} });
};