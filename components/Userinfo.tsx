// User Information
export type UserInfo = {
    name: string;
    designation: string;
    degree: string;
  };

  export const User: UserInfo = {
    name: 'Om Rawat',
    designation: 'Full-stack Developer',
    degree: 'CS Undergrad'
  };
  
  export type Skills = {
    skill: string;
  };
  
  export const skills: Skills[] = [
    { skill: 'UI/UX' },
    { skill: 'Fullstack' },
    { skill: 'UI/UX' },
    { skill: 'Fullstack' },
    { skill: 'UI/UX' },
    { skill: 'Fullstack' },
  ];
  

  // Work Experience
  export type WorkExperience = {
    id: string;
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
  };
  
  export const workExperienceData: WorkExperience[] = [
    {
      id: '01',
      title: 'Full Stack Developer Intern',
      company: 'Flib',
      location: 'Gurgaon',
      period: 'May 2024 - October 2024',
      description: 'Engineered the Flib web app, focusing on frontend architecture and performance optimization. Enhanced SEO and load times with image optimization and lazy loading. Tech stack: Next.js 14, TypeScript, Hygraph, Tailwind CSS, Framer Motion.',
    },
    {
      id: '02',
      title: 'CSR Intern',
      company: 'CountryEdu Private Limited',
      location: 'Gurgaon',
      period: 'June 2023 - July 2023',
      description: 'Identified and resolved website issues, including broken links and formatting. Collaborated as a team member to improve the website and wrote content for various services.',
    },
  ];
  
  // Social Data
  export type SocialData = {
    resume: string;
    gmail: string;
    github: string;
    twitter: string;
    linkedin: string;
  };
  
  export const socialContent: SocialData = {
    resume: '/omrawat.xyz',
    gmail: 'mailto:omraw29@gmail.com',
    github: 'https://github.com/omrawat23',
    twitter: 'https://x.com/omraw29',
    linkedin: 'https://linkedin.com/in/omrawat23'
  };
  
  // Project Data
  export type ProjectData = {
    title: string;
    image: string;
    description: string;
    tags: string[];
    link: {
      github: string;
      twitter?: string;
      live?: string;
    };
  };
  
  export const projectsContent: ProjectData[] = [
    {
        title: "Feedbackify",
        description:
          "Feedbackify allows users to integrate a feedback widget into their applications. ",
        image:"/feedback.png",
          tags: [
          "Next.js",
          "Typescript",
          "Drizzle ORM",
          "Supabase",
          "NextAAuth",
          "TailwindCSS",
          "Shadcn UI",
        ],
        link: {
          github: "https://github.com/omrawat23/feedback.git",
          twitter: "",
          live: "https://feedbackifyy.vercel.app",
        },
      },
      {
        title: "Spotifind",
        description:
          "Spotifind allows you to connect to your Spotify account to generate custom playlists based on your musical taste.",
          image:"/feedback.png",
          tags: [
          "Next.js",
          "React",
          "TypeScript",
          "Magic UI",
          "Spotify API",
          "Gemini API",
        ],
        link: {
          github: "https://github.com/omrawat23/playlist.git",
          twitter: "",
          live: "https://matchmakerr.vercel.app",
        },
      },
      {
        title: "MyBlog",
        description:
          "This blog app that allows users to create, edit, and delete blog posts seamlessly. ",
          image:"/feedback.png",
          tags: [
          "React",
          "Node.js",
          "Express.js",
          "Mongoose",
          "MongoDB",
          "bCrypt",
          "JWT",
          "Tailwind CSS",
        ],
        link: {
          github: "https://github.com/omrawat23/guts",
          twitter: "https://x.com/omraw29/status/1842634045328629876",
          live: "https://bloggifyy.vercel.app",
        },
      },
      {
        title: "Pokédex",
        description:
          "The Pokédex application is a  web app that allows users to explore and provides detailed information about each Pokémon.",
          image:"/feedback.png",
          tags: [
          "React",
          "PokeAPI",
          "Tailwind CSS",
        ],
        link: {
          github: "https://github.com/omrawat23/pokedex.git",
          twitter: "https://x.com/omraw29/status/1845615754944635183",
          live: "https://pokedex-pookie.vercel.app",
        },
      },
      {
        title: "Pookie-Tate",
        description: "A site where you can chat with and listen to Andrew Tate sounding like a 'pookie'.",    
        image:"/feedback.png",
        tags: [
          "React",
          "Node.js",
          "Express.js",
          "Neets AI",
          "Gemini",
        ],
        link: {
          github: "",
          twitter: "https://x.com/omraw29/status/1846833912783233409",
          live: "https://pookie-tate.vercel.app",
        },
      },
      {
        title: "focusplay",
        description:
          "FocusPlay is a Chrome extension designed to enhance productivity by managing video playback.",
          image:"/feedback.png",
          tags: [
          "Javascript",
          "HTML",
          "CSS",
        ],
        link: {
          github: "https://github.com/omrawat23/focusplay/tree/main",
          twitter: "",
          live: "",
        },
      },
  ];