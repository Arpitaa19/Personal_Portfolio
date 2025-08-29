// import { SiPython, SiTensorflow, SiOpencv } from "react-icons/si";
import { 
  SiPython, 
  SiTensorflow, 
  SiOpencv, 
  SiPytorch, 
  SiPandas, 
  SiNumpy, 
  SiScikitlearn, 
  SiOpenai,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiSocketdotio
} from "react-icons/si";
import documentImg from "../assets/Images/doc.png";
import healthcareImg from "../assets/Images/healthcare.jpg";
import editorImg from "../assets/Images/codesphere.png";

// import { SiThemoviedatabase, SiExpress } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "Document Structure Analysis",
    image: documentImg,
    icons: [SiPython, SiTensorflow, SiOpencv],
    description: "This project analyzes and detects document layouts using deep learning to accurately extract structured information.",
    github: "https://github.com/Arpitaa19/Document_Structure_Analysis",
  },
  {
    id: "2",
    name: "CodeSphere: Real Time Editor",
    image: editorImg,
  icons: [SiReact, SiTailwindcss, SiNodedotjs, SiSocketdotio],
    description: "This project allows multiple users to edit code together in real time with smooth collaboration and synchronization.",
    github: "https://github.com/Arpitaa19/CodeSphere_Editor",
  },

  {
    id: "3",
    name: "Healthcare Management System",
    image: healthcareImg,
    icons: [SiPython, SiPytorch, SiPandas, SiNumpy, SiScikitlearn],
    description: "This project provides intelligent disease diagnosis and personalized treatment recommendations using reinforcement learning.",
    github: "https://github.com/Arpitaa19/Healthcare_management",
  },
  // {
  //   id: "3",
  //   name: "Chat Application",
  //   image: "./chatapp.png",
  //   icons: [BiLogoReact, BiLogoTailwindCss, BiLogoFirebase],
  //   description: "This chat application provides an interface to the users to interact with their friends.",
  //   github: "https://github.com/VijayKumarReddyTalakola/Chat-App",
  //   demo: "https://vchat4whisperchat.vercel.app",
  // },

];

export default ProjectsData;
