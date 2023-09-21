import React from "react";
import Button from "../../Common/Button";
import "./styles.css";
import gradient from "../../../assets/gradient.png";
import iPhone from "../../../assets/iphone.png";
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import { Link } from "react-router-dom";

function LandingPageComponent() {
  return (
    <div className="landing-wrapper">
      <div className="landing-left">
        <motion.h1
          className="heading-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Kripto
        </motion.h1>
        <motion.h1
          className="heading-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="para"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Stay Ahead of the Crypto Game with Real-Time Tracking – Explore Our
          Dynamic Dashboard!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link to="/dashboard">
            <Button text="Dashboard" />
          </Link>
          <RWebShare
            data={{
              text: "Blast Off into the World of Cryptos!",
              url: "https://toshfolio.netlify.app/",
              title: "ToshFolio.",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <Button text="Share App" outlined={true} />
          </RWebShare>
        </motion.div>
      </div>
      <div className="landing-right">
        <img src={gradient} className="gradient" alt="gradient" />
        <motion.img
          src={iPhone}
          className="iphone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}

export default LandingPageComponent;