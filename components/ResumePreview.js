import React from 'react';

const ResumePreview = ({ resume }) => {
  if (!resume) {
    return <div>Loading...</div>;
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
    <div className="resume_preview">
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

export default ResumePreview;
