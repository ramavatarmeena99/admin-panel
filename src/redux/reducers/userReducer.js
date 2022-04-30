const initialState = { user_data: [] };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user_data: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
