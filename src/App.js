import "./App.css";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Project from "./pages/Project";
import Skill from "./pages/Skill";

function App() {
  return (
    <div className="App">
      <Header />
      <Skill />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
