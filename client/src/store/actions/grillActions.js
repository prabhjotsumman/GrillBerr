import { GET_CURRENT_GRILL, SET_CURRENT_GRILL } from "../../constants/constants";

export const setCurrentGrill = (grill) => {
  return (dispatch, getState) => {
    console.log("GRILL IN ACTION", grill);
    dispatch({ type: SET_CURRENT_GRILL, payload: grill });
  };
};

export const getCurrentGrill = (grill) => {
  return (dispatch, getState) => {
    dispatch({ type: GET_CURRENT_GRILL });
  };
};
