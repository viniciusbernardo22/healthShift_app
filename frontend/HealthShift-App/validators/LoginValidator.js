import validator from "validator";

export const EmailValidator = (email) => validator.isEmail(email);