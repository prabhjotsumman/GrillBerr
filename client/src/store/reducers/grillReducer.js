const initState = {};

const grillReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_CURRENT_GRILL":
      localStorage.setItem("currentGrill",JSON.stringify(action.payload));
      return {
        ...state,
        grill: action.payload
      };
      
    case "GET_CURRENT_GRILL":
        const grill = JSON.parse(localStorage.getItem("currentGrill")) || {};
        return {
          ...state,
          grill
        };
    default:
      return state;
  }
};

export default grillReducer;
