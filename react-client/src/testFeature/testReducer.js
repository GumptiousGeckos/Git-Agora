const initialState = {
  test: false
};

export default (state=initialState, action) => {
  switch(action.type) {
    case "DO_SOMETHING": {
      return {
        ...state,
        test: true
      };
    }
    default: {
      return state;
    }
  }
};
