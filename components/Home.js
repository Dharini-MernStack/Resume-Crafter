import React from 'react';
import { Link } from 'react-router-dom';
import ResumeLogo from '../Assets/logo.jpeg';


const Home = () => {
  return (
    <div className='container'>
    
      <h1>Welcome to the Resume Builder aka Resume crafter</h1>
      <p><strong>Create your professional resume with ease</strong></p>
      <div>
      <img src={ResumeLogo} alt="Resume Logo" className="resume-logo" />
        <Link to="/resume-form" className='link-button'>Start Building</Link>
      </div>
    </div>
  );
};

export default Home;
