import { api } from "../../utils/axios";
import { types } from "../types";

export const processTest = () => {
  return async (dispatch) => {

    dispatch(iniciarPrueba());

    try {
      const response = await api.get("/movie/top_rated");
      dispatch(pruebaExitosa(response.data.results));
    } catch (err) {
      dispatch(pruebaFallida(err));
    }
  };
};

const iniciarPrueba = () => ({
  type: types.testInit,
  payload: [],
});


const pruebaExitosa = (data) => ({
  type: types.testOk,
  payload: data,
});

const pruebaFallida = (err) => ({
  type: types.testError,
  error: {
    message: err,
  },
});
