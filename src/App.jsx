import React from "react";
import Home from "./pages/Home";
// import Navbar from "./pages/Navbar";
import VideoSection from "./pages/VideoSection";
import GraniteStory from "./pages/GraniteStory";
import TriveniProcessSection from "./pages/TriveniProcessSection";
import TriveniTestimonialSection from "./pages/TriveniTestimonialSection";
import OverlapSection from "./pages/OverlapSection";

const App = () => {
  return (
    <>
      <Home />
      <VideoSection/>
      <GraniteStory/>
      <TriveniProcessSection/>
      <TriveniTestimonialSection/>
      {/* <OverlapSection>
        <Home />
      </OverlapSection>

      <OverlapSection>
        <VideoSection />
      </OverlapSection>

      <OverlapSection>
        <GraniteStory />
      </OverlapSection>

      <OverlapSection>
        <TriveniProcessSection />
      </OverlapSection>

      <OverlapSection>
        <TriveniTestimonialSection />
      </OverlapSection> */}

    </>
  );
};

export default App;
