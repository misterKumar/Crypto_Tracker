// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import MobileDrawer from "./drawer";
import "./styles.css";

function Header() {


  return (
    <div className="header">
      <Link to="/">
        <h1 style={{ fontSize: "2rem" }}>
          Kripto Tracker<span style={{ color: "var(--blue)" }}>.</span>
        </h1>
        </Link>
      <div className="links-flex">
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className="link">Watchlist</p>
        </Link>
        <Link to="/dashboard">
          <Button
            text="Dashboard"
            onClick={() => {
              // console.log("Header>> dashboard-btn");
            }}
          />
        </Link>
      </div>
      <MobileDrawer />
    </div>
  );
}

export default Header;