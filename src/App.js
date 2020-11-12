import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/sidebar'
import Welcome from './components/Welcome/welcome'

function App() {
  return (
    <div className="App">
        
        <Sidebar />
        {/* <Router>
        
        <Route exact path="/" component={Welcome} />
        </Router> */}
    </div>
  );
}

export default App;
