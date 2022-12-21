import About from "./components/About";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <About />
      <SocialLinks />
    </div>
  );
}

export default App;
