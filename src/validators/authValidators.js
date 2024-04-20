import validator from 'validator';
import { INVALID_MAIL, PASS_LENGTH, PASS_NOT_MATCH } from './errors/errors';

export const EmailValidator = (email) => validator.isEmail(email);

export const canAuthenticate = (email, password) => {
  let errors = [];

  if (!EmailValidator(email)) errors.push(INVALID_MAIL);

  if (password.length < 6) errors.push(PASS_LENGTH);

  if (errors.length > 0) {
    return {
      isValid: false,
      errors,
    };
  }

  return { isValid: true, errors };
};

export const CanCreateAccount = (email, password, confirmpassword) => {
  let errors = [];

  if (!EmailValidator(email)) errors.push(INVALID_MAIL);

  if (password !== confirmpassword) errors.push(PASS_NOT_MATCH);

  if (password.length < 6) errors.push(PASS_LENGTH);

  if (errors.length > 0) {
    return {
      isValid: false,
      errors,
    };
  }

  return { isValid: true, errors };
};
