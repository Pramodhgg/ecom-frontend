const initiatlState = {
  products: [],
  categories: [],
  pagination: {},
};

export const productReducers = (state = initiatlState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        pagination: {
          ...state.pagination,
          pageNumber: action.pageNumber,
          pageSize: action.pageSize,
          totalElements: action,
          totalPages: action.totalPages,
          lastPage: action.lastPage,
        },
      };
    case "FETCH_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
        pagination: {
          ...state.pagination,
          pageNumber: action.pageNumber,
          pageSize: action.pageSize,
          totalElements: action,
          totalPages: action.totalPages,
          lastPage: action.lastPage,
        },
      };
    case "SET_PAGINATION":
      return { ...state, pagination: action.payload };
    default:
      return state;
  }
};
