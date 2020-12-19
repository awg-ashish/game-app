import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";
import Game from "../components/Game";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";
const Home = () => {
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    const { popular } = useSelector((state) => state.games);

    return (
        <>
            <GameList>
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
                        <Button>Load More</Button>
                    </Games>
                </AnimateSharedLayout>
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
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;
const Button = styled.button`
    margin: auto;
    height: 4rem;
    display: block;
    padding: 0 3rem;
    border-radius: 2rem;
    border: none;
    background-color: #ff7676;
    color: white;
    cursor: pointer;
    outline: none;
    transition: 0.3s;
    &:hover {
        box-shadow: 0 0 5px #ccc;
        background-color: white;
        color: #ff7676;
    }
    @media (max-width: 900px) {
        margin: 1.5rem auto;
        height: 2.5rem;
    }
`;
export default Home;
