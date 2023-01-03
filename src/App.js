import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Loader from "./components/Loader";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      );
    };
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <Main />
          <About />
          <Portfolio />
          <Contact />
          <SocialLinks />
        </>
      )}
    </div>
  );
}

export default App;
