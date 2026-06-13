import htmlIcon from "../assets/images/html5.png";
import cssIcon from "../assets/images/css3.png";
import tailwindIcon from "../assets/images/tailwind.png";
import reactIcon from "../assets/images/reactjs.png";
import nextIcon from "../assets/images/nextjs.png";
import jsIcon from "../assets/images/javascript.png";
import openaiIcon from "../assets/images/openai.png";
import firebaseIcon from "../assets/images/fire.png";
import supabaseIcon from "../assets/images/supabase.png";
import githubIcon from "../assets/images/github.png";
import hotelImage from "../assets/images/oceanViewHotel.png";
import barkboxImage from "../assets/images/BarkBox.png";
import ableImage from "../assets/images/able.png";
import portfolioBuilderImage from "../assets/images/ocp.png";
import kizoImage from "../assets/images/kizo.png";
import footballImage from "../assets/images/fc.png";
import eduheroImage from "../assets/images/edu-hero.png";
import aplHeroImage from "../assets/images/apl-hero.png"
import zipImage1 from "../assets/images/zip-1.png"
import psaHeroImage from "../assets/images/psaHero.png"


export const proofStats = [
  { value: "2+", label: "Years of experience" },
  { value: "20", label: "Projects completed" },
  { value: "10", label: "Products shipped, deployed, and in use" },
  { value: "5", label: "Business workflows built" },
  { value: "10", label: "Industries served" },
];

export const outcomes = [
  {
    title: "Increase conversions",
    description:
      "Clear pages and flows that guide users to take action.",
    icon: "trending",
  },
  {
    title: "Reduce manual work",
    description:
      "Dashboards and tools that simplify daily operations.",
    icon: "settings",
  },
  {
    title: "Launch faster",
    description:
      "Reusable components and practical delivery workflows.",
    icon: "rocket",
  },
  {
    title: "Improve customer experience",
    description:
      "Mobile-friendly interfaces that are easy to use.",
    icon: "smile",
  },
];

export const caseStudies = [
  
  {
    slug: "adansi-edu",
    image: eduheroImage,
    title: "Adansi EduConsult Website and Internal System",
    type: "Digital Experience Platform",
    problem:
      "Inability to track customer progress during operations",
    solution:
      "AI-powered CRM and CMS ",
    value:
      "Defined tracking of lead and client journey, easy management of website content.",
    stack: ["Custom CRM", "CMS", "Automated Workflow"],
    deckUrl: "",
    liveUrl: "https://adansieduconsult.com/",
    access: "Public demo available",
  },
  {
    slug: "adansi-properties",
    image: aplHeroImage,
    title: "Adansi Properties Website and Internal System",
    type: "Digital Experience Platform",
    problem:
      "Outdated website with no booking features, no database. Inability to track customer progress during operations",
    solution:
      "Modern website suite, AI-powered CRM and CMS ",
    value:
      "Defined tracking of lead and client journey, easy management of website content.",
    stack: ["Custom CRM", "CMS", "Automated Workflow"],
    deckUrl: "",
    liveUrl: "https://adansiproperties.com/",
    access: "Public demo available",
  },
  {
    slug: "zip-quiz-platform",
    image: zipImage1,
    title: "Quiz Generator and Multi-Player Platform for Africon",
    type: "Quiz Platform",
    problem:
      "Inability to assess memory retention and engagement during Africon trainings ",
    solution:
      "Multiplayer quiz platform with ai-powered quiz generation",
    value:
      "Fun engagament, assessment of knowledge and understanding with analytics",
    stack: ["Quiz generation", "Session Analytics", "Multiplayer"],
    deckUrl: "",
    liveUrl: "https://www.linkedin.com/posts/eba-davour_say-hello-to-zip-my-multiplayer-quiz-web-ugcPost-7449853054218072064-ri_-/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEb29wcBWCALJdT5-2Fq6I5PJ3lFWuhwIW4",
    access: "Internal Tool",
  },
  
  {
    slug: "hotel-management-system",
    image: hotelImage,
    title: "Hotel Management System",
    type: "Digital Experience Platform",
    problem:
      "Hotels need a clearer way for guests to book rooms and request services while staff manage operations.",
    solution:
      "Responsive booking website with concierge requests and a management dashboard.",
    value:
      "Improves guest self-service and centralizes booking and room management workflows.",
    stack: ["Booking", "Dashboard", "Real-time Room Management"],
    deckUrl: "",
    liveUrl: "https://hotelsample1ovh.netlify.app/",
    access: "Public demo available",
  },
  
];

