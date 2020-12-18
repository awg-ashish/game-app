import axios from "axios";

import { newGames_url, popularGames_url, upcomingGames_url } from "../api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGames_url);
  const upcomingData = await axios.get(upcomingGames_url);
  const newGamesData = await axios.get(newGames_url);
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popularData: [...popularData.data.results],
      upcomingData: [...upcomingData.data.results],
      newGamesData: [...newGamesData.data.results],
    },
  });
};
