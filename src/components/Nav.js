import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BiGame } from "react-icons/bi";
import { fetchSearch } from "../actions/gamesActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const Nav = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (event) => {
    setTextInput(event.target.value);
  };
  const { searched } = useSelector((state) => state.games);

  useEffect(() => {
    if (textInput === "") {
      history.push("/");
    } else {
      dispatch(fetchSearch(textInput));
      history.push("/search");
    }
  }, [dispatch, textInput, history]);
  return (
    <div>
      <StyledNav>
        <Logo>
          <BiGame className="icon" />
          <h1>Games Search Engine</h1>
        </Logo>
        <div className="search">
          <input
            type="text"
            placeholder="Type to Search..."
            onChange={inputHandler}
            value={textInput}
          />
          {textInput ? (
            searched.length ? (
              ""
            ) : (
              <h4>Oops!! No results Found.</h4>
            )
          ) : (
            ""
          )}
        </div>
      </StyledNav>
    </div>
  );
};
const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 60%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 1rem;
    margin-top: 1rem;
    &:focus {
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
      border: 1px solid #ff7676;
      outline: none;
    }
    &::placeholder {
      font-size: 1rem;
      color: #ccc;
    }
  }
  @media (max-width: 768px) {
    input {
      width: 100%;
    }
  }
`;

const Logo = styled(motion.div)`
  .icon {
    font-size: 2rem;
  }
`;
export default Nav;
