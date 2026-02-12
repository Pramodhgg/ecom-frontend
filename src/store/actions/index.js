import toast from "react-hot-toast";
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
    dispatch({ type: "CATEGORY_LOADER", payload: true });

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
    dispatch({ type: "CATEGORY_SUCCESS", payload: true });
  } catch (e) {
    dispatch({
      type: "CATEGORY_ERROR_MESSAGE",
      payload: e?.response?.data?.message || "Something went wrong",
    });
  }
};

export const addToCart =
  (data, qty = 1) =>
  (dispatch, getState) => {
    // Find the product
    const { products } = getState().products;
    console.log(products);
    const product = products.find((item) => item.productID === data.productID);
    if (!product) return;
    //check for stock availability
    const isQuantityAvailable = product.quantity >= qty;

    // Add to cart
    if (isQuantityAvailable) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...data, quantity: qty },
      });
      localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
      toast.success("Product added to cart");
    } else {
      toast.error("Product out of stock");
    }
  };

export const increaseCartQuantity =
  (data, toast, currentQuantity, setCurrentQuantity) =>
  (dispatch, getState) => {
    // Find the product
    const { products } = getState().products;

    const getProduct = products.find((item) => {
      console.log(item);
      return item.productID === data.productID;
    });
    console.log(data);
    console.log(products);
    console.log(getProduct);
    const isQuantityExist = getProduct.quantity >= currentQuantity + 1;

    if (isQuantityExist) {
      const newQuantity = currentQuantity + 1;
      setCurrentQuantity(newQuantity);
      console.log(newQuantity);
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...data, quantity: newQuantity + 1 },
      });
      localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
    } else {
      toast.error("Quantity Reached to Limit");
    }
  };

export const decreaseCartQuantity =
  (data, newQuantity) => (dispatch, getState) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...data, quantity: newQuantity },
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
  };

export const removeFromCart = (data, toast) => (dispatch, getState) => {
  dispatch({ type: "REMOVE_CART", payload: data });
  toast.success(`${data.productName} removed from cart`);
  localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
};

export const registerNewUser =
  (sendData, toast, reset, navigate, setLoader) => async (dispatch) => {
    try {
      setLoader(true);
      const { data } = await api.post("/auth/signup", sendData);
      reset();
      toast.success(data?.message || "User Registered Successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message ||
          error?.response?.data?.password ||
          "Internal Server Error",
      );
    } finally {
      setLoader(false);
    }
  };

export const authenticateSignInUser =
  (sendData, toast, reset, navigate, setLoader) => async (dispatch) => {
    try {
      setLoader(true);
      const { data } = await api.post("/auth/signin", sendData);
      dispatch({ type: "LOGIN_USER", payload: data });
      localStorage.setItem("auth", JSON.stringify(data));
      reset();
      toast.success("Login Success");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Internal Server Error");
    } finally {
      setLoader(false);
    }
  };

export const logOutUser = (navigate) => (dispatch) => {
  dispatch({ type: "LOG_OUT" });
  localStorage.removeItem("auth");
  navigate("/login");
};

export const getUserAddresses = () => async (dispatch, getState) => {
  try {
    dispatch({ type: "SET_LOADING", payload: true });
    const { data } = await api.get(`/addresses`);
    dispatch({ type: "USER_ADDRESS", payload: data });
    dispatch({ type: "SET_SUCCESS" });
  } catch (error) {
    toast.error(error?.response?.data?.message || "Internal Server Error");
    dispatch({
      type: "IS_ERROR",
      payload:
        error?.response?.data?.message || "Failed to fetch user addresses",
    });
  }
};

export const addUpdateUserAddress =
  (sendData, toast, addressId, setOpenAddressModal) =>
  async (dispatch, getState) => {
    /*
    const { user } = getState().auth;
    await api.post(`/addresses`, sendData, {
          headers: { Authorization: "Bearer " + user.jwtToken },
        });
    */
    dispatch({ type: "BUTTON_LOADER" });
    try {
      if (!addressId) {
        const { data } = await api.post("/addresses", sendData);
      } else {
        await api.put(`/addresses/${addressId}`, sendData);
      }
      dispatch(getUserAddresses());
      toast.success("Address saved successfully");
      dispatch({ type: "SET_SUCCESS" });
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Internal Server Error");
      dispatch({ type: "IS_ERROR", payload: null });
    } finally {
      setOpenAddressModal(false);
    }
  };

export const selectUserCheckoutAddress = (address) => {
  localStorage.setItem("CHECKOUT_ADDRESS", JSON.stringify(address));

  return {
    type: "SELECT_CHECKOUT_ADDRESS",
    payload: address,
  };
};
