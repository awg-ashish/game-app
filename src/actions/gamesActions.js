import axios from "axios";

import {
  newGames_url,
  popularGames_url,
  searchGames_url,
  upcomingGames_url,
} from "../api";

export const loadGames = (prevData = [], page_no) => async (dispatch) => {
  console.log(prevData);
  const popularData = await axios.get(popularGames_url(page_no));
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popularData: [...prevData, ...popularData.data.results],
    },
  });
};

export const fetchSearch = (query, page_no = 1, prevData = []) => async (
  dispatch
) => {
  const searchGames = await axios.get(searchGames_url(query, page_no));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: [...prevData, ...searchGames.data.results],
    },
  });
};
