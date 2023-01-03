import About from "./components/About";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <About />
      <Portfolio />
      <Contact />
      <Loader />
      <SocialLinks />
    </div>
  );
}

export default App;
