import moment from "moment";

import TYPE from "../Types/App";
import { saveFile } from "../../Utils/File";

export const resetApp = (data) => (dispatch) => {
  dispatch({ type: TYPE.SET_STORE, payload: data });
};

export const saveApp = () => async (dispatch, getState) => {
  const store = getState();
  delete store._persist;

  // Save to JSON file
  saveFile(JSON.stringify(store), `SAVED-STORE-${moment().format("DD-MM-YYYY")}.json`);

  dispatch({ type: TYPE.SAVE_STORE, payload: {} });
};