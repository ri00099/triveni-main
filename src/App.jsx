import React from "react";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import VideoSection from "./pages/VideoSection";
import GraniteStory from "./pages/GraniteStory";
import TriveniProcessSection from "./pages/TriveniProcessSection";
import TriveniTestimonialSection from "./pages/TriveniTestimonialSection";

const App = () => {
  return (
    <>
      <Home />
      <VideoSection/>
      <GraniteStory/>
      <TriveniProcessSection/>
      <TriveniTestimonialSection/>
    </>
  );
};

export default App;
