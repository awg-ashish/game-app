const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};
export const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: [...action.payload.popularData],
      };
    case "CLEAR_GAMES":
      console.log("games_cleared");
      return {
        ...state,
        popular: [],
      };
    case "CLEAR_SEARCH":
      console.log("search_cleared");
      return {
        ...state,
        searched: [],
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: [...action.payload.searched],
      };
    case "CLEAR_SEARCH":
      console.log("search_cleared");
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};
