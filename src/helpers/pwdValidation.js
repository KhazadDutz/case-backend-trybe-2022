const validatePwd = (pwd) => {
  if (!pwd) return { code: 400, message: '"password" is required' };
  if (pwd === "")
    return { code: 400, message: '"password" is not allowed to be empty' };

  return null;
};
