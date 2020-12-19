import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link, useLocation } from "react-router-dom";
import { smallImage } from "../util";
const Game = ({ name, released, rating, img, id }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  let urlPattern;
  if (location.pathname === "/search") {
    urlPattern = `/game/search/${id}`;
  } else {
    urlPattern = `/game/${id}`;
  }
  return (
    <StyledGame layoutId={id?.toString()} onClick={loadDetailHandler}>
      {console.log(location.pathname)}
      <Link to={urlPattern} style={{ textDecoration: "none" }}>
        <motion.img
          layoutId={`image ${id}`}
          src={smallImage(img, 640)}
          alt=""
        />
        <h4>{name}</h4>
        <p>
          <span>Release Date:</span> {released}
        </p>
        <p>
          <span>Rating:</span> {rating ? rating : "NA"}
        </p>
      </Link>
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
