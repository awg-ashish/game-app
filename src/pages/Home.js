import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";
import Game from "../components/Game";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animations";
import { Ring } from "react-awesome-spinners";
const Home = () => {
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          setPageNum((prevPageNum) => prevPageNum + 1);
        }
      },
      { threshold: 1 }
    )
  );
  const [element, setElement] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const { popular } = useSelector((state) => state.games);
  useEffect(() => {
    dispatch(loadGames(popular, pageNum));
  }, [pageNum, dispatch]);
  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;
    if (currentElement) {
      currentObserver.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return (
    <>
      <GameList>
        {popular.length ? (
          <AnimateSharedLayout>
            <AnimatePresence>
              {pathId && <GameDetail pathId={pathId} />}
            </AnimatePresence>
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
              <Loading ref={setElement}>
                <Ring />
              </Loading>
            </Games>
          </AnimateSharedLayout>
        ) : (
          <Loading>
            <Ring />
          </Loading>
        )}
      </GameList>
    </>
  );
};
const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 3rem;
  animation-name: ${fadeIn};
  animation-duration: 0.75s;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Loading = styled.div`
  width: 5rem;
  margin: 0 auto;
`;
export default Home;
