import React from "react";
import { School, Work } from "@mui/icons-material";
import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"

const Experience = ()=>{

    return (<div className="experience">
        <VerticalTimeline lineColor="#3e497a">

            {/* first item */}
            <VerticalTimelineElement className="vertical-timeline-element--education"
            date="till 2018"
            iconStyle={{background:"#e9d35d", color:"#fff"}}
            icon={<School/>}>
                <h3 className="vertical-timeline-element-title">School</h3>
            <p>
                GBSSS No 1, janakpuri
            </p>
            </VerticalTimelineElement>

             {/* second item */}
             <VerticalTimelineElement  className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<School />}>
            <h3 className="vertical-timeline-element-title">
                College
            </h3>
            <h4 className="vertical-timeline-element-subtitle">SAITM, Btech-CSE</h4>
            <p>Gurugram, Haryana</p>

             </VerticalTimelineElement>

             {/* Third Item */}
             <VerticalTimelineElement className="vertical-timeline-element--education"
          date="2021 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<School />}>
                <h3 className="vertical-timeline-element-title">Pepcoding & UDEMY(Angela Yu)</h3>
                <h4 className="vertical-timeline-element-subtitle"></h4>
                <p> DSA & MERN stack Training</p>
             </VerticalTimelineElement>
             

             {/* Forth Item */}
             <VerticalTimelineElement className="vertical-timeline-element--work"
          date="May 2022 - March 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<Work />}>
                <h3 className="vertical-timeline-element-title">Traqiq Solutions</h3>
                <h4 className="vertical-timeline-element-subtitle">Noida</h4>
                <div className="workrole">
                <li>Worked on a <b>Nodejs</b> based project, which is a backend for a <b>Taxi booking application (Slide)</b>.</li>
                <li>created api's for <b>app</b>, <b>admin web portal</b> section</li>
                <li>Learned <b>Agile Methodology</b>, worked on <b>JIRA</b></li>
                <li>Learned Deployement of Web Application to <b>AWS</b></li>
                <li>In starting month learned java, <b>spring boot</b> and modified some <b>api</b>, which were based on spring boot for <b>Bike-Rental-App</b></li>
                </div>
                
             </VerticalTimelineElement>

             {/* Fifth Item */}
             <VerticalTimelineElement className="vertical-timeline-element--work"
          date="March 2023 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<Work />}>
                <h3 className="vertical-timeline-element-title">Valiant Communication Ltd</h3>
                <h4 className="vertical-timeline-element-subtitle">New Delhi</h4>
                <div className="workrole">
                <li>Working on a <b>MERN</b> Stack Application,</li>
                <li>Created An MERN Application from scrath, Integrated This app with<b> Router Device(Digital Device)</b>, for handling/manipulating Router Inbuild Data,</li>
                <li><b>Design Database structure</b> of Their Router Device</li>
                </div>
             </VerticalTimelineElement>


            

        </VerticalTimeline>

        
    </div>)
}

export default Experience