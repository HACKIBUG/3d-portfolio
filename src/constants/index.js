import {
    css,
    git,
    github,
    html,
    javascript,
    weather,
    calculator,
    portfolio,
    portfoliosimple,
    framer,
    google,
    accenture,
    spotify,
    linkedin,
    nodejs,
    npm,
    mongodb,
    nextjs,
    php,
    whatsapp,
    msoffice,
    sololearn,
    cisco,
    ibm,
    letsupgrade,
    figma,
    mui,
    react,
    tailwindcss,
    forage,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "backend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: nodejs,
        name: "nodejs",
        type: "complier",
    },
    {
        imageUrl:npm,
        name: "NPM",
        type: "package manager",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: msoffice,
        name: "MS Office",
        type: "documentation",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "designing",
    },

];

export const experiences = [
    {
        title: "HTML fundamentals",
        company_name: "Solo Learn",
        icon: sololearn,
        iconBg: "white",
        date: "16 April 2022",
        points: [
            "Undertanding basic structure of HTML 5",
            "Learned how starting and ending tag works",
            "Learned how each tag works and its functions",
            "Helped me to construct my first webpage using html css",
        ],
    },
    {
        title: "JavaScript Essentials 1 course",
        company_name: "Cisco",
        icon: cisco,
        iconBg: "white",
        date: "July 27 2023",
        points: [
            "Understand the syntax of the core JavaScript language that allows for working with variables,operators,flow control,and functions.",
            "Design ,devlop, and improve very simple javascript programs",
            "Understand how a program is interpreted and executed in an actual computer environment ,local or remote.",
            "Think algorithmically and can analyze problem using programmatic conceptual apparatus.",
        ],
    },
    {
        title: "Postman API Fundamentals student expert certification",
        company_name: "LetsUpgrade",
        icon: letsupgrade,
        iconBg: "white",
        date: "17 July,2023 to 19 July,2023",
        points: [
            "Understand the fundamentals of API.",
            "Learned basics methods like PUT,DELETE,PATCH,POST,GET.",
            "Demonstrated API methods with example datasets",
            "Learned how to create a postman free account",
        ],
    },
    {
        title: "Emerging Technologies and Job Readiness",
        company_name: "Edunet Foundation",
        icon: ibm,
        iconBg: "white",
        date: "28 Nov,2023 to 28 Dec,2023",
        points: [
            "Understanding basic attacks involved in tech world.",
            "Understand overview of cyber security ",
            "what's new in cyber security fundamentals",
            "Enterprise Design thinking practitioner.",
        ],
    },
    {
        title: "Google UX Design",
        company_name: "Google",
        icon: google,
        iconBg: "white",
        date: "20 May,2024",
        points: [
            "Understanding basics of user-centeric designs",
            "Basic goals of a UX Designer",
            "Learned about empathy-map , information architecture ,user research ",
            "Understood basic laws of ux design and userflows involved in ux design",
        ],
    },
    {
        title: "UX Design Course",
        company_name: "Accenture",
        icon: accenture,
        iconBg: "white",
        date: "20 june,2024",
        points: [
            "Understanding steps involved in design phase in SDLC",
            "Why is user experience important",
            "The importance of user research,user journey and visual design",
            "Types of user testing interaction design and analysing data",
        ],
    },

    {
        title: "Software Engineering virtual job simulation",
        company_name: "Forage JP Morgan Chase & CO",
        icon: forage,
        iconBg: "white",
        date: "July 18,2024",
        points: [
            "Learned a bit about GitHub",
            "Understand the overview of JP Morgan & co frameworks and libraries ",
            "Open Source contribution",
            "Helped in constructing graphs to display data visually for traders",
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Whatsapp',
        iconUrl: whatsapp,
        link: '/6382860818',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/HACKIBUG',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/surekha-s-4071b0286',
    }
];

export const projects = [
    {
        iconUrl: weather,
        theme: 'btn-back-red',
        name: 'Weather App',
        description: 'A Weather App is a software application designed to provide users with real-time weather information and forecasts using weather API.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: spotify,
        theme: 'btn-back-green',
        name: 'Spotify Clone',
        description: 'A frontend clone of Spotify using React js with its frameworks and libraries ,spotify web api and Hosted Using FireBase .',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: portfoliosimple,
        theme: 'btn-back-blue',
        name: 'Portfolio website',
        description: 'Portfolio website for showcase my works, skills and professional achievements.This website is built using front end stack HTML,CSS,JavaScript. ',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: calculator,
        theme: 'btn-back-pink',
        name: 'Normal Calculator',
        description: 'Calculator with basic operations like addition, subtraction, multiplication,division built using javascript.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: framer,
        theme: 'btn-back-black',
        name: 'Website using Framer',
        description: 'This website focuses on animations and gradients and also achieve complete responsiveness.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: portfolio,
        theme: 'btn-back-yellow',
        name: '3d PortFolio Website',
        description:'Portfolio website built using react js and the 3d models are extracted from sketchfab and styling done using tailwind css.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];