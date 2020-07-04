import { ValidationError } from 'yup';

export default function getValidationErrors(error) {
  const validationErrors = {};

  error.inner.forEach(err => {
    validationErrors[err.path] = err.message;
  });

  return validationErrors;
}
