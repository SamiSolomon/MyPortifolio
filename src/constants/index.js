import flutter from '../assets/tech/flutter.png';
import flutterflow from '../assets/tech/FlutterFlow.png';
import python from '../assets/tech/python.png'
import firebase from '../assets/tech/firebase.png'
import supabase from '../assets/tech/supabase.png'
import kiyaequb from '../assets/KiyaEqub.jpg'
import next from '../assets/next.png'
import nuxt from '../assets/nuxt.png'
import fashion from '../assets/fashion.png'
import hospital from '../assets/hospital.png'


import {
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  git,
  figma,
} from "../assets";

const technologies = [
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "FlutterFlow",
    icon: flutterflow,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Supabase",
    icon: supabase,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Next Js Developer",
    icon: next,
  },
  {
    title: "Flutter Developer",
    icon: web,
  },
  {
    title: "Nuxt Js Developer",
    icon: nuxt,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];



const experiences = [
  {
    title: "Full-Stack  Developer",
    company_name: "Center Of Biomedical Engineering",
    icon: next,
    iconBg: "#383E56",
    date: "March 2022 - April 2023",
    points: [
     "Building a platform for users to find and rate hospital services, helping others choose the best care options.",
     "Creating a user-friendly interface to simplify the process of providing feedback and submitting reviews on healthcare services.",
     "Developing a reliable data management system to store reviews and service information for future reference by new patients.",
     "Working with a team to ensure the platform's accuracy and usability, making it easy for users to locate trusted healthcare providers in their area."
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Ewenet Communication PLC",
    icon: flutter,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing a platform to connect actors and models with casting agents and directors seeking talent.",
      "Ensuring a seamless user experience by implementing a clear registration process for both actors/models and directors/casting agents.",
      "Integrating an existing API and connecting it with an algorithm to match talent with job opportunities effectively.",
      "Collaborating with the team to test and refine the app's features for optimal performance and usability.",
    ],
  },
  {
    title: "Nuxt Js Developer ",
    company_name: "kiya Equib",
    icon: nuxt,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Collaborating with stakeholders to understand requirements and optimize the dashboard for efficient financial tracking.",
      "Implementing secure payment handling and detailed contribution tracking to ensure transparency and trust.",
      "Integrating real-time notifications and reminders for payments, distributions, and client updates.",
      "Creating comprehensive reports and analytics to provide insights into collection trends and distribution efficiency."
    ]
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Kiya Equb App",
    description:
      "An app that enables users to join or create traditional Ethiopian saving equbs. Users can participate in existing equbs, track contributions, and receive payouts, making community-based saving easy and accessible.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Rest API",
        color: "green-text-gradient",
      },
      {
        name: "Provider",
        color: "pink-text-gradient",
      },
    ],
    image: kiyaequb,
    source_code_link: "https://github.com/SamiSolomon/eccomerce_moblie_App",
  },
  {
    name: "Fashion Hub",
    description:
      "An e-commerce app offering a wide range of stylish clothing and accessories. Users can browse the latest trends, add items to their cart, and enjoy a seamless shopping experience for all their fashion needs.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Bloc",
        color: "pink-text-gradient",
      },
    ],
    image: fashion,
    source_code_link: "https://github.com/SamiSolomon/Dashboard",
  },
  {
    name: "Hospital Information Provider",
    description:
                "A comprehensive platform that provides detailed information about hospitals, including services offered, contact details, and locations. Users can search for hospitals, read reviews, and make informed decisions about their healthcare needs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Bloc",
        color: "pink-text-gradient",
      },
    ],
    image: hospital,
    source_code_link: "https://github.com/SamiSolomon/ThesisTrial",
  },
  
];

export { services, technologies, experiences, testimonials, projects, navLinks };
