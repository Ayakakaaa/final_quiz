import React from "react";
import "./css/styles.css";
import { NavLink } from "react-router-dom";


export const NavBar = ({ currentUser, onSignOut }) => {
  const handleSignOutClick = event => {
    event.preventDefault();
    if (typeof onSignOut === "function") {
      onSignOut();
    }
  };
  return (
    <div className="ui secondary pointing menu">
      <NavLink exact to="/" className="item">
        Welcome
      </NavLink>
      <NavLink exact to="/auctions" className="item">
        Auctions
      </NavLink>
      <NavLink exact to="/auctions/new" className="item">
        New
      </NavLink>
      <div className="right menu">
        {!currentUser && (
          <>
            <NavLink exact to="/sign_in" className="ui black button">
              Sign In
            </NavLink>
          </>
        )}
        {currentUser && (
          <>
            <button
              className="ui inverted red button"
              onClick={handleSignOutClick}
            >
              Sign Out
            </button>

            <NavLink exact to={`users/${currentUser.id}/edit`}>
              <h3 className="item">Hello {currentUser.first_name}</h3>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};
