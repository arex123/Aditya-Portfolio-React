import React, { useRef, useState } from "react";
import { School, Work } from "@mui/icons-material";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import '../styles/experience.css'
import CylinderSvg from '../assets/vectors/cylinder.svg'
import CircleSvg from '../assets/vectors/circle-spin.svg'
import PepcodingPic from '../assets/pepcoding.png'
import TraqiqPic from '../assets/traqiq.png'
import VCLPic from '../assets/vcl.jpeg'
import HeloPic from '../assets/helo.png'
// import UdemySVG from '../assets/udemy.svg'
const Experience = () => {
    const ref = useRef()

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

    // const []
    const [val, setVal] = useState(2);

    const handleGoDown = () => {
        //    ref.current?.scrollIntoView({behavior:'smooth'});
        window.scroll({
            top: ref.current.offsetTop + 80,
            behavior: 'smooth'
        })
    }
    return (
        <div className="experience_page">
            <img className="bg_cylinder_icon" src={CylinderSvg} />
            <img className="bg_spin_icon" src={CircleSvg} />
            <div className="exp_title_icons">
                <div className="skills_info skills_info_exp">
                    <div className="about_q1"><p></p> <p className="q1">About My Past Experience!</p></div>
                    <p className="skills_des">Worked with several organizations ranging from campus clubs to startups.</p>
                    <p className="skills_code">Work<span> Experience</span></p>
                </div>
                <div className="exp_icons">

                    <div onClick={() => { setVal(0); handleGoDown(); }}><img className="vclPic" src={HeloPic} /></div>
                    <div onClick={() => { setVal(1); handleGoDown(); }}><img className="vclPic" src={VCLPic} /></div>
                    <div onClick={() => { setVal(2); handleGoDown(); }}><img className="traqPic" src={TraqiqPic} /></div>
                    <div onClick={() => { setVal(3); handleGoDown(); }}><img className="pepPic" src={PepcodingPic} /></div>

                </div>
            </div>
            <div ref={ref}></div>
            <div className="exp_sec">
                <div className="timeline">
                    <VerticalTimeline lineColor="#3e497a">

                        <VerticalTimelineElement className="vertical-timeline-element--work"

                            iconStyle={{ background: val == 0 ? "#eebbc3" : "#3e497a", color: val == 0 ? "black" : "#fff", transform: val == 0 ? "scale(1.2)" : "scale(1)" }}
                            icon={<Work />}
                            iconOnClick={() => { setVal(0) }}
                        >

                        </VerticalTimelineElement>

                        <VerticalTimelineElement className="vertical-timeline-element--work"

                            iconStyle={{ background: val == 1 ? "#eebbc3" : "#3e497a", color: val == 1 ? "black" : "#fff", transform: val == 1 ? "scale(1.2)" : "scale(1)" }}
                            icon={<Work />}
                            iconOnClick={() => { setVal(1) }}
                        >

                        </VerticalTimelineElement>

                        <VerticalTimelineElement className="vertical-timeline-element--work"

                            iconStyle={{ background: val == 2 ? "#eebbc3" : "#3e497a", color: val == 2 ? "black" : "#fff", transform: val == 2 ? "scale(1.2)" : "scale(1)" }}
                            icon={<Work />}
                            iconOnClick={() => { setVal(2) }}
                        >

                        </VerticalTimelineElement>


                        <VerticalTimelineElement className="vertical-timeline-element--education"

                            iconStyle={{ background: val == 3 ? "#eebbc3" : "#3e497a", color: val == 3 ? "black" : "#fff", transform: val == 3 ? "scale(1.2)" : "scale(1)" }}
                            icon={<School />}
                            iconOnClick={() => { setVal(3) }}
                        >

                        </VerticalTimelineElement>

                    </VerticalTimeline>
                </div>
                <div className="timeline_detail">
                    <div>
                        <div className={`detail-1 ${val==0?"div_appear":"div_dissapear"}`}>
                            <p className="c_name">Helo.ai by Vivaconnect</p>
                            <p className="c_role">Jr. Software Engineer</p>
                            <p className="c_time">Nov 2024 - present</p>
                            <ul className="work_at_des">
                                <li>Contributing to both React and Angular projects as a Junior Software Engineer at my current company.</li>
                                <li>Worked extensively on a React-based internal support application used for managing bulk messaging campaigns (RCS, SMS, WhatsApp) for banks and businesses.</li>
                                <li>Focused on improving performance and extending core functionalities; optimized the app to increase its Lighthouse performance score from 48 to 92, enhancing load speed and responsiveness.</li>
                                {/* <li><b style={{ color: '#986dff' }}>Designed Database structure</b> of Router Device's Entire Data.</li> */}
                            </ul>
                        </div>
                        <div className={`detail-1 ${val==1?"div_appear":"div_dissapear"}`}>
                            <p className="c_name">Valiant Communication Ltd</p>
                            <p className="c_role">MERN Stack Developer</p>
                            <p className="c_time">March 2023 - Jul 2023</p>
                            <ul className="work_at_des">
                                <li>Worked on a <b style={{ color: '#986dff' }}>MERN</b> Stack Application,</li>
                                <li>Created An MERN Application from scrath, Integrated This app with<b style={{ color: '#986dff' }}> Router Device(Digital Device)</b>, for handling/manipulating Router Inbuild Data,</li>
                                <li>Designed <b style={{ color: '#986dff' }}> scalable app</b> in react for creating 200+ forms for handling routers data.</li>
                                <li><b style={{ color: '#986dff' }}>Designed Database structure</b> of Router Device's Entire Data.</li>
                            </ul>
                        </div>
                        <div className={`detail-2 ${val==2?"div_appear":"div_dissapear"}`}>
                            <p className="c_name">Traqiq Solutions</p>
                            <p className="c_role">Software Developer</p>
                            <p className="c_time">May 2022 - March 2023</p>
                            <ul className="work_at_des">
                                <li>Worked on a <b style={{ color: '#986dff' }}>Nodejs</b> based project, which is a backend for a <b style={{ color: '#986dff' }}>Taxi booking application (Slide)</b>.</li>
                                <li>created api's for <b style={{ color: '#986dff' }}>app</b>, <b style={{ color: '#986dff' }}>admin web portal</b> section</li>
                                <li>Learned <b style={{ color: '#986dff' }}>Agile Methodology</b>, worked on <b style={{ color: '#986dff' }}>JIRA</b></li>
                                <li>Learned Deployement of Web Application to <b style={{ color: '#986dff' }}>AWS</b></li>
                                <li>In starting month learned java, <b style={{ color: '#986dff' }}>spring boot</b> and modified some <b style={{ color: '#986dff' }}>api</b>, which were based on spring boot for <b style={{ color: '#986dff' }}>Bike-Rental-App</b></li>
                            </ul>
                        </div>
                        <div className={`detail-3 ${val==3?"div_appear":"div_dissapear"}`}>
                            <p className="c_name">Pepcoding Pvt Ltd</p>
                            <p className="c_role">MERN + DSA TRAINING</p>
                            <p className="c_time">Jun 2021 - Dec 2021</p>
                            <ul className="work_at_des">
                                <li>Worked on a different <b style={{ color: '#986dff' }}>MERN stack</b> based project.</li>
                                <li>Created Web scrapper using Nodejs for fetching data from pepcoding.com for retriving question from it.</li>
                                <li>Created on Youtube Short Clone project, which is based on React.</li>
                                <li>Created Resume Builder App using ReactJS.</li>
                                <li>In starting month, Focus was on developing improving Data structure.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience