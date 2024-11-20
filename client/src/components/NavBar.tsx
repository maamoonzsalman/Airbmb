import React from 'react';
import '../styles/NavBar.css';

// Importing images
import logo from "../assets/images/Airbnb-Logo.wine.png";
import searchIcon from "../assets/images/search-outline.svg";
import globeIcon from "../assets/images/globe-outline.svg";
import hamburgerMenu from "../assets/images/hamburger-menu.png";
import userIcon from "../assets/images/person-circle-outline.svg";


const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* Top Container */}
        <div className="navbar-left">
          <img
            src={logo}
            alt="Airbnb Logo"
            className="navbar-logo"
          />
        </div>
        
        {/*
        <div className="navbar-center">
          <span className="navbar-tab">Stays</span>
          <span className="navbar-tab">Experiences</span>
        </div>
        */}
        <div className="navbar-center">
            <div className='navbar-center-top'>
                <span className="navbar-tab">Stays</span>
                <span className="navbar-tab">Experiences</span>
            </div>
            <div className='navbar-center-bottom'>
                <div className="search-bar">
                    <div className="search-bar-section">
                        <label>Where</label>
                        <input type="text" placeholder="Search destinations" />
                    </div>
                    <div className="search-bar-section">
                        <label>Check in</label>
                        <input type="text" placeholder="Add dates" />
                    </div>
                    <div className="search-bar-section">
                        <label>Check out</label>
                        <input type="text" placeholder="Add dates" />
                    </div>
                    <div className="who">
                        <label>Who</label>
                        <input type="text" placeholder="Add guests" />
                    </div>
                    <div className='search-button-container'>
                        <button className="search-button">
                        <img
                            src={searchIcon}
                            alt="Search"
                            className="search-icon"        
                        />
                        </button>
                    </div>
                </div>
            </div>
               
      </div>
        
        <div className="navbar-right">
          <span className="nav-item">Airbnb your home</span>
          <img
            src={globeIcon}
            alt="Language Options"
            className="icon globe-icon nav-item"
          />
          <div className="user-menu-container">
            <img
              src={hamburgerMenu}
              alt="Menu"
              className="icon hamburger-icon"
            />
            <img
              src={userIcon}
              alt="User"
              className="icon user-icon"
            />
          </div>
        </div>
      

      {/* Bottom Container 
      <div className="navbar-bottom">
        <div className="search-bar">
          <div className="search-bar-section">
            <label>Where</label>
            <input type="text" placeholder="Search destinations" />
          </div>
          <div className="search-bar-section">
            <label>Check in</label>
            <input type="text" placeholder="Add dates" />
          </div>
          <div className="search-bar-section">
            <label>Check out</label>
            <input type="text" placeholder="Add dates" />
          </div>
          <div className="who">
            <label>Who</label>
            <input type="text" placeholder="Add guests" />
          </div>
          <div className='search-button-container'>
            <button className="search-button">
              <img
                src={searchIcon}
                alt="Search"
                className="search-icon"
                
              />
            </button>
          </div>
        </div>
      </div>
        */}
    </nav>
  );
};

export default NavBar;
