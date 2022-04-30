const initialState = {
  data: { name: "" },
};

const deshboardCounter = (state = initialState, action) => {
  switch (action.type) {
    case "DESHBOARD_DATA": {
      return { ...state, data: action.payload };
    }

    default:
      return state;
  }
};

export default deshboardCounter;
