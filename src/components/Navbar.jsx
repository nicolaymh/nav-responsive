import styled from "styled-components";
import BurguerButton from "./BurguerButton";
import { useState } from "react";

const NavContainer = styled.nav`
  padding: 0.4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }

  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }

  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: black;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }

  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  position: absolute;
  background-color: #222;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    // Cuando esta true lo pasa a false y vice versa.
    setClicked(!clicked);
  };

  return (
    <NavContainer>
      <h2>
        Navbar <span>Responsive</span>
      </h2>
      <div className={`links ${clicked ? "active" : ""}`}>
        <a onClick={handleClicked} href="#h">
          Home
        </a>
        <a onClick={handleClicked} href="#h">
          Shop
        </a>
        <a onClick={handleClicked} href="#h">
          About
        </a>
        <a onClick={handleClicked} href="#h">
          Contact
        </a>
        <a onClick={handleClicked} href="#h">
          Blog
        </a>
      </div>
      <div className="burguer">
        <BurguerButton clicked={clicked} handleClicked={handleClicked} />
      </div>
      <BgDiv className={`initial ${clicked ? "active" : ""}`} />
    </NavContainer>
  );
};

export default Navbar;
