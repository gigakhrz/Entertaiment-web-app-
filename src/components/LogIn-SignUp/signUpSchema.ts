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
    .matches(/^(?=.*[A-Z])(?=.*\W)/, "Must contain !A@"),
  confirmPassword: yup
    .string()
    .required("Can't be empty")
    .test("passwords-match", "Passwords must match", function (value) {
      return value === this.parent.password;
    }),
});

export default schema;
