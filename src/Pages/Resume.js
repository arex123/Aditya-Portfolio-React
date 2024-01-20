import React from 'react';
import res from '../assets/Aditya_Resume_Jan_2024.pdf'
const Resume = () => {
  return (
    <div className='res-page' style={{
        background:"rgb(35,41,70)",
        width:"100%",
        minHeight:"100vh",
        paddingTop:"150px",
        paddingBottom:"150px",
        boxSizing:"border-box",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
        <iframe src={res} style={{border: 'none' }} width="70%" height="900px"/>
    </div>
  )
}

export default Resume