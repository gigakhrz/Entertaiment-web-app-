//for signUp component
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Can't be empty")
    .email("Looks like this is not an email"),
  password: yup
    .string()
    .min(6, "At least 6 characters")
    .max(20, "Maximum 20 characters")
    .required("Can't be empty")
    .matches(
      /^(?=.*[A-Z])(?=.*\W)/,
      "Password must contain at least one uppercase letter and one symbol"
    ),
  confirmPassword: yup
    .string()
    .required("Can't be empty")
    .oneOf([yup.ref("password"), ""]),
});

export default schema;