export const additionalProjects = [
  
  {
    slug: "able-art-ai",
    image: ableImage,
    title: "Able ART AI",
    type: "AI image generation",
    problem:
      "Users need a guided way to generate themed AI visuals without learning complex AI tooling.",
    solution:
      "Prompt-based AI image generation tool with image upload, theme selection, and Africon styling support.",
    value:
      "Makes AI image generation accessible through guided prompts, image upload, and theme selection.",
    stack: ["AI Integration", "Image Generation", "Prompt UX"],
    access: "Public access",
    deckUrl: "",
    liveUrl: "https://able-art-ai.vercel.app/",
  },
  {
    slug: "one-click-portfolio-builder",
    image: portfolioBuilderImage,
    title: "One-Click Portfolio Website Builder",
    type: "AI automation tool",
    problem:
      "Professionals struggle to turn resumes into polished personal websites quickly.",
    solution:
      "AI-assisted CV parsing, editable profile flow, and a publishable portfolio output.",
    value:
      "Reduces the time from resume to live website and helps non-dev users present themselves professionally.",
    stack: ["CV Parsing", "Landing Page Builder"],
    deckUrl: "",
    liveUrl: "https://corax-one-click-portfolio.vercel.app/",
    access: "Public demo available",
  },
  {
    slug: "kizo-jewellery-ecommerce",
    image: kizoImage,
    title: "KIZO Jewellery Ecommerce",
    type: "Ecommerce Platform",
    problem:
      "A jewellery vendor needed a storefront and product/order management workflow.",
    solution:
      "Customer-facing ecommerce experience with admin-facing product and order management.",
    value:
      "Supports online sales, product visibility, and operational control.",
    stack: ["Payment Integration", "Product Management"],
    deckUrl: "",
    liveUrl: "https://kizo-azure.vercel.app/",
    access: "Public demo available",
  },
  {
    slug: "barkboxgh",
    image: barkboxImage,
    title: "BarkBoxGh",
    type: "Appointment booking",
    problem:
      "Pet owners need a simpler way to find and book appointments with vets and dog-service professionals.",
    solution:
      "Appointment booking interface for discovering providers and scheduling pet care services.",
    value:
      "Helps pet owners discover and book veterinary or dog-service appointments with less friction.",
    stack: ["Appointment Booking", "Marketplace Flow", "Frontend Only"],
    access: "Public demo available",
    deckUrl: "",
    liveUrl: "https://barkbox.netlify.app/",
  },
  {
    slug: "psa-website",
    image: psaHeroImage,
    title: "Website and Magagement Platform for Ministry Leader",
    type: "Digital Experience Platform",
    problem:
      "Need of central platform to take and manage bookings, events and collect donations.",
    solution:
      "Modern website with appointment booking, payment integration and admin with event and calendar management",
    value:
      "Seamless appointment management and secured platform for collecting donations globally",
    stack: ["Payment Integration", "Custom Calendar", "Appointment booking"],
    deckUrl: "",
    liveUrl: "https://psa-website-omega.vercel.app/",
    access: "Public access",
  }
];

export const projectCarouselItems = [...caseStudies, ...additionalProjects];

