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
        upcoming: [...action.payload.upcomingData],
        newGames: [...action.payload.newGamesData],
      };
    default:
      return { ...state };
  }
};