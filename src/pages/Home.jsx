// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Home.css";
// import logo from "../assets/logoTriveni.png";

// import backImg from "../assets/back.jpg";
// import houseImg from "../assets/house.webp";
// import cloudImg from "../assets/cloud.png";
// import smokeImg from "../assets/smoke.png";

// gsap.registerPlugin(ScrollTrigger);

// const skyImg =
//   "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&w=1920&q=80";

// export default function Home() {
//   const containerRef = useRef(null);
//   const heroRef      = useRef(null);
//   const backdropRef  = useRef(null);
//   const houseRef     = useRef(null);
//   const titleRef     = useRef(null);
//   const subtitleRef  = useRef(null);
//   const ctaRef       = useRef(null);
//   const maskRef      = useRef(null);
//   const discoverRef  = useRef(null);

//   // cloud refs
//   const cl1 = useRef(null);
//   const cl2 = useRef(null);
//   const cl3 = useRef(null);
//   const cl4 = useRef(null);

//   // letter refs for FIND
//   const lF = useRef(null);
//   const lI = useRef(null);
//   const lN = useRef(null);
//   const lD = useRef(null);

//   useEffect(() => {
//     if (!heroRef.current) return;

//     const ctx = gsap.context(() => {

//       // ── Gentle idle cloud drift ──────────────────────────────────────────
//       gsap.to(cl1.current, { x: 55,  y: -10, duration: 14, ease: "sine.inOut", repeat: -1, yoyo: true });
//       gsap.to(cl2.current, { x: -60, y: -8,  duration: 17, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 2 });
//       gsap.to(cl3.current, { x: 40,  y: -12, duration: 19, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1 });
//       gsap.to(cl4.current, { x: -35, y: -6,  duration: 13, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 3 });

//       // ── Initial states ───────────────────────────────────────────────────
//       gsap.set(backdropRef.current,  { autoAlpha: 1, scale: 1, y: 0 });
//       gsap.set(houseRef.current,     { y: "0px", autoAlpha: 1 });
//       gsap.set(titleRef.current,     { y: 0, autoAlpha: 1 });
//       gsap.set(subtitleRef.current,  { y: 0, autoAlpha: 1 });
//       gsap.set(ctaRef.current,       { y: 0, autoAlpha: 1 });
//       gsap.set(maskRef.current,      { autoAlpha: 0 });

//       // Letters start invisible & shifted down
//       gsap.set([lF.current, lI.current, lN.current, lD.current], {
//         autoAlpha: 0,
//         y: 60,
//       });

//       // Cloud cover starts hidden & scaled small
//       gsap.set([cl1.current, cl2.current, cl3.current, cl4.current], {
//         autoAlpha: 0,
//         scale: 0.8,
//       });

//       gsap.set(discoverRef.current,  { y: "100vh", autoAlpha: 0 });

//       // ── Master scroll timeline ───────────────────────────────────────────
//       const masterTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: "top top",
//           end: "+=500%",
//           pin: true,
//           scrub: 1.2,
//           anticipatePin: 1,
//         },
//         defaults: { ease: "none" },
//       });

//       // ── PHASE 1 (0–2): Hero text fades out, building rises ──────────────
//       masterTl
//         .to(titleRef.current,    { autoAlpha: 0, y: -80, duration: 1.5 }, 0)
//         .to(subtitleRef.current, { autoAlpha: 0, y: -60, duration: 1.5 }, 0.1)
//         .to(ctaRef.current,      { autoAlpha: 0, y: -40, duration: 1.5 }, 0.2)
//         .to(houseRef.current,    { y: "-32vh", duration: 3 }, 0)
//         .to(backdropRef.current, { scale: 1.08, y: "-8vh", duration: 3 }, 0)

//       // ── PHASE 2 (2–4): FIND letters appear word-by-word ─────────────────
//         .to(maskRef.current, { autoAlpha: 1, duration: 0.5 }, 2)
//         .to(lF.current, { autoAlpha: 1, y: 0, duration: 0.6, ease: "back.out(1.4)" }, 2.2)
//         .to(lI.current, { autoAlpha: 1, y: 0, duration: 0.6, ease: "back.out(1.4)" }, 2.6)
//         .to(lN.current, { autoAlpha: 1, y: 0, duration: 0.6, ease: "back.out(1.4)" }, 3.0)
//         .to(lD.current, { autoAlpha: 1, y: 0, duration: 0.6, ease: "back.out(1.4)" }, 3.4)

