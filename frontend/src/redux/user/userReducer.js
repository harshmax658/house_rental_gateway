import { SignIN } from "./action";

const initialUserState = {
  currentUser: null,
  error: null,
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SignIN:
      return {
        ...state,
        currentUser: action.data,
        error: null,
      };

    default:
      return state;
  }
};
export default userReducer;
