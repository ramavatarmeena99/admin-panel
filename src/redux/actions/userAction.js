export const userAction = ({ data }) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};

export const logoutAction = ({ data }) => {
  return {
    type: "LOGOUT",
    payload: data,
  };
};
