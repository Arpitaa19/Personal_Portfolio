// import { SiPython, SiTensorflow, SiOpencv } from "react-icons/si";
import { SiPython, SiTensorflow, SiOpencv, SiPytorch, SiPandas, SiNumpy, SiScikitlearn, SiOpenai } from "react-icons/si";
import documentImg from "../assets/Images/doc.png";
import healthcareImg from "../assets/Images/healthcare.jpg";

// import { SiThemoviedatabase, SiExpress } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "Document Structure Analysis",
    image: documentImg,
    icons: [SiPython, SiTensorflow, SiOpencv],
    description: "This project analyzes and detects document layouts using deep learning to accurately extract structured information.",
    gitHub: "github.com/Arpitaa19/document-analysis",
  },
  {
    id: "2",
    name: "Healthcare Management System",
    image: healthcareImg,
    icons: [SiPython, SiPytorch, SiPandas, SiNumpy, SiScikitlearn],
    description: "This project provides intelligent disease diagnosis and personalized treatment recommendations using reinforcement learning.",
    gitHub: "github.com/Arpitaa19/healthcare-management",
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
