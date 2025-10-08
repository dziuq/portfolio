import React from "react";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import Hero from "@sections/Hero";
import About from "@sections/About";
import Projects from "@sections/Projects";
import Experience from "@sections/Experience";
import Contact from "@sections/Contact";
import Skills from "@sections/Skills";

const App: React.FC = () => {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
