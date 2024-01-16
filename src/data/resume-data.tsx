import { GitHubIcon, LinkedInIcon } from "@/components/icons";
export const RESUME_DATA = {
  name: "Santiago Forero A",
  location: "Bogotá, Colombia",
  locationLink: "https://www.google.com/maps/place/Bogota",
  about:
    "Software Engineer passionate about creating products that are useful to people.",
  summary:
    "With over 3 years of experience in software development, I have worked on various projects ranging from mobile applications to web applications. I consider myself a proactive person, with strong analytical skills and communication abilities, enabling me to work effectively in a team and achieve set goals.",
  avatarUrl: "https://res.cloudinary.com/santicode/image/upload/v1705438789/uqawadivkeazxyhnnisg.webp",  
  contact: {
    email: "sanfo0620@gmail.com",    
    social: [
      {
        name: "GitHub",
        url: "https://github.com/dasafodev",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/santicode/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      degree: "University of Los Andes",
      school: "Master's in Software Engineering",
      start: "2023",
      end: "In progress",
    },
    {
      degree: "University of Los Andes",
      school: "Systems Engineering and Computing",
      start: "2017",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Sumer Labs",
      link: "https://www.sumerlabs.com/",
      badges: ["Remote"],
      title: "Mobile Developer",      
      start: "2023",
      end: "2024",
      description:
        "Developed various features that enhanced the user experience in the mobile app. I stood out for my analytical ability and technical skills.",
    },
    {
      company: "Tyba",
      link: "https://tyba.com.co/",
      badges: ["Remote"],
      title: "Mobile Developer",      
      start: "2022",
      end: "2023",
      description:
        "Participated in the development and optimization of the web and mobile application with Flutter. I excelled in improving application load times by up to 50% and in developing tools that made the entire development team more efficient.",
    },
    {
      company: "Evalua",
      link: "http://www.evalualos.com/index-software-ES.html",
      badges: [],
      title: "Software Engineer",      
      start: "2020",
      end: "2022",
      description:
        "Designed and developed a mobile application with Flutter and Node.js for data collection, sorting, and analysis. These collected data are analyzed with AI and presented to the user through a dashboard to assist in decision-making.",
    },
  ],
  skills: [
    "Flutter",
    "Dart",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js/Nest.js",    
  ],
  projects: [
    {
      title: "Compi",
      techStack: [
        "Side Project",
        "Flutter",
        "Dart",        
        "Node.js",
        "Nest.js",
      
      ],
      description: "Price comparison app for supermarket products.",      
      link: {
        label: "compi.app",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Kairos",
      techStack: [
        "Side Project",
        "Flutter",
        "Dart"                   
      ],
      description:
        "Reservation management app for restaurants, internationally recognized by IBM.",      
      link: {
        label: "forbes.co",
        href: "https://forbes.co/2020/10/27/actualidad/desarrolladores-colombianos-ganaron-premio-de-ibm-con-app-que-crearon-en-la-pandemia",
      },
    },
  ],
} as const;

export const RESUME_DATA_ES = {
  name: "Santiago Forero A",
  location: "Bogotá, Colombia",
  locationLink: "https://www.google.com/maps/place/Bogota",
  about:
    "Software Engineer con pasión por crear productos que sean útiles a las personas.",
  summary:
    "Con más de 3 años de experiencia en el campo del desarrollo de software, he trabajado en diferentes proyectos que van desde aplicaciones móviles hasta aplicaciones web. Me considero una persona proactiva, con capacidad de análisis y con habilidades de comunicación que me permiten trabajar en equipo y lograr los objetivos propuestos.",
  avatarUrl: "https://res.cloudinary.com/santicode/image/upload/v1705438789/uqawadivkeazxyhnnisg.webp",  
  contact: {
    email: "sanfo0620@gmail.com",    
    social: [
      {
        name: "GitHub",
        url: "https://github.com/dasafodev",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/santicode/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      degree: "Universidad de Los Andes",
      school: "Maestría en Ingeniería de Software",
      start: "2023",
      end: "En progreso",
    },
    {
      degree: "Universidad de Los Andes",
      school: "Ingeniería de Sistemas y Computación",
      start: "2017",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Sumer Labs",
      link: "https://www.sumerlabs.com/",
      badges: ["Remote"],
      title: "Mobile Developer",      
      start: "2023",
      end: "2024",
      description:
        "Desarrollé diferentes 'features' que mejoraron la experiencia de usuario en la aplicación móvil. Destaqué por mi capacidad de análisis y mis habilidades técnicas.",
    },
    {
      company: "Tyba",
      link: "https://tyba.com.co/",
      badges: ["Remote"],
      title: "Mobile Developer",      
      start: "2022",
      end: "2023",
      description:
        "Participé en el desarrollo y optimización de la aplicación web y móvil con Flutter. Destaqué por lograr mejorar los tiempos de carga de la aplicación hasta en un 50% y por desarrollar herramientas que ayudaron a todo el equipo de desarrollo a ser más eficientes.",
    },
    {
      company: "Evalua",
      link: "http://www.evalualos.com/index-software-ES.html",
      badges: [],
      title: "Software Engineer",      
      start: "2020",
      end: "2022",
      description:
        "Diseñé y desarrollé una aplicación móvil con Flutter y Node.js para la recolección, ordenamiento y análisis de datos. Estos datos recolectados son analizados con AI y presentados al usuario por medio de un 'dashboard' para ayudar en su toma de decisiones.",
    },
  ],
  skills: [
    "Flutter",
    "Dart",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js/Nest.js",    
  ],
  projects: [
    {
      title: "Compi",
      techStack: [
        "Side Project",
        "Flutter",
        "Dart",        
        "Node.js",
        "Nest.js",
      
      ],
      description: "App comparadora de precios en supermercados.",      
      link: {
        label: "compi.app",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Kairos",
      techStack: [
        "Side Project",
        "Flutter",
        "Dart"                   
      ],
      description:
      "App de gestión de reservas para restaurantes, reconocida internacionalmente por IBM.",      
      link: {
        label: "forbes.co",
        href: "https://forbes.co/2020/10/27/actualidad/desarrolladores-colombianos-ganaron-premio-de-ibm-con-app-que-crearon-en-la-pandemia",
      },
    },
   
  ],
} as const;
