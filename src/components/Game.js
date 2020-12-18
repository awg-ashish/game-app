import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
const Game = ({ name, released, rating, img, id }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <img src={`${img}`} alt="" />
      <h4>Name: {name}</h4>
      <p>Release Date :{released}</p>
      <p>Rating: {rating ? rating : "NA"}</p>
    </StyledGame>
  );
};
const StyledGame = styled(motion.div)`
  padding-bottom: 1rem;
  min-height: 30vh;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  img {
    width: 100%;
    height: 250px;
    border-radius: 15px 15px 0 0;
  }
  h4,
  p {
    padding-left: 1rem;
  }
`;
export default Game;
