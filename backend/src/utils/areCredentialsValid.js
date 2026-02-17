export const areCredentialsValid = (credentials) => {
  if (!credentials) {
    throw new Error("MISSING_CREDENTIALS");
  }

  if (!credentials.userName) {
    throw new Error("MISSING_USERNAME");
  }

  if (!credentials.password) {
    throw new Error("MISSING_PASSWORD");
  }

  return true;
};
