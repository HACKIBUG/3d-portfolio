import {
    css,
    git,
    github,
    html,
    javascript,
    weather,
    Recipe,
    portfolio,
    portfoliosimple,
    Appsheet,
    google,
    ocr,
    commerce,
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
        link: 'https://www.linkedin.com/in/surekha-sakthivel-4071b0286',
    }
];

export const projects = [
    {
        iconUrl: commerce,
        theme: 'btn-back-red',
        name: 'E-Commerce-Website',
        description: 'A responsive e-commerce frontend built with React.js, featuring product listings, category filters and a clean user-friendly design. The app focuses on delivering a smooth browsing experience using modern UI components.',
        link: 'https://shopas.vercel.app/',
    },
    {
        iconUrl: ocr,
        theme: 'btn-back-green',
        name: 'Tamil Ocr',
        description: 'Tamil OCR is a web application that extracts Tamil text from images using Tesseract.js.Built with React.js for the frontend and Django for the backend.',
        link: '',
    },
    {
        iconUrl: portfoliosimple,
        theme: 'btn-back-blue',
        name: 'Portfolio website',
        description: 'Portfolio website for showcase my works, skills and professional achievements.This website is built using front end stack HTML,CSS,JavaScript. ',
        link: '',
    },
    {
        iconUrl: Recipe,
        theme: 'btn-back-pink',
        name: 'Recipe App',
        description: 'A Recipe App that allows users to search for recipes, view ingredients, and follow cooking instructions.',
        link: 'https://cookingguide.vercel.app/',
    },
    {
        iconUrl: Appsheet,
        theme: 'btn-back-black',
        name: 'Website using Appsheet',
        description: 'It enables seamless candidate tracking, interview scheduling, and team collaboration—all from a no-code, mobile-friendly platform.',
        link: '',
    },
    {
        iconUrl: portfolio,
        theme: 'btn-back-yellow',
        name: '3d PortFolio Website',
        description:'Portfolio website built using react js and the 3d models are extracted from sketchfab and styling done using tailwind css.',
        link: 'https://3d-portfolio-surekha-s.vercel.app/',
    }
];