import About from "./components/About";
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
      <SocialLinks />
    </div>
  );
}

export default App;