export const experiences = [
  {
    company: "Africon",
    role: "Frontend Engineer",
    period: "March 2025 - Present",
    description:
      "Building customer-facing travel tools and AI-assisted workflows for a travel technology platform.",
    descriptionParts: [
      "Led the development of a comprehensive ",
      { text: "customer portal", isKey: true },
      " for streamlined travel management. Implemented an intelligent ",
      { text: "chatbot system", isKey: false },
      " for automated customer support and ",
      { text: "visa eligibility assessment", isKey: false },
      ". Engineered an ",
      { text: "AI-powered trip builder", isKey: false },
      " to enhance user experience and personalization.",
    ],
    stack: ["ReactJS", "NextJS", "UI/UX", "AI Integration"],
    type: "full-time contract",
    highlights: [
      "Led development of a customer portal for streamlined travel management",
      "Implemented chatbot support and visa eligibility assessment flows",
      "Engineered an AI-powered trip builder for better travel planning",
    ],
    codeSnippet:
      "const africonImpact = [\n  'customer portal for travel management',\n  'chatbot support flow',\n  'visa eligibility assessment UX',\n  'AI-powered trip builder'\n];",
  },
  {
    company: "MEST Africa",
    role: "Web Development Trainee",
    period: "Sep. 2024 - Nov. 2024",
    description:
      "Completed intensive frontend training focused on production-style React applications.",
    descriptionParts: [
      "After my National Service, I enrolled in this 3-month training program where I gained knowledge and experience as a ",
      { text: "frontend web developer", isKey: true },
      " in ",
      { text: "HTML", isKey: false },
      ", ",
      { text: "Tailwind", isKey: false },
      ", ",
      { text: "JavaScript", isKey: false },
      ", and ",
      { text: "React", isKey: false },
      ". I built many projects, including my ",
      { text: "vet appointment booking web app", isKey: false },
      ".",
    ],
    stack: ["HTML", "Tailwind", "JavaScript", "React"],
    type: "training",
    highlights: [
      "Built frontend projects with HTML, Tailwind, JavaScript, and React",
      "Created a vet appointment booking web app",
      "Practiced responsive business website delivery",
    ],
    codeSnippet:
      "const mestBuilds = [\n  'React product interfaces',\n  'vet appointment booking app',\n  'responsive business websites',\n  'Tailwind component practice'\n];",
  },
  {
    company: "CalBank",
    role: "Operations Officer",
    period: "Nov. 2023 - July 2024",
    description:
      "Worked directly with customers and banking operations, building strong workflow and service discipline.",
    descriptionParts: [
      "I processed ",
      { text: "bank transactions", isKey: true },
      " for customers and branch activities, handled ",
      { text: "cash", isKey: false },
      ", accounted for all transactions by ",
      { text: "balancing daily", isKey: false },
      ", and promoted bank products and services by ",
      { text: "educating customers", isKey: false },
      ".",
    ],
    stack: ["Banking Operations", "Customer Service", "Transaction Processing"],
    type: "national service",
    highlights: [
      "Processed bank transactions for customers and branch activities",
      "Handled cash and balanced daily transaction records",
      "Promoted bank products by educating customers",
    ],
    codeSnippet:
      "const calbankDiscipline = [\n  'transaction processing',\n  'cash handling and balancing',\n  'customer education',\n  'branch operations support'\n];",
  },
  {
    company: "Toyota Ghana Company Limited",
    role: "IT Systems Administrator Intern",
    period: "Oct. 2022 - Dec. 2022 & May 2023",
    description:
      "Supported IT infrastructure, system reliability, and device configuration across the company premises.",
    descriptionParts: [
      "I managed ",
      { text: "IT infrastructure", isKey: true },
      " and ensured ",
      { text: "system reliability", isKey: false },
      " through regular ",
      { text: "performance monitoring", isKey: false },
      " and ",
      { text: "troubleshooting", isKey: false },
      ". I also collaborated with ",
      { text: "telecom", isKey: false },
      " and ",
      { text: "CCTV installation", isKey: false },
      " personnel to configure devices on the premises.",
    ],
    stack: ["IT Infrastructure", "System Administration", "Network Configuration"],
    type: "internship",
    highlights: [
      "Managed IT infrastructure and supported system reliability",
      "Monitored performance and supported troubleshooting",
      "Collaborated on telecom and CCTV device configuration",
    ],
    codeSnippet:
      "const toyotaSupport = [\n  'IT infrastructure support',\n  'system monitoring and troubleshooting',\n  'networked device configuration',\n  'telecom and CCTV collaboration'\n];",
  },
];

export const capabilityGroups = [
  {
    title: "Frontend Engineering",
    items: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind"],
  },
  {
    title: "Product UI",
    items: ["Responsive design", "Accessibility", "Forms", "Dashboards", "User flows"],
  },
  {
    title: "AI Integrations",
    items: ["OpenAI", "Prompt flows", "Image generation", "AI-assisted builders"],
  },
  {
    title: "Business Workflows",
    items: ["Booking systems", "Ecommerce", "Admin panels", "Customer portals"],
  },
  {
    title: "Delivery",
    items: ["GitHub", "Deployment", "API integration", "Debugging", "Iteration"],
  },
];

export const skills = [
  { icon: htmlIcon, text: "HTML5" },
  { icon: cssIcon, text: "CSS3" },
  { icon: tailwindIcon, text: "Tailwind" },
  { icon: reactIcon, text: "React" },
  { icon: nextIcon, text: "Next.js" },
  { icon: jsIcon, text: "JavaScript" },
  { icon: openaiIcon, text: "AI Agents" },
  { icon: firebaseIcon, text: "Firebase" },
  { icon: supabaseIcon, text: "Supabase" },
  { icon: githubIcon, text: "GitHub" },
];
