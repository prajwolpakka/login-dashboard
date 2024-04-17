export const validatePassword = (value: string) => {
  const hasLowerCase = /[a-z]/.test(value);
  const hasUpperCase = /[A-Z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

  if (!value) return Promise.reject("✻ Required");

  if (value.length < 6) {
    return Promise.reject("✻ Must be at least 6 characters");
  }
  if (!hasLowerCase) {
    return Promise.reject("✻ Must contain at least one lowercase letter");
  }
  if (!hasUpperCase) {
    return Promise.reject("✻ Must contain at least one uppercase letter");
  }
  if (!hasNumber) {
    return Promise.reject("✻ Must contain at least one number");
  }
  if (!hasSpecialChar) {
    return Promise.reject("✻ Must contain at least one special character");
  }
  return Promise.resolve();
};

export const validateConfirmPassword = (value: string, passwordValue: string) => {
  if (!value) return Promise.reject("✻ Required");
  if (value !== passwordValue) {
    return Promise.reject("✻ Passwords do not match");
  }
  return Promise.resolve();
};
