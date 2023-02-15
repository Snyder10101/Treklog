import React from "react";
import { NavItem, Nav } from "reactstrap";
import { NavLink} from "react-router-dom";

const Navigation = ({
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route
    }) => {

    return (
      <Nav>
        <NavItem>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/aboutus" className="nav-link">
            About Us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/trailsindex" className="nav-link">
            View All Trails
          </NavLink>
        </NavItem>
        { logged_in && (
        <NavItem>
          <NavLink to="/myindex" className="nav-link">
            View My Trails
          </NavLink>
        </NavItem>
        )}
        { !logged_in && (
        <NavItem>
          <a href={new_user_route} className="nav-link">
            Sign Up
          </a>
        </NavItem>
        )}
        { logged_in && (
        <NavItem>
          <NavLink to="/trailnew" className="nav-link">
            Add a New Trail
          </NavLink>
        </NavItem>
        )}
        { logged_in && (
        <NavItem>
          <a href={sign_out_route} className="nav-link">
            Sign Out
          </a>
        </NavItem>
        )}
        { !logged_in && (
        <NavItem>
          <a href={sign_in_route} className="nav-link">
            Log In
          </a>
        </NavItem>
        )}
      </Nav>
    )
  }
  
  export default Navigation