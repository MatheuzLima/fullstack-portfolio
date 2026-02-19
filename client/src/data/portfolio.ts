export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: {
    demo: string;
    github: string;
  };
  image?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const portfolioData = {
  personal: {
    name: "Matheus Lima",
    role: `Full Stack Engineer`,
    // tagline: "EDITAR AQUIIIIII!",
    summary: "Atuo no Front-End, Back-End e infraestrutura em cloud. Levo aplicações do código à produção com automação, CI/CD e foco em escalabilidade.", //  Autodidata com experiência em desenvolvimento web e infraestrutura escalável automação de . React, Docker, AWS, Kubernetes, IaC, CI/CD e Observabilidade. Levo aplicações do código à produção com automação e confiabilidade.
    location: "São Sebastião, SP", 
    email: "contato.matheuslimams@gmail.com",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS"]  // items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "GraphQL", "Redis"] // items: ["Node.js", "Express", "PostgreSQL", "GraphQL", "Redis", "Drizzle ORM"]
    },
    {
      category: "DevOps",
      items: ["Docker", "AWS", "CI/CD", "Linux", "Kubernetes", "Terraform"] // items: ["Docker", "AWS", "CI/CD", "Vercel", "Linux", "Nginx"]
    },
    // {
    //   category: "Tools",
    //   items: ["Git", "Figma", "Postman", "Jest", "Vite"] // items: ["Git", "VS Code", "Figma", "Postman", "Jest", "Vite"]
    // }
  ],
  projects: [
    // {
    //   title: "E-Commerce Dashboard",
    //   description: "A comprehensive analytics dashboard for online retailers featuring real-time data visualization, inventory management, and sales reporting.",
    //   tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    //   links: {
    //     demo: "#",
    //     github: "#"
    //   },
    //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    // },
    // {
    //   title: "Task Master AI",
    //   description: "Smart project management tool that uses AI to categorize tasks and predict project timelines based on team velocity.",
    //   tags: ["TypeScript", "OpenAI API", "Next.js", "Tailwind"],
    //   links: {
    //     demo: "#",
    //     github: "#"
    //   },
    //   image: "https://images.unsplash.com/photo-1555421689-492a1880ce70?w=800&q=80"
    // },
    // {
    //   title: "DevSocial",
    //   description: "A social network for developers to share snippets, discuss architecture, and find collaborators for side projects.",
    //   tags: ["MERN Stack", "Socket.io", "Redis", "AWS S3"],
    //   links: {
    //     demo: "#",
    //     github: "#"
    //   },
    //   image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
    // }
  ],
  experience: [
    // {
    //   role: "Senior Frontend Engineer",
    //   company: "TechFlow Inc.",
    //   period: "2021 - Present",
    //   description: "Leading the frontend team in re-architecting the core product using Next.js. Improved performance scores by 40% and reduced build times by 50%."
    // },
    // {
    //   role: "Full Stack Developer",
    //   company: "StartUp Catalyst",
    //   period: "2019 - 2021",
    //   description: "Developed and maintained multiple client projects. Implemented real-time features using WebSockets and managed AWS infrastructure."
    // },
    {
      role: "Junior Desenvolvedor Web",
      company: "Creative Agency",
      period: "2018 - 2019",
      description: "Colaborei com designers para implementar páginas de destino responsivas. Adquiri experiência nos fundamentos modernos de CSS e JavaScript."
    }
  ]
};
