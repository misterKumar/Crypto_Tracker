import React, {  useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "react-router-dom";

export default function MobileDrawer() {
  const [flag, setFlag] = useState(false);
  return (
    <div className="drawer-wrapper">
      <MenuRoundedIcon className="link" onClick={() => setFlag(true)} />
      <Drawer anchor={"right"} open={flag} onClose={() => setFlag(false)}>
        <div className="mobile-drawer">
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
            <p className="link">Dashboard</p>
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
          </div>
        </div>
      </Drawer>
    </div>
  );
}