//       // ── PHASE 3 (4–6): Clouds explode to cover full page ────────────────
//         .to([cl1.current, cl2.current, cl3.current, cl4.current], {
//           autoAlpha: 1,
//           scale: 1,
//           duration: 0.8,
//           stagger: 0.15,
//         }, 4.2)
//         .to(cl1.current, { width: "160vw", height: "160vh", duration: 2, ease: "power2.in" }, 4.5)
//         .to(cl2.current, { width: "150vw", height: "150vh", duration: 2, ease: "power2.in" }, 4.6)
//         .to(cl3.current, { width: "140vw", height: "140vh", duration: 2, ease: "power2.in" }, 4.7)
//         .to(cl4.current, { width: "130vw", height: "130vh", duration: 2, ease: "power2.in" }, 4.8)

//       // ── PHASE 4 (6–8): Everything exits, discover slides in ─────────────
//         .to(maskRef.current,     { autoAlpha: 0, duration: 1 }, 6)
//         .to(houseRef.current,    { autoAlpha: 0, y: "-65vh", duration: 1.5 }, 6)
//         .to(backdropRef.current, { autoAlpha: 0, duration: 1.5 }, 6)
//         .to([cl1.current, cl2.current, cl3.current, cl4.current],
//           { autoAlpha: 0, duration: 1 }, 6.5)
//         .to(discoverRef.current, { y: "0vh", autoAlpha: 1, duration: 2 }, 6.5);

//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <main ref={containerRef} className="page-home">

//       <header className="site-header">
//         <div className="header-inner">
//           <div className="logo">
//             <img src={logo} alt="Triveni logo" className="logo-img" />
//           </div>
//           <nav className="nav-links">
//             <a href="#search">Search</a>
//             <a href="#agents">Agents</a>
//             <a href="#join">Join</a>
//             <span className="nav-dropdown">Paperwork <span className="chevron">▾</span></span>
//             <span className="nav-dropdown">Resources <span className="chevron">▾</span></span>
//             <a href="#about">About</a>
//           </nav>
//           <button className="btn-signin">Sign In</button>
//         </div>
//       </header>

//       <section ref={heroRef} className="hero">

//         {/* 1 — Sky */}
//         <div className="sky-layer">
//           <img src={skyImg} alt="" className="sky-image" />
//         </div>

//         {/* 2 — Backdrop */}
//         <div ref={backdropRef} className="backdrop">
//           <img src={backImg} alt="" className="backdrop-image" />
//         </div>

//         {/* 3 — House */}
//         <div ref={houseRef} className="house-wrapper">
//           <img src={houseImg} alt="Triveni building" className="house" />
//         </div>

//         {/* 4 — Cloud cover layer — expands to fill screen on scroll */}
//         <div className="cloud-cover-stage">
//           <img ref={cl1} src={smokeImg} alt="" className="cloud-cover cc1" />
//           <img ref={cl2} src={smokeImg} alt="" className="cloud-cover cc2" />
//           <img ref={cl3} src={cloudImg} alt="" className="cloud-cover cc3" />
//           <img ref={cl4} src={cloudImg} alt="" className="cloud-cover cc4" />
//         </div>

//         {/* Overlay */}
//         <div className="hero-overlay" />

//         {/* 5 — Hero Content */}
//         <div className="hero-content">
//           <h1 ref={titleRef} className="main-title">Find What Moves You</h1>
//           <p ref={subtitleRef} className="subtitle">
//             Expert agents. Real guidance.
//             <span> A clear path to find what&apos;s next.</span>
//           </p>
//           <div ref={ctaRef} className="cta-wrap">
//             <button className="hero-btn">
//               Find Properties <span className="arrow">→</span>
//             </button>
//           </div>
//         </div>

