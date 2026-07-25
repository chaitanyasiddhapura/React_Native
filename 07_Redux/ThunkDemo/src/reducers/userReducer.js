const initialState = {
  loading: false,
  users: [],
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return { ...state, loading: true };

    case "FETCH_USERS_SUCCESS":
      return {
        loading: false,
        users: action.payload,
        error: null,
      };

    case "FETCH_USERS_FAILURE":
      return {
        loading: false,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};