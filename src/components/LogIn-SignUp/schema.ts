import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Can't be empty")
    .email("Looks like this is not an email"),
  password: yup.string().required("Can't be empty"),
});

export default schema;
