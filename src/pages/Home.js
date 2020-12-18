import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";
import Game from "../components/Game";
import styled from "styled-components";
import { motion } from "framer-motion";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  console.log(popular, newGames, upcoming);
  return (
    <GameList>
      <h3>Popular Games</h3>
      <Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            rating={game.rating}
            img={game.background_image}
            key={game.id}
            id={game.id}
          />
        ))}
        <button>Load More</button>
      </Games>
      <h3>New Games</h3>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            rating={game.rating}
            img={game.background_image}
            key={game.id}
          />
        ))}
        <button>Load More</button>
      </Games>
      <h3>Upcoming Games</h3>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            rating={game.rating}
            img={game.background_image}
            key={game.id}
          />
        ))}
        <button>Load More</button>
      </Games>
    </GameList>
  );
};
const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 3rem;
  button {
    height: 3rem;
    width: 60%;
    margin: auto;
    border-radius: 15px;
  }
`;
export default Home;
