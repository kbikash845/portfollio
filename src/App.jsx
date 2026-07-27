import { useState } from "react";
import FluidNav from "./components/Navigation/FluidNav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Writing from "./sections/Writing";
import Contact from "./sections/Contact";

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-amber-500/30 selection:text-amber-200 font-sans">
      <FluidNav soundEnabled={soundEnabled} onToggleSound={toggleSound} />
      <main>
        <Hero soundEnabled={soundEnabled} />
        <About />
        <Experience />
        <Projects />
        <Writing />
        <Contact />
      </main>
    </div>
  );
}
