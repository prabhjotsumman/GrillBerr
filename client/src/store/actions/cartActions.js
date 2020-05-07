import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_CART_ITEMS,
} from "../../constants/constants";

export const addToCart = (data) => {
  return (dispatch, getState) => {
    return dispatch({ type: ADD_TO_CART, payload: data });
  };
};

export const removeFromCart = (data) => {
  return (dispatch, getState) => {
    return dispatch({ type: REMOVE_FROM_CART, payload: data });
  };
};

export const getCartItems = () => {
  return (dispatch, getState) => {
    return dispatch({ type: GET_CART_ITEMS});
  };
};

