import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Loader from "./components/Loader";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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
  const location = useLocation();
  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <AnimatePresence key={location.key}>
            <Routes>
              <Route path="/" element={<NavBar />}>
                <Route index="true" element={<Main />} />
                <Route path="about" element={<About />} />
                <Route path="project" element={<Portfolio />} />
                <Route path="contact" element={<Contact />} />
              </Route>
            </Routes>
          </AnimatePresence>
          <SocialLinks />
        </>
      )}
    </div>
  );
}

export default App;
