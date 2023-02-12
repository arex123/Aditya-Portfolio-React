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
          date="2022 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<Work />}>
                <h3 className="vertical-timeline-element-title">Traqiq Solutions</h3>
                <h4 className="vertical-timeline-element-subtitle">Noida</h4>
                <p>Working on a Nodejs based project, which is a backend for a Taxi booking application (Slide).</p>
             </VerticalTimelineElement>


            

        </VerticalTimeline>

        
    </div>)
}

export default Experience