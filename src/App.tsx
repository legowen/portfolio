import React from "react";
import { useState, useRef, useEffect } from "react";

// Top Component
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

// Bottom Component
import FullMenu from "./components/FullMenu";

function App() {
  // Menu useState (Header, FullMenu)
  const [fullMenustate, setFullMenuState] = useState<boolean>(false);

  // Scroll useRef (About, Skill, Project)
  const scrollRef = useRef<HTMLDivElement[]>([]);

  // Scroll (Track About, Skill, Project and add classes)
  useEffect(() => {
    const observer = new IntersectionObserver((e) => {
      e.forEach((item) => {
        if (item.isIntersecting) {
          item.target.classList.add("active");
        } else {
          item.target.classList.remove("active");
        }
      });
    });

    scrollRef.current.forEach((item) => {
      observer.observe(item);
    });
  }, [scrollRef]);

  return (
    <div className="App">
      <Header setFullMenuState={setFullMenuState} />
      <Home />
      <About scrollRef={scrollRef} />
      <Skill scrollRef={scrollRef} />
      <Project scrollRef={scrollRef} />
      <Resume scrollRef={scrollRef} />
      <Footer />

      <FullMenu
        fullMenustate={fullMenustate}
        setFullMenuState={setFullMenuState}
      />
    </div>
  );
}

export default App;