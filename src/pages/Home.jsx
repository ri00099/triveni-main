import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";
import logo        from "../assets/logoTriveni.png";
import backImg     from "../assets/back.jpg";
import houseImg    from "../assets/house.webp";
import cloudImg    from "../assets/cloud.png";
import smokeImg    from "../assets/smoke.png";

gsap.registerPlugin(ScrollTrigger);

const skyImg =
  "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&w=1920&q=80";

const LETTERS = ["T","R","I","V","E","N","I"];

export default function Home() {
  const containerRef = useRef(null);
  const heroRef      = useRef(null);
  const backdropRef  = useRef(null);
  const houseRef     = useRef(null);
  const titleRef     = useRef(null);
  const subtitleRef  = useRef(null);
  const ctaRef       = useRef(null);

  const maskOutlineRef = useRef(null);
  const maskFilledRef  = useRef(null);

  const whiteOverlay = useRef(null);
  const discoverRef  = useRef(null);

  const cl1 = useRef(null);
  const cl2 = useRef(null);
  const cl3 = useRef(null);
  const cl4 = useRef(null);

  const outlineLetterRefs = useRef(LETTERS.map(() => null));
  const filledLetterRefs  = useRef(LETTERS.map(() => null));

  const subRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) ScrollTrigger.normalizeScroll(true);

    const ctx = gsap.context(() => {
      const outlineLetters = outlineLetterRefs.current;
      const filledLetters  = filledLetterRefs.current;
      const heroClouds = [cl1.current, cl2.current, cl3.current, cl4.current];

      gsap.to(cl1.current, { x:  28, duration: 12, ease: "sine.inOut", repeat: -1, yoyo: true });
      gsap.to(cl2.current, { x: -32, duration: 15, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.5 });
      gsap.to(cl3.current, { x:  22, duration: 18, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 0.8 });
      gsap.to(cl4.current, { x: -18, duration: 11, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 2.5 });

      gsap.set(backdropRef.current,   { autoAlpha: 1, scale: 1, y: 0 });
      gsap.set(houseRef.current,      { xPercent: -50, y: "30vh", scale: 0.95, autoAlpha: 1 });
      gsap.set(titleRef.current,      { y: 0, autoAlpha: 1 });
      gsap.set(subtitleRef.current,   { y: 0, autoAlpha: 1 });
      gsap.set(ctaRef.current,        { y: 0, autoAlpha: 1 });
      gsap.set(maskOutlineRef.current,{ autoAlpha: 0 });
      gsap.set(maskFilledRef.current, { autoAlpha: 0 });
      gsap.set(heroClouds,            { autoAlpha: 0 });
      gsap.set(whiteOverlay.current,  { autoAlpha: 0 });
      gsap.set(discoverRef.current,   { y: "100vh", autoAlpha: 0 });
      gsap.set(subRef.current,        { autoAlpha: 0, y: 20 });

      outlineLetters.forEach(l => gsap.set(l, { autoAlpha: 0, y: 18, scale: 0.88 }));
      filledLetters.forEach(l  => gsap.set(l, { autoAlpha: 0 }));

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start:   "top top",
          end:     "+=400%",
          pin:     true,
          scrub:   1.2,
          anticipatePin:       1,
          invalidateOnRefresh: true,
          fastScrollEnd:       true,
        },
        defaults: { ease: "none" },
      });

      // PHASE 1
      tl
        .to(titleRef.current,    { y: "30vh", autoAlpha: 0, duration: 1.8, ease: "power2.in" }, 0)
        .to(subtitleRef.current, { y: "36vh", autoAlpha: 0, duration: 1.8, ease: "power2.in" }, 0.18)
        .to(ctaRef.current,      { y: "42vh", autoAlpha: 0, duration: 1.8, ease: "power2.in" }, 0.34)
        .to(houseRef.current,    { y: "-4vh", scale: 1.12, duration: 4.2, ease: "power1.inOut" }, 0)
        .to(backdropRef.current, { scale: 1.06, y: "-3vh", duration: 4.2, ease: "power1.inOut" }, 0)

      // PHASE 2
        .to(cl1.current,          { autoAlpha: 0.85, duration: 1.2, ease: "power1.out" }, 1.8)
        .to(cl2.current,          { autoAlpha: 0.85, duration: 1.2, ease: "power1.out" }, 2.0)
        .to(cl3.current,          { autoAlpha: 0.65, duration: 1.2, ease: "power1.out" }, 2.15)
        .to(cl4.current,          { autoAlpha: 0.65, duration: 1.2, ease: "power1.out" }, 2.28)
        .to(whiteOverlay.current, { autoAlpha: 0.88, duration: 2.2, ease: "power1.inOut" }, 1.9)

      // PHASE 3A — OUTLINE
        .to(maskOutlineRef.current, { autoAlpha: 1, duration: 0.25 }, 3.4);

      const OUTLINE_START = 3.5;
      const OUTLINE_GAP   = 0.22;

      LETTERS.forEach((_, i) => {
        const t = OUTLINE_START + i * OUTLINE_GAP;
        tl.to(outlineLetters[i], {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          ease: "power3.out",
        }, t);
      });

      const outlineDone = OUTLINE_START + (LETTERS.length - 1) * OUTLINE_GAP + 0.55;

      // PHASE 3B — CROSSFADE TO FILLED
      const xfadeStart = outlineDone + 0.5;

      tl
        .to(whiteOverlay.current, { autoAlpha: 0, duration: 1.6, ease: "power2.inOut" }, xfadeStart)
        .to(cl1.current,          { autoAlpha: 0, duration: 1.2, ease: "power1.inOut" }, xfadeStart + 0.1)
        .to(cl2.current,          { autoAlpha: 0, duration: 1.2, ease: "power1.inOut" }, xfadeStart + 0.2)
        .to(cl3.current,          { autoAlpha: 0, duration: 1.2, ease: "power1.inOut" }, xfadeStart + 0.3)
        .to(cl4.current,          { autoAlpha: 0, duration: 1.2, ease: "power1.inOut" }, xfadeStart + 0.4)
        .to(maskFilledRef.current, { autoAlpha: 1, duration: 1.0, ease: "power2.inOut" }, xfadeStart + 0.2);

      LETTERS.forEach((_, i) => {
        const t = xfadeStart + 0.3 + i * 0.08;
        tl.to(outlineLetters[i], { autoAlpha: 0, duration: 0.5, ease: "power1.in"  }, t);
        tl.to(filledLetters[i],  { autoAlpha: 1, duration: 0.6, ease: "power2.out" }, t + 0.1);
      });

      const filledDone = xfadeStart + 0.3 + (LETTERS.length - 1) * 0.08 + 0.7;
      tl.to(subRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      }, filledDone + 0.1);

      // PHASE 4 — EXIT + DISCOVER
      // const exitStart = filledDone + 1.0;
      const exitStart = filledDone + 0.3;

      tl
        .to(maskOutlineRef.current, { autoAlpha: 0, duration: 0.6 },                         exitStart)
        .to(maskFilledRef.current,  { autoAlpha: 0, duration: 0.6 },                         exitStart)
        .to(houseRef.current,    { y: "-32vh", scale: 1.4, autoAlpha: 0, duration: 1.1, ease: "power1.in" }, exitStart)
        .to(backdropRef.current, { autoAlpha: 0, scale: 1.1,             duration: 0.9, ease: "power1.in" }, exitStart + 0.05)
        .to(discoverRef.current, { y: 0, autoAlpha: 1,                   duration: 1.2, ease: "power3.out" }, exitStart + 0.6);

    }, containerRef);

    return () => {
      ctx.revert();
      if (isTouch) ScrollTrigger.normalizeScroll(false);
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

        {/* Layer 4 — Hero bottom clouds */}
        <div className="cloud-cover-stage">
          <img ref={cl1} src={smokeImg} alt="" className="cloud-bottom cb1" />
          <img ref={cl2} src={smokeImg} alt="" className="cloud-bottom cb2" />
          <img ref={cl3} src={cloudImg} alt="" className="cloud-bottom cb3" />
          <img ref={cl4} src={cloudImg} alt="" className="cloud-bottom cb4" />
        </div>

        {/* Layer 5 — White mist veil */}
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

        {/* PHASE A — OUTLINE LETTERS */}
        <div ref={maskOutlineRef} className="hero-mask-layer hero-mask-outline">
          <div className="find-word">
            {LETTERS.map((char, i) => (
              <div key={i} className="letter-cell">
                <span
                  className="find-letter find-letter--outline"
                  ref={el => outlineLetterRefs.current[i] = el}
                >
                  {char}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PHASE B — BUILDING-FILLED LETTERS */}
        <div ref={maskFilledRef} className="hero-mask-layer hero-mask-filled">
          <div className="find-word">
            {LETTERS.map((char, i) => (
              <div key={i} className="letter-cell">
                <span
                  className="find-letter find-letter--filled"
                  ref={el => filledLetterRefs.current[i] = el}
                >
                  {char}
                </span>
              </div>
            ))}
          </div>

          {/* Gold shimmer tagline */}
          <p className="find-sub" ref={subRef}>
            <span className="find-sub-the">The</span> Granite &amp; Tiles
          </p>
        </div>

        {/* Layer 9 — Discover section */}
        <div ref={discoverRef} className="discover-overlay-section">

          {/* ── Big fluffy clouds above the discover content ── */}
          <div className="discover-top-clouds">
            <div className="dtc dtc1" />
            <div className="dtc dtc2" />
            <div className="dtc dtc3" />
            <div className="dtc dtc4" />
            <div className="dtc dtc5" />
            <div className="dtc dtc6" />
          </div>

          <div className="discover-sky" />

          <div className="discover-clouds">
            <div className="dc dc1" />
            <div className="dc dc2" />
            <div className="dc dc3" />
            <div className="dc dc4" />
            <div className="dc dc5" />
            <div className="dc dc6" />
            <div className="dc dc7" />
            <div className="dc dc8" />
            <div className="dc dc9" />
            <div className="dc dc10" />
            <div className="dc dc11" />
          </div>

          <div className="discover-container">
            <div className="discover-left">
              <span className="discover-label">Why Triveni</span>
            </div>
            <div className="discover-right">
              <h2 className="discover-title">
                Transform ordinary spaces into timeless masterpieces.
                <span className="gray-text">
                  {" "}Premium granite, luxury tiles, and expert craftsmanship
                  that bring elegance, durability, and value to every
                  residential and commercial project.
                </span>
              </h2>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}