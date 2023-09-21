import React from "react";
import Footer from "../Components/Common/Footer";
import Header from '../Components/Common/Header';
import LandingPageComponent from "../Components/LandingPage/MainComponent";

function HomePage() {
  return (
    <div>
      <Header />
      <LandingPageComponent />
      <Footer />
    </div>
  );
}

export default HomePage;