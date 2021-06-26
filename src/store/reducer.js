export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket.reduce((total, item) => item.price + total, 0);

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "ADD_TO_BASKET":
      return { ...state, basket: state.basket.concat(action.item) };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.item.id),
      };
    default:
      return state;
  }
};

export default reducer;
