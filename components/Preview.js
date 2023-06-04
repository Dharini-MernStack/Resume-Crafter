const ResumePreview = ({ resume }) => {
    if (!resume) {
      return <p>No resume generated yet</p>;
    }
  
    const {
      name,
      currentdesi,
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
        <h3>{name}</h3>
        <p>Current Designation: {currentdesi}</p>
        <p>Email: {email}</p>
        <p>Location: {location}</p>
        <p>Phone: {phone}</p>
        <p>Education: {education}</p>
        <p>Experience: {experience}</p>
        <p>About Me: {about}</p>
        <p>Skills: {skills}</p>
      </div>
    );
}