//         {/* 6 — FIND letter-by-letter mask */}
//         <div ref={maskRef} className="hero-mask-layer">
//           <div className="find-word">
//             <span ref={lF} className="find-letter"> T</span>
//             <span ref={lI} className="find-letter">R</span>
//             <span ref={lN} className="find-letter">I</span>
//             <span ref={lD} className="find-letter">V</span>
//             <span ref={lD} className="find-letter">E</span>
//             <span ref={lD} className="find-letter">N</span>
//             <span ref={lD} className="find-letter">I</span>
//           </div>
//           <p className="find-sub">Triveni — The Granite and Tiles</p>
//         </div>

//         {/* 7 — Discover */}
//         <div ref={discoverRef} className="discover-overlay-section">
//           <div className="discover-container">
//             <div className="discover-left">
//               <span className="discover-label">Why FIND</span>
//             </div>
//             <div className="discover-right">
//               <h2 className="discover-title">
//                 Transform ordinary spaces into timeless masterpieces.
//                 <span className="gray-text"> Premium granite, luxury tiles, and expert craftsmanship that
//                 bring elegance, durability, and value to every residential and commercial project.</span>
//               </h2>
//             </div>
//           </div>
//         </div>

//       </section>
//     </main>
//   );
// }


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
  const discoverRef  = useRef(null);

  // cloud refs
  const cl1 = useRef(null);
  const cl2 = useRef(null);
  const cl3 = useRef(null);
  const cl4 = useRef(null);

  // 7 individual letter refs for T-R-I-V-E-N-I
  const lT = useRef(null);
  const lR = useRef(null);
  const lI = useRef(null);
  const lV = useRef(null);
  const lE = useRef(null);
  const lN = useRef(null);
  const lI2 = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {

      // ── Gentle idle cloud drift ──────────────────────────────────────────
      gsap.to(cl1.current, { x: 55,  y: -10, duration: 14, ease: "sine.inOut", repeat: -1, yoyo: true });
      gsap.to(cl2.current, { x: -60, y: -8,  duration: 17, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 2 });
      gsap.to(cl3.current, { x: 40,  y: -12, duration: 19, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1 });
      gsap.to(cl4.current, { x: -35, y: -6,  duration: 13, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 3 });

      const allLetters = [lT.current, lR.current, lI.current, lV.current, lE.current, lN.current, lI2.current];

      // ── Initial states ───────────────────────────────────────────────────
      gsap.set(backdropRef.current,  { autoAlpha: 1, scale: 1, y: 0 });
      gsap.set(houseRef.current,     { y: "0px", autoAlpha: 1 });
      gsap.set(titleRef.current,     { y: 0, autoAlpha: 1 });
      gsap.set(subtitleRef.current,  { y: 0, autoAlpha: 1 });
      gsap.set(ctaRef.current,       { y: 0, autoAlpha: 1 });
      gsap.set(maskRef.current,      { autoAlpha: 0 });
      gsap.set(allLetters,           { autoAlpha: 0, y: 80 });
      gsap.set([cl1.current, cl2.current, cl3.current, cl4.current], {
        autoAlpha: 0,
        scale: 0.8,
      });
      gsap.set(discoverRef.current,  { y: "100vh", autoAlpha: 0 });

      // ── Master scroll timeline ───────────────────────────────────────────
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=500%",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
        defaults: { ease: "none" },
      });

      // ── PHASE 1 (0–2): Hero text fades out, building rises ──────────────
      masterTl
        .to(titleRef.current,    { autoAlpha: 0, y: -80,  duration: 1.5 }, 0)
        .to(subtitleRef.current, { autoAlpha: 0, y: -60,  duration: 1.5 }, 0.1)
        .to(ctaRef.current,      { autoAlpha: 0, y: -40,  duration: 1.5 }, 0.2)
        .to(houseRef.current,    { y: "-30vh",   duration: 3 }, 0)
        .to(backdropRef.current, { scale: 1.08,  y: "-8vh", duration: 3 }, 0)

      // ── PHASE 2 (2–4): TRIVENI letters appear one by one ────────────────
        .to(maskRef.current, { autoAlpha: 1, duration: 0.4 }, 2)
        .to(lT.current,  { autoAlpha: 1, y: 0, duration: 0.5, ease: "back.out(1.6)" }, 2.1)
        .to(lR.current,  { autoAlpha: 1, y: 0, duration: 0.5, ease: "back.out(1.6)" }, 2.4)
        .to(lI.current,  { autoAlpha: 1, y: 0, duration: 0.5, ease: "back.out(1.6)" }, 2.7)
        .to(lV.current,  { autoAlpha: 1, y: 0, duration: 0.5, ease: "back.out(1.6)" }, 3.0)
        .to(lE.current,  { autoAlpha: 1, y: 0, duration: 0.5, ease: "back.out(1.6)" }, 3.3)
        .to(lN.current,  { autoAlpha: 1, y: 0, duration: 0.5, ease: "back.out(1.6)" }, 3.6)
        .to(lI2.current, { autoAlpha: 1, y: 0, duration: 0.5, ease: "back.out(1.6)" }, 3.9)

      // ── PHASE 3 (4.5–6.5): Clouds explode to cover full page ────────────
        .to([cl1.current, cl2.current, cl3.current, cl4.current], {
          autoAlpha: 1, scale: 1, duration: 0.6, stagger: 0.12,
        }, 4.5)
        .to(cl1.current, { width: "170vw", height: "170vh", duration: 2, ease: "power2.in" }, 4.8)
        .to(cl2.current, { width: "160vw", height: "160vh", duration: 2, ease: "power2.in" }, 4.9)
        .to(cl3.current, { width: "150vw", height: "150vh", duration: 2, ease: "power2.in" }, 5.0)
        .to(cl4.current, { width: "140vw", height: "140vh", duration: 2, ease: "power2.in" }, 5.1)

      // ── PHASE 4 (6.5–8): Everything exits, discover slides in ────────────
        .to(maskRef.current,     { autoAlpha: 0, duration: 1 }, 6.5)
        .to(houseRef.current,    { autoAlpha: 0, y: "-65vh", duration: 1.5 }, 6.5)
        .to(backdropRef.current, { autoAlpha: 0, duration: 1.5 }, 6.5)
        .to([cl1.current, cl2.current, cl3.current, cl4.current],
          { autoAlpha: 0, duration: 1 }, 7)
        .to(discoverRef.current, { y: "0vh", autoAlpha: 1, duration: 2 }, 7);

    }, containerRef);

    return () => ctx.revert();
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

        {/* 1 — Sky */}
        <div className="sky-layer">
          <img src={skyImg} alt="" className="sky-image" />
        </div>

        {/* 2 — Backdrop */}
        <div ref={backdropRef} className="backdrop">
          <img src={backImg} alt="" className="backdrop-image" />
        </div>

        {/* 3 — House */}
        <div ref={houseRef} className="house-wrapper">
          <img src={houseImg} alt="Triveni building" className="house" />
        </div>

        {/* 4 — Cloud cover layer */}
        <div className="cloud-cover-stage">
          <img ref={cl1} src={smokeImg} alt="" className="cloud-cover cc1" />
          <img ref={cl2} src={smokeImg} alt="" className="cloud-cover cc2" />
          <img ref={cl3} src={cloudImg} alt="" className="cloud-cover cc3" />
          <img ref={cl4} src={cloudImg} alt="" className="cloud-cover cc4" />
        </div>

        {/* Overlay */}
        <div className="hero-overlay" />

        {/* 5 — Hero Content */}
        <div className="hero-content">
          <h1 ref={titleRef} className="main-title">Find What Moves You</h1>
          <p ref={subtitleRef} className="subtitle">
            Expert agents. Real guidance.
            <span> A clear path to find what&apos;s next.</span>
          </p>
          <div ref={ctaRef} className="cta-wrap">
            <button className="hero-btn">
              Find Properties <span className="arrow">→</span>
            </button>
          </div>
        </div>

        {/* 6 — TRIVENI letter-by-letter */}
        <div ref={maskRef} className="hero-mask-layer">
          <div className="find-word">
            <span ref={lT}  className="find-letter">T</span>
            <span ref={lR}  className="find-letter">R</span>
            <span ref={lI}  className="find-letter">I</span>
            <span ref={lV}  className="find-letter">V</span>
            <span ref={lE}  className="find-letter">E</span>
            <span ref={lN}  className="find-letter">N</span>
            <span ref={lI2} className="find-letter">I</span>
          </div>
          <p className="find-sub">
            <span className="find-sub-the">The</span>
            {" "}Granite &amp; Tiles
          </p>
        </div>

        {/* 7 — Discover */}
        <div ref={discoverRef} className="discover-overlay-section">
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