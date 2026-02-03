import api from "../../api/api";

export const fetchProducts = (queryString) => async (dispatch) => {
  console.log(queryString);
  try {
    dispatch({ type: "SET_LOADING", payload: true });
    const { data } = await api.get(`/public/products?${queryString}`);
    dispatch({
      type: "FETCH_PRODUCTS",
      payload: data.content,
      pageNumber: data.pageNumber,
      pageSize: data.pageSize,
      totalElements: data,
      totalPages: data.totalPages,
      lastPage: data.lastPage,
    });
    dispatch({ type: "SET_LOADING", payload: false });
  } catch (e) {
    dispatch({
      type: "SET_ERROR_MESSAGE",
      payload: e?.response?.data?.message || "Something went wrong",
    });
  }
};

export const fetchCategories = () => async (dispatch) => {
  try {
    // dispatch({ type: "SET_LOADING", payload: true });

    const { data } = await api.get(`/public/categories`);
    dispatch({
      type: "FETCH_CATEGORIES",
      payload: data.content,
      pageNumber: data.pageNumber,
      pageSize: data.pageSize,
      totalElements: data,
      totalPages: data.totalPages,
      lastPage: data.lastPage,
    });
    // dispatch({ type: "SET_LOADING", payload: true });
  } catch (e) {
    dispatch({
      type: "SET_ERROR_MESSAGE",
      payload: e?.response?.data?.message || "Something went wrong",
    });
  }
};
