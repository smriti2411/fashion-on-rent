export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Username required';
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  
 if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match';
  }
  return errors;
}