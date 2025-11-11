import React from 'react';
import res from '../assets/Aditya_resume.pdf'
import '../styles/Resume.css'
const Resume = () => {
  return (
    <div className='res-page' style={{
      background: "rgb(35,41,70)",
      width: "100%",
      minHeight: "100vh",
      paddingTop: "150px",
      paddingBottom: "150px",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <iframe className='res-iframe' src={res} title="Resume" style={{ border: 'none',width:"70%", minHeight:"100vh" }} />
    </div>
  )
}

export default Resume