const base_url = "https://api.rawg.io/api";

//Getting the date

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
console.log(getCurrentMonth());

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
console.log(getCurrentDay());

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
export const popularGames_url = `${base_url}/games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const upcomingGames_url = `${base_url}/games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

export const newGames_url = `${base_url}/games?dates=${lastYear},${currentYear}&ordering=-released&page_size=10`;

export const gameDetails_url = (gameId) => `${base_url}/games/${gameId}`;

export const gameScreenshots_url = (gameId) =>
  `${base_url}/games/${gameId}/screenshots`;
