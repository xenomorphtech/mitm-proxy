import TYPE from "../Types/Auth";

const initialState = {
  user: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case TYPE.SIGN_IN_SUCCESS:
      return { ...state, user: payload };

    default:
      return state;
  }
};