import moment from "moment";

import TYPE from "./../Types/App";
import TYPE_PAGE from "./../Types/Page";
import { saveFile } from "./../../Utils/File";

export const setStore = (data) => (dispatch, getState) => {
  const store = { ...getState() };
  store.proxy = { ...data.proxy };
  dispatch({ type: TYPE.SET_STORE, payload: store });
};

export const saveStore = () => async (dispatch, getState) => {
  dispatch({ type: TYPE_PAGE.SHOW_BACKDROP, payload: { count: ++getState().page.backdrop.count } });
  
  const store = { proxy: { ...getState().proxy } };
  // Save to JSON file
  saveFile(JSON.stringify(store), `SESSION_${moment().format("YYYYMMDD_hhmmss")}.json`);

  dispatch({ type: TYPE.SAVE_STORE, payload: {} });
  dispatch({ type: TYPE_PAGE.HIDE_BACKDROP, payload: { count: --getState().page.backdrop.count } });
};