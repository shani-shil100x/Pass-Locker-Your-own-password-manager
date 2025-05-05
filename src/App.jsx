import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Managar from "./components/Managar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      // In App.jsx, inside the background wrapper
      <div className="relative min-h-screen pt-14 pb-30 bg-purple-50 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
        <div className="relative">
          <Managar />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
