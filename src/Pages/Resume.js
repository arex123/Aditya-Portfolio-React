import React from 'react';
import '../styles/Resume.css'

// Google Drive file ID for Aditya_resume.pdf
// When you update the file in Drive (replace/upload new version), the ID stays the same
const DRIVE_FILE_ID = '17U6wCD9PSc8dMmEVfpQlCEVRwpwHcA-v';
const RESUME_EMBED_URL = `https://drive.google.com/file/d/${DRIVE_FILE_ID}/preview`;

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
      <iframe className='res-iframe' src={RESUME_EMBED_URL} title="Resume" style={{ border: 'none', width: "70%", minHeight: "100vh" }} allow="autoplay" />
    </div>
  )
}

export default Resume