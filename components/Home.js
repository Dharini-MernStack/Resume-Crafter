import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'>
    
      <h1>Welcome to the Resume Builder aka Resume crafter</h1>
      <p><strong>Create your professional resume with ease</strong></p>
      <div>
        <Link to="/resume-form" className='link-button'>Start Building</Link>
      </div>
    </div>
  );
};

export default Home;
