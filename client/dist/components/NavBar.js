import React from 'react';
import '../styles/NavBar.css';
// Importing images
import logo from "../assets/images/Airbnb-Logo.wine.png";
import searchIcon from "../assets/images/search-outline.svg";
import globeIcon from "../assets/images/globe-outline.svg";
import hamburgerMenu from "../assets/images/hamburger-menu.png";
import userIcon from "../assets/images/person-circle-outline.svg";
const NavBar = () => {
    return (React.createElement("nav", { className: "navbar" },
        React.createElement("div", { className: "navbar-top" },
            React.createElement("div", { className: "navbar-left" },
                React.createElement("img", { src: logo, alt: "Airbnb Logo", className: "navbar-logo" })),
            React.createElement("div", { className: "navbar-center" },
                React.createElement("span", { className: "navbar-tab" }, "Stays"),
                React.createElement("span", { className: "navbar-tab" }, "Experiences")),
            React.createElement("div", { className: "navbar-right" },
                React.createElement("span", { className: "nav-item" }, "Airbnb your home"),
                React.createElement("img", { src: globeIcon, alt: "Language Options", className: "icon globe-icon nav-item" }),
                React.createElement("div", { className: "user-menu-container" },
                    React.createElement("img", { src: hamburgerMenu, alt: "Menu", className: "icon hamburger-icon" }),
                    React.createElement("img", { src: userIcon, alt: "User", className: "icon user-icon" })))),
        React.createElement("div", { className: "navbar-bottom" },
            React.createElement("div", { className: "search-bar" },
                React.createElement("div", { className: "search-bar-section" },
                    React.createElement("label", null, "Where"),
                    React.createElement("input", { type: "text", placeholder: "Search destinations" })),
                React.createElement("div", { className: "search-bar-section" },
                    React.createElement("label", null, "Check in"),
                    React.createElement("input", { type: "text", placeholder: "Add dates" })),
                React.createElement("div", { className: "search-bar-section" },
                    React.createElement("label", null, "Check out"),
                    React.createElement("input", { type: "text", placeholder: "Add dates" })),
                React.createElement("div", { className: "who" },
                    React.createElement("label", null, "Who"),
                    React.createElement("input", { type: "text", placeholder: "Add guests" })),
                React.createElement("div", { className: 'search-button-container' },
                    React.createElement("button", { className: "search-button" },
                        React.createElement("img", { src: searchIcon, alt: "Search", className: "search-icon" })))))));
};
export default NavBar;
