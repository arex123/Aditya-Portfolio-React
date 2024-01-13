import React from "react";
import { School, Work } from "@mui/icons-material";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import '../styles/experience.css'
const Experience = () => {

    // return (<div className="experience">
    //     <VerticalTimeline lineColor="#3e497a">

    //         {/* first item */}
    //         <VerticalTimelineElement className="vertical-timeline-element--education"
    //             date="till 2018"
    //             iconStyle={{ background: "#e9d35d", color: "#fff" }}
    //             icon={<School />}>
    //             <h3 className="vertical-timeline-element-title">School</h3>
    //             <p>
    //                 GBSSS No 1, janakpuri
    //             </p>
    //         </VerticalTimelineElement>

    //         {/* second item */}
    //         <VerticalTimelineElement className="vertical-timeline-element--education"
    //             date="2018 - 2022"
    //             iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //             icon={<School />}>
    //             <h3 className="vertical-timeline-element-title">
    //                 College
    //             </h3>
    //             <h4 className="vertical-timeline-element-subtitle">SAITM, Btech-CSE</h4>
    //             <p>Gurugram, Haryana</p>

    //         </VerticalTimelineElement>

    //         {/* Third Item */}
    //         <VerticalTimelineElement className="vertical-timeline-element--education"
    //             date="2021 - 2022"
    //             iconStyle={{ background: "#e9d35b", color: "#fff" }}
    //             icon={<School />}>
    //             <h3 className="vertical-timeline-element-title">Pepcoding & UDEMY(Angela Yu)</h3>
    //             <h4 className="vertical-timeline-element-subtitle"></h4>
    //             <p> DSA & MERN stack Training</p>
    //         </VerticalTimelineElement>


    //         {/* Forth Item */}
    //         <VerticalTimelineElement className="vertical-timeline-element--work"
    //             date="May 2022 - March 2023"
    //             iconStyle={{ background: "#3e497a", color: "#fff" }}
    //             icon={<Work />}>
    //             <h3 className="vertical-timeline-element-title">Traqiq Solutions</h3>
    //             <h4 className="vertical-timeline-element-subtitle">Noida</h4>
    //             <div className="workrole">
    //                 <li>Worked on a <b style={{ color: '#986dff' }}>Nodejs</b> based project, which is a backend for a <b style={{ color: '#986dff' }}>Taxi booking application (Slide)</b>.</li>
    //                 <li>created api's for <b style={{ color: '#986dff' }}>app</b>, <b style={{ color: '#986dff' }}>admin web portal</b> section</li>
    //                 <li>Learned <b style={{ color: '#986dff' }}>Agile Methodology</b>, worked on <b style={{ color: '#986dff' }}>JIRA</b></li>
    //                 <li>Learned Deployement of Web Application to <b style={{ color: '#986dff' }}>AWS</b></li>
    //                 <li>In starting month learned java, <b style={{ color: '#986dff' }}>spring boot</b> and modified some <b style={{ color: '#986dff' }}>api</b>, which were based on spring boot for <b style={{ color: '#986dff' }}>Bike-Rental-App</b></li>
    //             </div>

    //         </VerticalTimelineElement>

    //         {/* Fifth Item */}
    //         <VerticalTimelineElement className="vertical-timeline-element--work"
    //             date="March 2023 - Present"
    //             iconStyle={{ background: "#3e497a", color: "#fff" }}
    //             icon={<Work />}>
    //             <h3 className="vertical-timeline-element-title">Valiant Communication Ltd</h3>
    //             <h4 className="vertical-timeline-element-subtitle">New Delhi</h4>
    //             <div className="workrole">
    //                 <li>Working on a <b style={{ color: '#986dff' }}>MERN</b> Stack Application,</li>
    //                 <li>Created An MERN Application from scrath, Integrated This app with<b style={{ color: '#986dff' }}> Router Device(Digital Device)</b>, for handling/manipulating Router Inbuild Data,</li>
    //                 <li>Designed <b style={{ color: '#986dff' }}> scalable app</b> in react for creating 200+ forms for handling routers data.</li>
    //                 <li><b style={{ color: '#986dff' }}>Design Database structure</b> of Their Router Device</li>
    //             </div>
    //         </VerticalTimelineElement>




    //     </VerticalTimeline>


    // </div>)

    return (
        <div className="experience_page">
            <div className="skills_info">
                <div className="about_q1"><p></p> <p className="q1">Where he has worked??</p></div>

                <p className="skills_des">Worked with several organizations ranging from campus clubs to startups.</p>
                <p className="skills_code">Work<span> Experience</span></p>
            </div>
            <div className="exp_sec">
                <div className="timeline">
                    <VerticalTimeline lineColor="#3e497a">

                      
                        <VerticalTimelineElement className="vertical-timeline-element--education"
                            
                            iconStyle={{ background: "#eebbc3",color:"ffff" }}
                            icon={<School />}>
                            <h3 className="vertical-timeline-element-title">
                                College
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">SAITM, Btech-CSE</h4>
                            

                        </VerticalTimelineElement>

                        
                        <VerticalTimelineElement className="vertical-timeline-element--education"
                            
                            iconStyle={{ background: "#e9d35b", color: "#fff" }}
                            icon={<School />}>
                            <h3 className="vertical-timeline-element-title">Pepcoding & UDEMY(Angela Yu)</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle"></h4>
    <p> DSA & MERN stack Training</p> */}
                        </VerticalTimelineElement>


                        {/* Forth Item */}
                        <VerticalTimelineElement className="vertical-timeline-element--work"
                            
                            iconStyle={{ background: "#3e497a", color: "#fff" }}
                            icon={<Work />}>
                            <h3 className="vertical-timeline-element-title">Traqiq Solutions</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">Noida</h4>
    <div className="workrole">
        <li>Worked on a <b style={{ color: '#986dff' }}>Nodejs</b> based project, which is a backend for a <b style={{ color: '#986dff' }}>Taxi booking application (Slide)</b>.</li>
        <li>created api's for <b style={{ color: '#986dff' }}>app</b>, <b style={{ color: '#986dff' }}>admin web portal</b> section</li>
        <li>Learned <b style={{ color: '#986dff' }}>Agile Methodology</b>, worked on <b style={{ color: '#986dff' }}>JIRA</b></li>
        <li>Learned Deployement of Web Application to <b style={{ color: '#986dff' }}>AWS</b></li>
        <li>In starting month learned java, <b style={{ color: '#986dff' }}>spring boot</b> and modified some <b style={{ color: '#986dff' }}>api</b>, which were based on spring boot for <b style={{ color: '#986dff' }}>Bike-Rental-App</b></li>
    </div> */}

                        </VerticalTimelineElement>

                        
                        <VerticalTimelineElement className="vertical-timeline-element--work"
                            
                            iconStyle={{ background: "#3e497a", color: "#fff" }}
                            icon={<Work />}>
                            <h3 className="vertical-timeline-element-title">Valiant Communication Ltd</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">New Delhi</h4>
    <div className="workrole">
        <li>Working on a <b style={{ color: '#986dff' }}>MERN</b> Stack Application,</li>
        <li>Created An MERN Application from scrath, Integrated This app with<b style={{ color: '#986dff' }}> Router Device(Digital Device)</b>, for handling/manipulating Router Inbuild Data,</li>
        <li>Designed <b style={{ color: '#986dff' }}> scalable app</b> in react for creating 200+ forms for handling routers data.</li>
        <li><b style={{ color: '#986dff' }}>Design Database structure</b> of Their Router Device</li>
    </div> */}
                        </VerticalTimelineElement>




                    </VerticalTimeline>
                </div>
            </div>
        </div>
    )
}

export default Experience