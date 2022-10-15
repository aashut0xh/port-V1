import { Project } from ".";

import ReactIcon from "../../assets/react.svg";
import NextIcon from "../../assets/next.svg";
import StyledcIcon from "../../assets/styledc.svg";
import TailwindIcon from "../../assets/tailwind.svg";

export const projects: Project[] = [
    {
        title: "My Portfolio",
        description: "Showcase of my projects and skills",
        image: "https://res.cloudinary.com/dpnbddror/image/upload/v1646465961/1646465958744_avi7tt.webp",
        link: "",
        technologies: [
            {
                svg: NextIcon,
                text: "Next JS"
            },
            {
                svg: TailwindIcon,
                text: "Tailwind CSS"
            },
        ]
    },
]