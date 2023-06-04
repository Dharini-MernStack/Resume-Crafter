import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ResumeForm = () => {
  const [name, setName] = useState('');
  const [currentDesi, setCurrentDesi] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [about, setAbout] = useState('');
  const [skills, setSkills] = useState('');
  const [generatedResume, setGeneratedResume] = useState(null);

  const generateResume = () => {
    const resume = {
      name,
      currentDesi,
      email,
      location,
      phone,
      education,
      experience,
      about,
      skills,
    };
// Store the resume in local storage
localStorage.setItem('resume', JSON.stringify(resume));

setGeneratedResume(resume);
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateResume();

    const resumeData = {
      name,
      currentDesi,
      email,
      location,
      phone,
      education,
      experience,
      about,
      skills,
    };

    // Reset the form fields
    setName('');
    setCurrentDesi('');
    setEmail('');
    setLocation('');
    setPhone('');
    setEducation('');
    setExperience('');
    setAbout('');
    setSkills('');

    axios
      .post('http://localhost:3000/preview', resumeData)
      .then((response) => {
        console.log('Resume saved successfully');
      })
      .catch((error) => {
        console.error('Error saving resume', error);
      });
  };
  const handleDelete = () => {
    // Remove the resume from local storage
    
    localStorage.removeItem('resume');
    setGeneratedResume(null);
  };
  useEffect(() => {
    // Retrieve the resume from local storage
    const storedResume = localStorage.getItem('resume');
    if (storedResume) {
      const resumeData = JSON.parse(storedResume);
      setGeneratedResume(resumeData);
    }
  }, []);
  useEffect(() => {
    axios
      .get('http://localhost:3000/resume-form')
      .then((response) => {
        const resumeData = response.data;
         // Process the retrieved resumes data
        setName(resumeData.name);
        setCurrentDesi(resumeData.currentDesi);
        setEmail(resumeData.email);
        setLocation(resumeData.location);
        setPhone(resumeData.phone);
        setEducation(resumeData.education);
        setExperience(resumeData.experience);
        setAbout(resumeData.about);
        setSkills(resumeData.skills);
       
      })
      .catch((error) => {
        console.error('Error retrieving resumes', error);
      });
  }, []);
  

  return (
    <div className='resume_container'>
      <h1>Resume Form</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='label' htmlFor="name">Name:</label>
          <input className='input-field'
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label className='label' htmlFor="current desi">Current Designation:</label>
          <input className='input-field'
            type="text"
            id="current desi"
            value={currentDesi}
            onChange={(e) => setCurrentDesi(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label className='label' htmlFor="location">Location:</label>
          <input className='input-field'
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label className='label' htmlFor="name">PhoneNumber:</label>
          <input className='input-field'
            type="number"
            id="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        
        <div className='form-group'>
          <label className='label' htmlFor="email">Email:</label>
          <input className='input-field'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label className='label' htmlFor="AboutMe">About Me:</label>
          <textarea
            id="about me"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </div>
        <div className='form-group'>
          <label className='label' htmlFor="education">Education:</label>
          <textarea className='input-field'
            id="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          ></textarea>
        </div>
        <div className='form-group'>
          <label className='label' htmlFor="experience">Experience(s):</label>
          <textarea className='input-field'
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          ></textarea>
        </div>
        <div className='form-group'>
          <label  className='label' htmlFor="skills">Skills:</label>
          <textarea className='input-field'
            id="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          ></textarea>
        </div>
       

        <button className="submit-button" type="submit">Generate Resume</button>
      </form>
      {generatedResume && (
        <div>
          <h2>Generated Resume</h2>
          <ResumePreview resume={generatedResume} />
          <button className="delete-button" onClick={handleDelete}>Delete Resume</button>
        </div>
      )}
    </div>
  );
};

const ResumePreview = ({ resume,onDelete  }) => {
    if (!resume) {
      return <p>No resume generated yet</p>;
    }
  
    const {
      name,
      currentDesi,
      email,
      location,
      phone,
      education,
      experience,
      about,
      skills,
    } = resume;
   
    return (
      <div>
        {/* Display the generated resume */}
        <h3>{name}</h3>
        <p>Current Designation: {currentDesi}</p>
        <p>Email: {email}</p>
        <p>Location: {location}</p>
        <p>Phone: {phone}</p>
        <p>Education: {education}</p>
        <p>Experience: {experience}</p>
        <p>About Me: {about}</p>
        <p>Skills: {skills}</p>
      </div>
    );
  };
  
export default ResumeForm;
