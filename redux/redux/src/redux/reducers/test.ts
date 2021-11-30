import { types } from "../types";

const initialState = {
  data: [],
  loading: false,
};



export const testReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.testInit:
      return {
        data: action.payload,
        loading: true,
      };
    case types.testOk:
      return {
        data: action.payload,
        loading: false,
      };
    case types.testError:
      return {
        data: { errorCode: 400 },
        loading: false,
      };
    default:
      return state;
  }
};
