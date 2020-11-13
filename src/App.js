import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/sidebar'
import Welcome from './components/Welcome/welcome'
import Portfolio from './components/Portfolio/portfolio'
import Contact from './components/Contact/contact'
import Resume from './components/Resume/resume'

function App() {
  return (
    <div className="App">
        
        <Sidebar />
        <Router>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
        </Router>
    </div>
  );
}

export default App;
