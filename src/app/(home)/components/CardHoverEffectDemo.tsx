// "use-client"
import { HoverEffect } from "@/component/ui/card-hover-effect";
// React and Frontend Icons
import { FaHtml5 } from 'react-icons/fa'; // HTML
import { FaCss3Alt } from 'react-icons/fa'; // CSS
import { FaJsSquare } from 'react-icons/fa'; // JavaScript
import { FaReact } from 'react-icons/fa'; // React.js
import { FaBootstrap } from 'react-icons/fa'; // Bootstrap
import { FaMdb } from 'react-icons/fa'; // MUI (Material-UI) - Note: MUI doesn’t have a specific icon in react-icons
import { SiTailwindcss } from 'react-icons/si'; // Tailwind CSS
import { FaJs } from 'react-icons/fa'; // JavaScript (for Vanilla JS)
import { BiLogoRedux } from "react-icons/bi";
import { RiNextjsLine } from "react-icons/ri";
// Backend Icons
import { FaNodeJs } from 'react-icons/fa'; // Node.js
import { MdApi } from 'react-icons/md'; // REST API
import { FaGoogle } from 'react-icons/fa'; // Google authentication
import { FaDatabase } from 'react-icons/fa'; // General database icon
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
// Tools Icons
import { FaGithub } from 'react-icons/fa'; // GitHub
import { FaBitbucket } from 'react-icons/fa'; // Bitbucket
import { FaDocker } from 'react-icons/fa'; // Docker (sometimes used in conjunction with backend tools)
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Frontend Skills",
    description:
      "",
    link: "https://stripe.com",
    logos:[ { logo: <FaHtml5 key="html" size={30} title="HTML" />, title: "HTML" },
      { logo: <FaCss3Alt key="css" size={30} title="CSS" />, title: "CSS" },
      { logo: <FaJsSquare key="js" size={30} title="JavaScript" />, title: "JavaScript" },
      { logo: <FaReact key="react" size={30} title="React.js" />, title: "Reactjs" },
      { logo: <FaBootstrap key="bootstrap" size={30} title="Bootstrap" />, title: "Bootstrap" },
      { logo: <SiTailwindcss key="tailwind" size={30} title="Tailwind CSS" />, title: "Tailwind" },
      { logo: <BiLogoRedux key="redux" size={30} title="Redux" />, title: "Redux" },
      { logo: <RiNextjsLine key="nextjs" size={30} title="Nextjs" />, title: "Nextjs" },

    ]
  },
  {
    title: "Backend Skills",
    description:
      "",
    link: "https://netflix.com",
    logos:[{ logo: <FaNodeJs key="nodejs" size={30} title="Node.js" />, title: "Node.js" },
      { logo: <MdApi key="api" size={30} title="REST API" />, title: "REST API" },
      { logo: <FaGoogle key="google" size={30} title="Google Authentication" />, title: "GAuth" },
      { logo: <FaDatabase key="database" size={30} title="Database" />, title: "Database" },
      { logo: <FaGithub key="github" size={30} title="GitHub" />, title: "GitHub" },
      { logo: <FaBitbucket key="bitbucket" size={30} title="Bitbucket" />, title: "Bitbucket" },
      { logo: <SiExpress key="express" size={30} title="Express" />, title: "Express" },
      { logo: <GrMysql key="mysql" size={30} title="MySQl" />, title: "MySQL" },
    ]
  },
  
];
