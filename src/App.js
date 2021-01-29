import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import Projects from "./containers/Projects";
import Contact from "./containers/Contact";
import Home from './containers/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </Router>
  );
}

export default App;
