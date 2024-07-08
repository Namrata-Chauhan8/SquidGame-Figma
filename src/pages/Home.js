import React from "react";
// import Navbar from '../components/Navbar';
import background from "../assets/Background.png";
import "../assets/Global.scss";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import netflixLogo from "../assets/Netflix Logo.png";
import soldier from "../assets/Main 2.png";
import squidGameLogo from "../assets/Squid Game Logo.png";
import triangle from "../assets/Symbol 2.png";
import square from "../assets/Symbol 3.png";
import circle from "../assets/Symbol 1.png";
import aerrow from "../assets/Growth Trend.png";
import imdb from "../assets/imdb-logo.png";
import lightSoldier from "../assets/Main 1.png";

const Home = () => {
  return (
    <div className="home">
      <nav className="component">
        <div className="container">
          <div className="logo">
            <Link to="/" className="back">
              <FaArrowLeft />
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/" className="buttons">
              HOME
            </Link>
            <Link to="/" className="buttons">
              ABOUT
            </Link>
            <Link to="/" className="buttons">
              CAST
            </Link>
            <Link to="/" className="buttons">
              TRAILER
            </Link>
          </div>
          <div>
            <img src={netflixLogo} alt="netflix logo" className="logo" />
          </div>
        </div>
      </nav>
      <img src={background} alt="background" className="background" />
      <div className="squidGameLogo">
        <img
          src={squidGameLogo}
          alt="squid game logo"
          className="squidGameLogo"
        />
      </div>
      <div className="symbol">
        <img src={triangle} alt="triangle" className="triangle" />
        <img src={square} alt="square" className="square" />
        <img src={circle} alt="circle" className="circle" />
      </div>
      <div className="quote">
        Life is like a game, there are many players. If you don’t play with
        them, they’ll play with you...
      </div>
      <div>
        <img src={aerrow} alt="aerrow" className="aerrow" />
        <span className="trending">Trending #1</span>
      </div>
      <div>
        <button className="continue">Continue Watching</button>
      </div>
      <div className="info">
        <p className="s1">S1 E9 2021</p>
        <img src={imdb} alt="imdb logo" className="imdb" />
        <span className="rating">8.2</span>
      </div>
      <div className="soldier1">
        <img src={lightSoldier} alt="main1" className="main1" />
      </div>
      <div className="soldier">
        <img src={soldier} alt="main" className="main" />
      </div>
    </div>
  );
};

export default Home;
