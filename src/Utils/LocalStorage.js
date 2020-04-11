export const setUserDetails = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserDetails = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : {};
};

export const resetUserDetails = () => {
  localStorage.setItem("user", JSON.stringify({}));
};