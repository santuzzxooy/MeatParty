const existingUsernames = ["admin", "user123", "testuser"];

export const checkUsernameAvailability = (username) => {
  return !existingUsernames.includes(username.toLowerCase());
};