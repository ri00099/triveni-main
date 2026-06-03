import React, { useEffect, useRef, useState } from 'react';
import './ChevronOverlaySection.css';

const ChevronOverlaySection = () => {
  const sectionRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Once it animates in, we can stop observing
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.15 // Triggers when 15% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Add the 'animate-in' class dynamically once scrolled into view
  const animationClass = isIntersecting ? 'animate-in' : '';

  return (
    <section 
      ref={sectionRef} 
      className={`overlay-story-section ${animationClass}`}
    >
      {/* Top Typography Element */}
      <h2 className="overlay-heading">
        This isn’t just <span className="text-gray">about granite and marble.</span>
      </h2>

      {/* The Central Chevron Grid */}
      <div className="overlay-chevron-track">
        {/* Segment 1: Left End-cap */}
        <div className="overlay-chevron-segment first-segment" style={{ '--index': 0 }}>
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80" 
            alt="Professional standing outside building" 
          />
        </div>

        {/* Segment 2: Middle Chevron */}
        <div className="overlay-chevron-segment" style={{ '--index': 1 }}>
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" 
            alt="Modern luxury bedroom interior" 
          />
        </div>

        {/* Segment 3: Middle Chevron */}
        <div className="overlay-chevron-segment" style={{ '--index': 2 }}>
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" 
            alt="Modern dining room setup" 
          />
        </div>

        {/* Segment 4: Right End-cap */}
        <div className="overlay-chevron-segment last-segment" style={{ '--index': 3 }}>
          <img 
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80" 
            alt="Man looking towards the right" 
          />
        </div>
      </div>

      {/* Bottom Typography Element */}
      <div className="overlay-footer">
        <p className="footer-bold-text">It’s about artistry. Detail. Living with nature.</p>
        <p className="footer-light-text">
          You’re not just selecting a surface. <span className="text-gray">You’re defining your sanctuary. That’s what we help you find.</span>
        </p>
      </div>
    </section>
  );
};

export default ChevronOverlaySection;