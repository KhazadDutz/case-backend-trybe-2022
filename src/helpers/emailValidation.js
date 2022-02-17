const validateEmail = (email) => {
  const validRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
  );

  if (!email) return { code: 400, message: '"email" is required' };
  if (email === "")
    return { code: 400, message: '"email" is not allowed to be empty' };

  const validEmail = validRegex.test(email);

  if (!validEmail)
    return { code: 400, message: '"email" must be a valid email' };

  return null;
};
