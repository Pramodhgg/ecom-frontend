const initialState = {
  cart: [],
  totalPrice: 0,
  cartId: null,
};

export const cartReducer = (state = initialState, action) => {
  let existingProduct;
  let productToAdd;
  switch (action.type) {
    case "ADD_TO_CART":
      productToAdd = action.payload;
      existingProduct = state.cart.find(
        (item) => item.productID === productToAdd.productID,
      );
      if (existingProduct) {
        const updateCart = state.cart.map((item) => {
          if (item.productID === productToAdd.productID) {
            return productToAdd;
          } else {
            return item;
          }
        });
        return {
          ...state,
          cart: updateCart,
        };
      } else {
        const newCart = [...state.cart, productToAdd];
        return {
          ...state,
          cart: newCart,
        };
      }
    case "REMOVE_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.productID !== action.payload.productID,
        ),
      };
    case "GET_USER_CART_PRODUCTS":
      return {
        ...state,
        cart: action.payload,
        totalPrice: action.totalPrice,
        cartId: action.cartId,
      };
    case "CLEAR_CART":
      return { cart: [], totalPrice: 0, cartId: null };

    default:
      return state;
  }
};
