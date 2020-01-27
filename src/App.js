import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './styles/fonts.css';
import './styles/styles.css';

import Home from './components/Home';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Offer from "./components/Offer";
import About from "./components/About";
import Localization from "./components/Localization";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />                
        <Route exact path="/coffee-demo" component={ Home } />
        <Route path="/offer" component={ Offer } />
        <Route path="/about" component={ About } />
        <Route path="/localization" component={ Localization } />
        <Route path="/contact" component={ Contact } />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
