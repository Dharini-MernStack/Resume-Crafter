import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/resume-form" element={<ResumeForm />} />
          <Route path="/preview" element={<ResumePreview />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
