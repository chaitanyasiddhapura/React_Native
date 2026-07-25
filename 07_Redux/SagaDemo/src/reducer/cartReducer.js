const initialState = {
  cart: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART_SUCCESS':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
}