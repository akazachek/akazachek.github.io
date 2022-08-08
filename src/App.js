import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

/* pages in navbar */
import About from "./contents/About";
import Posts from "./contents/Posts";
import Contact from "./contents/Contact";

function App() {
  const [path, setPath] = useState(window.location.pathname);

  return (
    <Router>
      <div className="App">
        <NavBar path={path} />
        <Routes>
          {/* this will load the 'About' page by default but will not work locally */}
          <Route exact path="/" element={<About />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
