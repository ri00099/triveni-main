import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";
import logo from "../assets/logoTriveni.png";
import backImg from "../assets/back.jpg";
import houseImg from "../assets/house.webp";
import cloudImg from "../assets/cloud.png";
import smokeImg from "../assets/smoke.png";

gsap.registerPlugin(ScrollTrigger);

const skyImg =
  "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&w=1920&q=80";

export default function Home() {
  const containerRef = useRef(null);
  const heroRef      = useRef(null);
  const backdropRef  = useRef(null);
  const houseRef     = useRef(null);
  const titleRef     = useRef(null);
  const subtitleRef  = useRef(null);
  const ctaRef       = useRef(null);
  const maskRef      = useRef(null);
  const whiteOverlay = useRef(null);
  const discoverRef  = useRef(null);

  const cl1 = useRef(null);
  const cl2 = useRef(null);
  const cl3 = useRef(null);
  const cl4 = useRef(null);

  const lT  = useRef(null);
  const lR  = useRef(null);
  const lI1 = useRef(null);
  const lV  = useRef(null);
  const lE  = useRef(null);
  const lN  = useRef(null);
  const lI2 = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    ScrollTrigger.normalizeScroll(true);

    const ctx = gsap.context(() => {
      const allLetters = [lT.current, lR.current, lI1.current, lV.current, lE.current, lN.current, lI2.current];
      const allClouds  = [cl1.current, cl2.current, cl3.current, cl4.current];

      gsap.to(cl1.current, { x:  30, duration: 12, ease: "sine.inOut", repeat: -1, yoyo: true });
      gsap.to(cl2.current, { x: -35, duration: 15, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.5 });
      gsap.to(cl3.current, { x:  25, duration: 18, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 0.8 });
      gsap.to(cl4.current, { x: -20, duration: 11, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 2.5 });

      gsap.set(backdropRef.current,  { autoAlpha: 1, scale: 1, y: 0 });
      gsap.set(houseRef.current,     { xPercent: -50, y: "42vh", scale: 1, autoAlpha: 1 });
      gsap.set(titleRef.current,     { y: 0, autoAlpha: 1 });
      gsap.set(subtitleRef.current,  { y: 0, autoAlpha: 1 });
      gsap.set(ctaRef.current,       { y: 0, autoAlpha: 1 });
      gsap.set(maskRef.current,      { autoAlpha: 0 });
      gsap.set(allLetters,           { autoAlpha: 0, y: 60 });
      gsap.set(allClouds,            { autoAlpha: 0 });
      gsap.set(whiteOverlay.current, { autoAlpha: 0 });
      gsap.set(discoverRef.current,  { y: "100vh", autoAlpha: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start:   "top top",
          end:     "+=500%",
          pin:     true,
          scrub:   2,
          anticipatePin: 1,
        },
        defaults: { ease: "none" },
      });

      tl
        .to(titleRef.current,    { y: "38vh", autoAlpha: 0, duration: 2.0, ease: "power1.in" }, 0)
        .to(subtitleRef.current, { y: "46vh", autoAlpha: 0, duration: 2.0, ease: "power1.in" }, 0.12)
        .to(ctaRef.current,      { y: "54vh", autoAlpha: 0, duration: 2.0, ease: "power1.in" }, 0.24)
        .to(houseRef.current,    { y: "-6vh", scale: 1.15, duration: 4.5, ease: "power1.inOut" }, 0)
        .to(backdropRef.current, { scale: 1.08, y: "-6vh", duration: 4.5 }, 0)

        .to(cl1.current, { autoAlpha: 0.9, duration: 1.4, ease: "power1.out" }, 1.6)
        .to(cl2.current, { autoAlpha: 0.9, duration: 1.4, ease: "power1.out" }, 1.75)
        .to(cl3.current, { autoAlpha: 0.7, duration: 1.4, ease: "power1.out" }, 1.9)
        .to(cl4.current, { autoAlpha: 0.7, duration: 1.4, ease: "power1.out" }, 2.05)

        .to(whiteOverlay.current, { autoAlpha: 0.88, duration: 2.5, ease: "power1.inOut" }, 1.8)

        .to(maskRef.current, { autoAlpha: 1, duration: 0.35 }, 3.6)
        .to(lT.current,  { autoAlpha: 1, y: 0, duration: 0.55, ease: "back.out(1.3)" }, 3.75)
        .to(lR.current,  { autoAlpha: 1, y: 0, duration: 0.55, ease: "back.out(1.3)" }, 3.93)
        .to(lI1.current, { autoAlpha: 1, y: 0, duration: 0.55, ease: "back.out(1.3)" }, 4.10)
        .to(lV.current,  { autoAlpha: 1, y: 0, duration: 0.55, ease: "back.out(1.3)" }, 4.26)
        .to(lE.current,  { autoAlpha: 1, y: 0, duration: 0.55, ease: "back.out(1.3)" }, 4.41)
        .to(lN.current,  { autoAlpha: 1, y: 0, duration: 0.55, ease: "back.out(1.3)" }, 4.55)
        .to(lI2.current, { autoAlpha: 1, y: 0, duration: 0.55, ease: "back.out(1.3)" }, 4.68)

        .to(maskRef.current,      { autoAlpha: 0, duration: 0.9 },                         5.8)
        .to(allClouds,            { autoAlpha: 0, duration: 0.9 },                         5.9)
        .to(whiteOverlay.current, { autoAlpha: 0, duration: 0.8 },                         5.8)
        .to(houseRef.current,     { y: "-38vh", scale: 1.45, autoAlpha: 0, duration: 1.2 }, 5.8)
        .to(backdropRef.current,  { autoAlpha: 0, duration: 1.0 },                         5.8)
        .to(discoverRef.current,  { y: "0vh", autoAlpha: 1, duration: 2.0, ease: "power2.out" }, 6.2);

    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.normalizeScroll(false);
    };
  }, []);

  return (
    <main ref={containerRef} className="page-home">

      <header className="site-header">
        <div className="header-inner">
          <div className="logo">
            <img src={logo} alt="Triveni logo" className="logo-img" />
          </div>
          <nav className="nav-links">
            <a href="#search">Search</a>
            <a href="#agents">Agents</a>
            <a href="#join">Join</a>
            <span className="nav-dropdown">Paperwork <span className="chevron">▾</span></span>
            <span className="nav-dropdown">Resources <span className="chevron">▾</span></span>
            <a href="#about">About</a>
          </nav>
          <button className="btn-signin">Sign In</button>
        </div>
      </header>

      <section ref={heroRef} className="hero">

        {/* Layer 1 — Sky */}
        <div className="sky-layer">
          <img src={skyImg} alt="" className="sky-image" />
        </div>

        {/* Layer 2 — Backdrop */}
        <div ref={backdropRef} className="backdrop">
          <img src={backImg} alt="" className="backdrop-image" />
        </div>

        {/* Layer 3 — Building */}
        <div ref={houseRef} className="house-wrapper">
          <img src={houseImg} alt="Triveni building" className="house" />
        </div>

        {/* Layer 4 — Bottom clouds */}
        <div className="cloud-cover-stage">
          <img ref={cl1} src={smokeImg} alt="" className="cloud-bottom cb1" />
          <img ref={cl2} src={smokeImg} alt="" className="cloud-bottom cb2" />
          <img ref={cl3} src={cloudImg} alt="" className="cloud-bottom cb3" />
          <img ref={cl4} src={cloudImg} alt="" className="cloud-bottom cb4" />
        </div>

        {/* Layer 5 — White fade overlay */}
        <div ref={whiteOverlay} className="white-overlay" />

        {/* Layer 6 — Bottom vignette */}
        <div className="hero-overlay" />

        {/* Layer 7 — Hero copy */}
        <div className="hero-content">
          <h1 ref={titleRef} className="main-title">Find What Moves You</h1>
          <p ref={subtitleRef} className="subtitle">
            Expert agents. Real guidance.
            <span> A clear path to find what's next.</span>
          </p>
          <div ref={ctaRef} className="cta-wrap">
            <button className="hero-btn">
              Find Properties <span className="arrow">→</span>
            </button>
          </div>
        </div>

        {/* Layer 8 — TRIVENI letters */}
        <div ref={maskRef} className="hero-mask-layer">
          <div className="find-word">
            <span ref={lT}  className="find-letter">T</span>
            <span ref={lR}  className="find-letter">R</span>
            <span ref={lI1} className="find-letter">I</span>
            <span ref={lV}  className="find-letter">V</span>
            <span ref={lE}  className="find-letter">E</span>
            <span ref={lN}  className="find-letter">N</span>
            <span ref={lI2} className="find-letter">I</span>
          </div>
          <p className="find-sub">
            <span className="find-sub-the">The</span> Granite &amp; Tiles
          </p>
        </div>

        {/* Layer 9 — Discover */}
        <div ref={discoverRef} className="discover-overlay-section">

          {/* Cloud background layers */}
          <div className="discover-sky"></div>
          <div className="discover-clouds">
            <div className="dc dc1"></div>
            <div className="dc dc2"></div>
            <div className="dc dc3"></div>
            <div className="dc dc4"></div>
            <div className="dc dc5"></div>
            <div className="dc dc6"></div>
            <div className="dc dc7"></div>
            <div className="dc dc8"></div>
            <div className="dc dc9"></div>
            <div className="dc dc10"></div>
            <div className="dc dc11"></div>
          </div>

          <div className="discover-container">
            <div className="discover-left">
              <span className="discover-label">Why Triveni</span>
            </div>
            <div className="discover-right">
              <h2 className="discover-title">
                Transform ordinary spaces into timeless masterpieces.
                <span className="gray-text"> Premium granite, luxury tiles, and expert craftsmanship that
                bring elegance, durability, and value to every residential and commercial project.</span>
              </h2>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}