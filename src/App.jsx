import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Personal-Site" exact element={<Home />} />
        <Route
          path="/Personal-Site/projects"
          element={<Projects />}
        />
        <Route
          path="/Personal-Site/contact"
          element={<ContactMe />}
        />
      </Routes>
    </>
  );
}

export default App;
