import TYPE from "../Types/Page";

const initialState = {
  snackbar: undefined,
  backdrop: { count: 0 }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case TYPE.SHOW_SNACKBAR:
      return { ...state, snackbar: payload };

    case TYPE.HIDE_SNACKBAR:
      return { ...state, backdrop: payload };

    case TYPE.SHOW_BACKDROP:
      return { ...state, backdrop: payload };

    case TYPE.HIDE_BACKDROP:
      return { ...state, backdrop: payload };

    default:
      return state;
  }
};