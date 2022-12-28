export default function Validate(value) {
  let errors = {};
  
  if (!value.email) {
    errors.email = "This field is required";
  } else if (!/\S+@\S+\.\S+/.test(value.email)) {
    errors.email = "Email is invalid";
  } 
  if (!value.password1) {
    errors.password1 = "This field is required";
  } else if (value.password1.length < 6) {
    errors.password1 = "Password must contain at least six characters";
  } else if (
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-z]).{8,32}$/.test(value.password1)
  ) {
    errors.password1 = "Password is invalid";
  } 
  
  if (!value.password2) {
    errors.password2 = "This field is required";
  } else if (value.password2.length < 6) {
    errors.password2 = "Password must contain at least six characters";
  } else if (
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-z]).{8,32}$/.test(value.password2)
  ) {
    errors.password2 = "Password is invalid";
  } else if (value.password1 !== value.password2) {
    errors.password2 = "Password did't match";
  } else if (value.status) {
    errors.status = "Email already exists.";
  }
  return errors;
}
