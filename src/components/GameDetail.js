import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    console.log(e.target);
    if (e.target.classList.contains("exit")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  const { screen, game, isLoading } = useSelector((state) => state.details);
  console.log(game);
  return (
    <>
      {!isLoading && (
        <CardShadow onClick={exitDetailHandler} className="exit">
          <Detail layoutId={pathId}>
            <h3>{game.name}</h3>
            <Stats>
              <div className="rating">
                <h4>Rating: {game.rating}</h4>
              </div>
              <Info>
                <h4>Platforms:</h4>
                <Platforms>
                  {game.platforms?.map((data) => (
                    <p key={data.platform.id}>{data.platform.name}</p>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt="bg_image"
              />
            </Media>
            <Description>
              <h4>Description:</h4>
              <p>{game.description_raw}</p>
            </Description>
            <h4>Screenshots:</h4>
            <Gallery>
              {screen.results?.map((screen) => (
                <img
                  src={smallImage(screen.image, 640)}
                  alt="game screenshots"
                  key={screen.id}
                />
              ))}
            </Gallery>
            <Button onClick={exitDetailHandler} className="exit">
              Back
            </Button>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};
const CardShadow = styled(motion.div)`
  width: 100%;
  padding-bottom: 2rem;
  z-index: 100;
  min-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 50px 50px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.85rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3rem;
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
`;

const Detail = styled(motion.div)`
  width: 85%;
  border-radius: 1rem;
  padding: 2rem 2rem;
  margin-top: 3rem;
  background: white;
  position: absolute;
  left: 7.5%;
  top: 2%
  bottom: 2%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: left;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
  text-align: justify;
`;
const Gallery = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  img {
    width: 24vw;
    margin: left;
    padding: 0.5rem;
  }
  @media (max-width: 900px) {
    img {
      flex-direction: column;
      width: 70vw;
      margin: 0 auto;
    }
  }
`;
const Button = styled.button`
  margin: 2rem auto;
  display: block;
  padding: 1rem 3rem;
  border-radius: 2rem;
  border: none;
  background-color: #ff7676;
  color: white;
  cursor: pointer;
  outline: none;
  @media (max-width: 900px);
   {
    padding: 0.5rem 3rem;
  }
`;
export default GameDetail;
