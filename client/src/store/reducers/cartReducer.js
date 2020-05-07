import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_CART_ITEMS,
} from "../../constants/constants";

const initState = {};

const cartReducer = (state = initState, action) => {
  let cart = [];
  switch (action.type) {
    case ADD_TO_CART:
      //TODO: save this to database
      cart = JSON.parse(localStorage.getItem("itemsInCart")) || [];
      cart.push(action.payload);
      localStorage.setItem("itemsInCart", JSON.stringify(cart));
      console.log(cart);
      return {
        ...state,
        cart,
      };

    case REMOVE_FROM_CART:
      cart = JSON.parse(localStorage.getItem("itemsInCart")) || [];
      cart.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        cart,
      };

    case GET_CART_ITEMS:
      cart = JSON.parse(localStorage.getItem("itemsInCart")) || [];
      return {
        ...state,
        cart,
      };
    default:
      return state;
  }
};

export default cartReducer;
