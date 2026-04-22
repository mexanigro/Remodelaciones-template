import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import FloatingCTA from "./components/FloatingCTA";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import "./App.css";

function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <SplashScreen onComplete={() => setSplashDone(true)} />
      <Navbar
        onOpenContact={() => setContactOpen(true)}
        splashDone={splashDone}
      />
      <main>
        <Hero onOpenContact={() => setContactOpen(true)} />
        <Portfolio />
        <Process />
        <WhyUs />
        <Testimonials />
      </main>
      <Footer />
      <FloatingCTA onOpenContact={() => setContactOpen(true)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

export default App;
