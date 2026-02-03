const initialState = {
  isLoading: false,
  errorMessage: null,
};

export const ErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR_MESSAGE":
      return { ...state, isLoading: false, errorMessage: action.payload };

    default:
      return state;
  }
};
