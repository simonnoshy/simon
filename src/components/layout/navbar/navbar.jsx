import React, { useContext } from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import { gState } from "../../../context/context";

const Navbar = () => {
  const navigate = useNavigate();
  const { data } = useContext(gState);
  const { isLoggedIn, userData } = data;
  const { image } = userData;
  return (
    <nav className="navbar navbar-dark bg-secondary p-2">
      {isLoggedIn && (
        <> 
        <figure
              onClick={() => navigate("/settings")}
              style={{ cursor: "pointer" }}
              className="d-flex align-items-center m-0"
            >
            </figure>
            
        <ul className="navbar-nav flex-row gap-3 align-items-center justify-content-center">
          <li className="nav-item">
            
          </li>
          
          <li className="nav-item">
            <NavLink className="nav-link" to={"/products"}>
              Products
            </NavLink>
          </li>
          <li className="nav-item ms-auto">
            <NavLink className="nav-link" to={"/login"}>
              Login
            </NavLink>
          </li>
          <li className="nav-item ms-auto">
            <NavLink className="nav-link" to={"/register"}>
              Register
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink className="nav-link" to={"/contact"}>
              Contact
            </NavLink>
          </li>
        </ul>
        </>
       
      )}
      {!isLoggedIn && (
        <div className="bg-dark p-3">
        <ul className="navbar-nav flex-row gap-3 d-flex ">
          <li className="nav-item">
            <NavLink className="nav-link text-white" to={"/register"}>
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to={"/login"}>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
      )}
    </nav>
  );
};

export default Navbar;