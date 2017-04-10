export default (state={}, action) => {
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
