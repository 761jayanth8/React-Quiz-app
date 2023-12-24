import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import AssessmentMain from './AssessmentMain';


const App = () =>{

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/getstart" element={<AssessmentMain/>} />
      </Routes>
    </Router>
    
  )
}

export default App;
