import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_CART_ITEMS,
  GET_CART_STATUS,
} from "../../constants/constants";

const initState = {};

const cartReducer = (state = initState, action) => {
  let cart = [];
  switch (action.type) {
    case GET_CART_STATUS:
      cart = JSON.parse(localStorage.getItem("itemsInCart")) || [];
      const presentInCart = cart.find((item)=> item.id === action.payload.id);  
      const status = (presentInCart) ? "ADDED" : "REMOVED"
      return {
          ...state,
          cart: {status}
      }
    case ADD_TO_CART:
      //TODO: save this to database
      cart = JSON.parse(localStorage.getItem("itemsInCart")) || [];
      cart.push(action.payload);
      localStorage.setItem("itemsInCart", JSON.stringify(cart));
      console.log(cart);
      return {
        ...state,
        cart: {itemsInCart : cart, status: 'ADDED'},
      };

    case REMOVE_FROM_CART:
      cart = JSON.parse(localStorage.getItem("itemsInCart")) || [];
      cart = cart.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        cart: {itemsInCart : cart, status: 'REMOVED'},
      };

    case GET_CART_ITEMS:
      cart = JSON.parse(localStorage.getItem("itemsInCart")) || [];
      return {
        ...state,
        cart: {itemsInCart : cart},
      };
    default:
      return state;
  }
};

export default cartReducer;
