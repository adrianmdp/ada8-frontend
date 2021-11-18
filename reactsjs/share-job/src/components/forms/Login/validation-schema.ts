import * as yup from "yup";

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("No tiene un formato de email correcto")
    .required("Este dato es requerido"),
  password: yup.string().required("El password es obligatorio."),
});
