import flutter from '../assets/tech/flutter.png';
import flutterflow from '../assets/tech/FlutterFlow.png';
import python from '../assets/tech/python.png'
import firebase from '../assets/tech/firebase.png'
import supabase from '../assets/tech/supabase.png'
import kiyaequb from '../assets/KiyaEqub.jpg'
import hub from '../assets/hub.png'
import Spotify from '../assets/spotify.png'


import {
  
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  git,
  figma,
  starbucks,
  tesla,
  shopify,
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
    title: "Flutter Developer",
    icon: web,
  },
  {
    title: "FlutterFlow Developer",
    icon: mobile,
  },
  {
    title: "Firebase Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];



const experiences = [
  {
    title: "Flutter Developer",
    company_name: "A2SV",
    icon: flutter,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing a platform for users to rate products in hotels and restaurants, helping others make informed decisions.",
      "Designing a user-friendly interface to enable easy product rating and review submission.",
      "Implementing a robust data storage system to store ratings and reviews for future reference by new users.",
      "Collaborating with the team to ensure the app's accuracy and usability, making it easy for newcomers to find the best products.",
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
    title: "Flutter Developer | UI/UX Designer",
    company_name: "Kiya Equb",
    icon: flutter,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Designing and developing a user-friendly platform for managing Equb savings groups efficiently.",
      "Collaborating with users to understand their needs and optimize the app's features for easy Equb management.",
      "Implementing secure payment and contribution tracking to ensure transparency and reliability.",
      "Providing real-time notifications and reminders for contributions, payouts, and group updates.",]
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
    source_code_link: "https://zel-hub7.github.io/DishCatalog-API/dist/",
  },
  {
    name: "Fashion Hub",
    description:
      "An e-commerce app offering a wide range of stylish clothing and accessories. Users can browse the latest trends, add items to their cart, and enjoy a seamless shopping experience for all their fashion needs.",
    tags: [
      {
        name: "Flutter",
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
    image: hub,
    source_code_link: "https://github.com/",
  },
  {
    name: "Spotify Audio streaming",
    description:
      "A music streaming app that offers a vast library of songs and playlists. Users can discover new music, create their own playlists, and enjoy high-quality audio streaming for all their favorite tracks.",
    tags: [
      {
        name: "Flutter",
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
    image: Spotify,
    source_code_link: "https://github.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects, navLinks };
