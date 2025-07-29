import PageOne from "./components/pageOne";
import PageTwo from "./components/pageTwo";
import Works from "./components/works";
import "./App.css";
import "./assets/Header.css";
import React, { useRef } from "react";
import ContactMe from "./components/ContactMe";
function Section({ title, background, innerRef }) {
  return (
    <section
      ref={innerRef}
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        scrollBehavior: "smooth",
        padding: "2rem",
      }}
    >
      {title}
      {/* <div style={framework}><iframe src="https://player.vimeo.com/video/888601366?autoplay=1&loop=1&autopause=0?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Help Center Video"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> */}
      {/* <iframe title="vimeo-player" src="https://player.vimeo.com/video/888601366?h=14b3dbfca6" width="640" height="360" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   allowfullscreen></iframe> */}
    </section>

  );
}

export default function App() {
  // refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);
  // scroll handler that scrolls to a given ref
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <> <header className="main-header">
      <nav className="nav-bar">
        <ul className="nav-links">
          <li><a onClick={() => scrollToSection(worksRef)}>WORK</a></li>
        </ul>
        <ul className="nav-links">
          <li><a onClick={() => scrollToSection(aboutRef)} >ABOUT/CV</a></li>
        </ul>
        <div className="logo-title"  onClick={() => scrollToSection(homeRef)}>
          HK CINEMATOGRAPHER / PHOTOGRAPHER
          {/* <span className="csc">csc</span> */}
        </div>
        <ul className="nav-links right">
          <li><a onClick={() => scrollToSection(contactRef)}>CONTACT</a></li>
        </ul>
      </nav>

    </header>

      {/* Sections */}
      <div >
        <PageOne innerRef={homeRef} />
        <Works innerRef={worksRef} />
        <Section title="about" background="#3498db" innerRef={aboutRef} />
       
        
        <ContactMe innerRef={contactRef} />
        
      </div>

    </>
  );
}

const framework = {
  padding:"56.25% 0 0 0",
  position:"relative",
};


