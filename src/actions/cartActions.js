import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

export const addToCart = (items, product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;
  cartItems.forEach((element) => {
    if (x._id === product._id) {
      alreadyExists = true;
      element.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getstate) => {
  const cartItems = getState().cart.cartItems.filter(
    (x) => x._id !== product._id
  );
  dispatch({
    type: REMOVE_FROM_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
