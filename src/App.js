import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';

/* pages in navbar */
import About from './contents/About';
import Posts from './contents/Posts';
import Contact from './contents/Contact';

function App() {

    return (
      <Router>
        <div className = "App">
          <NavBar />
          {/* this will load the 'About' page by default but will not work locally */}
          <Route exact path = "/">
            <About />
          </Route>
          <Route path = "/Posts">
            <Posts />
          </Route>
          <Route path = "/Contact">
            <Contact />
          </Route>
        </div>
      </Router>
    )

}

export default App;