import { mapToArray } from "../../../helpers";
import { AddUserType, User } from "../../../types";
import { api } from "../../../utils";

export const getUsersAction = () => {
  return async (dispatch: any) => {
    dispatch(getUsersStart());

    try {
      const response = await api.get("/users.json");
      dispatch(getUsersSuccess(response.data));
    } catch (err) {
      dispatch(getUsersError(err));
    }
  };
};

export const addUserAction = (user: AddUserType) => {
  return async (dispatch: any) => {
    dispatch(getUsersStart());

    try {
      await api.post("/users.json", user);
    } catch (err) {
      dispatch(getUsersError(err));
    }
  };
};

const getUsersStart = () => ({
  type: "addUserstart",
  payload: [],
});

const getUsersSuccess = (data: User[]) => ({
  type: "addUserSuccess",
  payload: mapToArray(data),
});

const getUsersError = (err: any) => ({
  type: "addUserError",
  payload: err.toString(),
});
