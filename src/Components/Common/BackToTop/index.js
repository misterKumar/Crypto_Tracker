import React from "react";
import SwipeUpRoundedIcon from '@mui/icons-material/SwipeUpOutlined';
import "./styles.css";
function TopButton() {
  let mybutton = document.getElementById("myBtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="back-top-top-btn" id="myBtn" onClick={()=>topFunction()} >
        <div className="icon-container">
            <SwipeUpRoundedIcon style={{ color: "var(--blue)" }} />
        </div>
    </div>
  );
}

export default TopButton;