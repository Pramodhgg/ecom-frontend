const initialState = {
  isLoading: false,
  errorMessage: null,
  categoryLoader: false,
  categoryError: null,
  btnLoader: false,
};

export const ErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "BUTTON_LOADER":
      return {
        ...state,
        btnLoader: true,
        errorMessage: null,
        categoryError: null,
      };
    case "SET_SUCCESS":
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        btnLoader: false,
        categoryError: null,
        categoryLoader: false,
      };
    case "SET_ERROR_MESSAGE":
      return { ...state, isLoading: false, errorMessage: action.payload };
    case "CATEGORY_SUCCESS":
      return {
        ...state,
        categoryLoader: false,
        categoryError: null,
      };
    case "CATEGORY_LOADER":
      return {
        ...state,
        categoryLoader: true,
        categoryError: null,
        errorMessage: null,
      };
    case "CATEGORY_ERROR_MESSAGE":
      return {
        ...state,
        isLoading: false,
        categoryError: true,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};
