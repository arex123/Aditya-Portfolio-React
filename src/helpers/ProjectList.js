import Pro1 from '../assets/insta.png'
import Pro2 from '../assets/excel.png'
import Pro3 from '../assets/npm.png'
import Pro4 from '../assets/captureapp.png'
import Pro5 from '../assets/yt_app.png'
import Pro6 from '../assets/style_p1.png'
import Pro7 from '../assets/style_p2.png'
// import CSSsvg from '../assets/skills/css.svg'
// import EXPRESSsvg from '../assets/skills/express.svg'
// import FIGMAsvg from '../assets/skills/figma.svg'
// import FIREBASEsvg from '../assets/skills/firebase.svg'
// import HTMLsvg from '../assets/skills/html.svg'
// import JSsvg from '../assets/skills/js.svg'
// import MONGODBsvg from '../assets/skills/mongodb.svg'
// import NODEJSsvg from '../assets/skills/node.svg'
// import REACTJSsvg from '../assets/skills/react.svg'

export const ProjectList = [

    {
        key:"00001",
        name:"Watch Playlist",
        pic:Pro5,
        skills:["REACTJS","CSS"],
        project_link:"",
        github_link:"https://github.com/arex123/watch-playlist",
        desc:"It is a web app created using ReactJS, leveraging the YouTube API for video and playlist retrieval. Featuring search functionality and more, it enhances user experience in exploring and interacting with multimedia content.",
        type:"WEB",
        significance:"The YouTube Web App, crafted with React, enriches user engagement by seamlessly integrating YouTube functionalities. With an intuitive interface, it offers a responsive and immersive platform for users to discover, watch, and interact with diverse video content."
    },
    {
        key:"00002",
        name: "Instagram Reel Project",
        pic: Pro1,
        skills:["REACTJS","FIREBASE","CSS"],
        project_link:"",
        github_link:"https://github.com/arex123/Reels",
        desc:"Its a full Stack Application made in React, where a user can post videos and can see others short videos.",
        type:"WEB",
        significance:"The Reels clone web app, built with ReactJS and Firebase, provides an immersive platform for users to create and share short video content seamlessly. Leveraging Firebase's real-time database, it ensures efficient data storage and retrieval, offering an engaging and dynamic user experience."
        
    },
    {
        key:"00003",
        name: "DESKTOP CAPTURE",
        pic: Pro4,
        skills:["Electron JS"],
        project_link:"",
        github_link:"https://github.com/arex123/desktopcapture",
        desc:"Fully fledge desktop screen capture application. Cross platform app for computer screen recording.",
        type:"OTHER",
        significance:"The Desktop Capture app provides effortless screen recording, empowering users to create tutorials and presentations. Its user-friendly interface enhances accessibility for seamless desktop activity capture."
    },
   
    {
        key:"00004",
        name: "Password Validator library",
        pic: Pro3,
        skills:["JS","HTML","CSS","Virtual DOM"],
        project_link:"https://www.npmjs.com/package/password-validation-tag",
        github_link:"https://github.com/arex123/psd-input-validate",
        desc:"A cdn to use it in your HTML page forimproving password validation. Reusable library and helps in reducing code size.",
        type:"OTHER",
        significance:"The PSD Validator npm package simplifies PSD file validation, ensuring adherence to industry standards. With seamless integration, developers can easily validate PSD files, enhancing design consistency and reliability in web and graphic projects."
    },
    {
        key:"00005",
        name: "Excel Clone",
        pic: Pro2,
        skills:["JS","HTML","CSS"],
        project_link:"https://arex123.github.io/excel/",
        github_link:"https://github.com/arex123/excel",
        desc:"Web based Excel Application, features like real ms excel App. Use of Graph algorithms, Browser storage, etc.",
        type:"WEB",
        significance:"The Excel web app facilitates easy online data collaboration and analysis, providing cloud-based access for real-time productivity without local installations."
    },
    {
        key:"00006",
        name: "CSS Design Project",
        pic: Pro6,
        skills:["CSS","SCSS"],
        project_link:"https://arex123.github.io/advance-css-with-sass/",
        github_link:"https://github.com/arex123/advance-css-with-sass",
        desc:"This project utilizes vanilla CSS and employs the SASS pre-processor to build an attractive one-page website.",
        type:"DESIGNS",
        significance:"This website showcases the power of vanilla CSS and SASS, to create a visually appealing one-page design. The tech stack ensures efficient styling, layout, and maintainability for a seamless user experience."
        
    },
    {
        key:"00007",
        name: "CSS Design Project using flexbox",
        pic: Pro7,
        skills:["CSS","SCSS"],
        project_link:"https://arex123.github.io/flex-project/#",
        github_link:"https://github.com/arex123/flex-project",
        desc:"This project utilizes vanilla CSS and employs the SASS pre-processor to build an attractive one-page website using flexbox for enhanced styling and layout.",
        type:"DESIGNS",
        significance:"This website showcases the power of vanilla CSS and SASS, utilizing flexbox to create a visually appealing one-page design. The tech stack ensures efficient styling, layout, and maintainability for a seamless user experience."
        
    }
]