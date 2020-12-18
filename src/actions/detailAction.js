import axios from "axios";

import { gameDetails_url, gameScreenshots_url } from "../api";

export const loadDetail = (id) => async (dispatch) => {
    dispatch({
        type: "LOADING_DETAIL",
    });
    const detailData = await axios.get(gameDetails_url(id));
    const screenShotData = await axios.get(gameScreenshots_url(id));
    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screen: screenShotData.data,
        },
    });
};
