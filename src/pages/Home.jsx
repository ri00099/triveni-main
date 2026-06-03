import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";
import logo from "../assets/logoTriveni.png"

// Assets
import backImg from "../assets/back.jpg";
import houseImg from "../assets/buildingTriveni.png";
import smokeImg from "../assets/smoke.png";

const skyImg =
  "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&w=1920&q=80";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const backdropRef = useRef(null);
  const houseRef = useRef(null);
  const smokeRef = useRef(null);

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const maskRef = useRef(null);
  const discoverRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=400%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
        defaults: { ease: "none" },
      });

      // ==========================================================================
      // STABLE INITIAL ALIGNMENT STATES
      // ==========================================================================
      gsap.set(backdropRef.current, { autoAlpha: 1, scale: 1, y: 0 });
      gsap.set(houseRef.current, { y: "0px", scale: 1, autoAlpha: 1 });
      gsap.set(smokeRef.current, { autoAlpha: 0.5 });

      gsap.set(titleRef.current, { y: 0, autoAlpha: 1 });
      gsap.set(subtitleRef.current, { y: 0, autoAlpha: 1 });
      gsap.set(ctaRef.current, { y: 0, autoAlpha: 1 });

      gsap.set(maskRef.current, { autoAlpha: 0, scale: 1 });
      gsap.set(".mask-text-fill", {
        fill: "url(#hero-pattern)",
        stroke: "transparent",
        strokeWidth: 0,
      });
      gsap.set(discoverRef.current, { y: "100vh", autoAlpha: 0 });

      // ==========================================================================
      // NARRATIVE SCROLL TIMELINE
      // ==========================================================================
      masterTl
        // Scene 4 -> 5: Outbound Core Content Exit
        // .to([titleRef.current, subtitleRef.current, ctaRef.current], {
        //   autoAlpha: 0,
        //   y: 80,
        //   stagger: 0.1,
        //   duration: 1.5
        // }, 0)

        .to(
          [titleRef.current, subtitleRef.current, ctaRef.current],
          {
            autoAlpha: 0,
            y: 300,
            stagger: 0.15,
            duration: 2,
          },
          0,
        )

        // Scene 5: Reveal Filled 'FIND' Graphic Clip Mask
        .to(
          maskRef.current,
          {
            autoAlpha: 1,
            duration: 1.5,
          },
          0.8,
        )

        // Scene 6: Structural Parallax Morph & Monolithic Outlining
        .to(
          ".mask-text-fill",
          {
            fill: "transparent",
            stroke: "rgba(255, 255, 255, 0.9)",
            strokeWidth: "2px",
            duration: 2,
          },
          2,
        )
        .to(
          houseRef.current,
          {
            scale: 1.06,
            y: "-3vh",
            duration: 2,
          },
          2,
        )
        .to(
          backdropRef.current,
          {
            scale: 1.04,
            y: "-1vh",
            duration: 2,
          },
          2,
        )

        // Scene 7: Smooth Translation to Next Section Panel
        .to(maskRef.current, { autoAlpha: 0, y: -80, duration: 1.5 }, 4)
        .to(houseRef.current, { autoAlpha: 0, y: -120, duration: 1.5 }, 4)
        .to(backdropRef.current, { autoAlpha: 0, y: -60, duration: 1.5 }, 4)
        .to(discoverRef.current, { y: "0vh", autoAlpha: 1, duration: 2 }, 4);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="page-home">
      {/* Structural Header Fixed Element */}
      <header className="site-header">
        <div className="header-inner">
          <div className="logo">
  <img src={logo} alt="Company Logo" className="logo-img" />
</div>
          <nav className="nav-links">
            <a href="#search">Search</a>
            <a href="#agents">Agents</a>
            <a href="#join">Join</a>
            <span className="nav-dropdown">
              Paperwork <span className="chevron">▾</span>
            </span>
            <span className="nav-dropdown">
              Resources <span className="chevron">▾</span>
            </span>
            <a href="#about">About</a>
          </nav>
          <button className="btn-signin">Sign In</button>
        </div>
      </header>

      <section ref={heroRef} className="hero">
        {/* Layer 1: Sky Element */}
        <div className="sky-layer">
          <img src={skyImg} alt="Ambient Sky Map" className="sky-image" />
        </div>

        {/* Layer 2: Parallax Scenery Backdrop Container */}
        <div ref={backdropRef} className="backdrop">
          <img
            src={backImg}
            alt="City Backdrop Landscape"
            className="backdrop-image"
          />
        </div>

        {/* Layer 3: Main Architectural Real Estate Element */}
        <div ref={houseRef} className="house-wrapper">
          <img
            src={houseImg}
            alt="Modern Architectural Structure"
            className="house"
          />
        </div>

        {/* Layer 4: Environmental Cloud FX Overlay */}
        <div ref={smokeRef} className="smoke-wrapper">
          <img src={smokeImg} alt="" className="smoke" />
        </div>

        <div className="hero-overlay" />

        {/* Layer 5: Dynamic Sequenced Narrative Content */}
        <div className="hero-content">
          <h1 ref={titleRef} className="main-title">
            Find What Moves You
          </h1>
          <p ref={subtitleRef} className="subtitle">
            Expert agents. Real guidance.
            <span> A clear path to find what&apos;s next.</span>
          </p>
          <div ref={ctaRef} className="cta-wrap">
            <button className="hero-btn">
              Find Properties
              <span className="arrow">→</span>
            </button>
          </div>
        </div>

        {/* Layer 6: Text Clipping Layer Vector View */}
        <div ref={maskRef} className="hero-mask-layer">
          <svg
            className="mask-svg"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="hero-pattern"
                patternUnits="userSpaceOnUse"
                width="1920"
                height="1080"
              >
                <image
                  href={houseImg}
                  x="260"
                  y="240"
                  width="1400"
                  height="840"
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
            </defs>
            <text
              x="50%"
              y="46%"
              textAnchor="middle"
              className="mask-text-fill"
            >
              {/* FIND */}
            </text>
            <text x="50%" y="68%" textAnchor="middle" className="mask-text-sub">
              Triveni - The Granite and Tiles
            </text>
          </svg>
        </div>

        {/* Layer 7: Next Section Layout Stage */}
        <div ref={discoverRef} className="discover-overlay-section">
          <div className="discover-container">
            <div className="discover-left">
              <span className="discover-label">Why FIND</span>
            </div>
            <div className="discover-right">
              <h2 className="discover-title">
                Transform ordinary spaces into timeless masterpieces.
                <span className="gray-text">
                  Premium granite, luxury tiles, and expert craftsmanship that
                  bring elegance, durability, and value to every residential and
                  commercial project.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
