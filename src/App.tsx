import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/Navbar";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Resume from "./components/Resume/Resume";
import Achievement from "./components/Achievement/Achievement";
function App() {
  return (
    <div className="dark:bg-neutral-800 bg-neutral-100">
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/achievement" element={<Achievement />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
