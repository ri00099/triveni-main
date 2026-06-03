import React from 'react';
import './VideoSection.css';
import vedioTriveni from "../assets/vedioGranite.mp4"

const VideoSection = () => {
  return (
    <section className="video-section">
      {/* Background Video */}
      <video 
        className="video-bg" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={vedioTriveni} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay to ensure text contrast */}
      <div className="video-overlay"></div>

      {/* Hero Content */}
     <div className="video-content">
  <span className="subtitle">Premium Granite, Marble & Designer Tiles</span>

  <h1 className="title">
    Crafted Surfaces for Exceptional Spaces
  </h1>

  <p className="description">
    Discover premium granite, marble, and luxury tiles designed to elevate
    homes, commercial spaces, and architectural projects with timeless beauty
    and lasting durability.
  </p>

  <div className="cta-container">
    <button className="btn btn-primary">Explore Collection</button>
    <button className="btn btn-secondary">View Catalogue</button>
  </div>
</div>
    </section>
  );
};

export default VideoSection;