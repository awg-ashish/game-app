const initialState = {
  game: {},
  screen: {},
  isLoading: true,
  query: "",
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    case "STORE_QUERY":
      return {
        ...state,
        query: action.payload.query,
      };
    default:
      return { ...state };
  }
};
