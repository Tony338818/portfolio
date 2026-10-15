import ProjectCard from "../components/project_card";
import ProjectModal from "../components/project_modal";
import tradeaidimg from "../assets/tradeaid_2.png";
import tradeaidLive from "../assets/tradeaid_live.png";
import miniapiimg from "../assets/mini_api.png";
import miniapiimg1 from "../assets/mini_api_1.png";
import miniapiimg2 from "../assets/mini_api_2.png";
import miniapiimg3 from "../assets/mini_api_3.png";
import church from '../assets/church.png'
import church1 from '../assets/church_1.png'
import tvsmimg from '../assets/tvsm.png'
import midasimg from '../assets/midas-core.svg'
import { useState } from "react";

function Project() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [filter, setFilter] = useState("All work");
  const projects = [
    {
      image: midasimg,
      images: [],
      title: "Midas Core",
      category: "Backend",
      status: "Virtual experience project",
      accent: "purple",
      subtitle: "An event-driven transaction processing service built with Java, Spring Boot, and Kafka.",
      readme: "Built during the JPMorgan Chase & Co. Software Engineering Virtual Experience on Forage. Midas Core asynchronously processes financial transactions, validates account ownership and available balances, and persists transaction data with Spring Data JPA and H2. The preview illustrates the system architecture.",
      highlights: [
        "Processed transaction events asynchronously using Apache Kafka",
        "Validated account ownership and available balances before transfers",
        "Persisted balances, transaction relationships, and timestamps",
        "Built as a Forage virtual experience project",
      ],
      tech_stack: ["Java 17", "Spring Boot", "Kafka", "Spring Data JPA", "H2", "REST APIs"],
      github_link: "https://github.com/Tony338818/forage-midas",
      live_link: "",
    },
    {
      image: tvsmimg,
      images: [],
      title: "The Vision Spire Ministry (TVSM)",
      category: "Websites",
      status: "Live website",
      accent: "blue",
      subtitle:
        "A public ministry website connecting visitors with church services, events, and community life.",
      readme:
        "A multi-page website built for The Vision Spire Ministry to introduce the church, share service schedules and events, and help new visitors plan their first visit. The site brings ministry information, a community gallery, and contact details together in one accessible online presence.",
      highlights: [
        "Dedicated pages for the ministry, services, events, and gallery",
        "Visitor information and clear pathways to plan a first visit",
        "Video-led homepage with service schedules and visitor FAQs",
        "Live website hosted on Netlify",
      ],
      tech_stack: ["Netlify"],
      github_link: "",
      live_link: "https://visionspireministyweb.netlify.app/index.html",
    },
    {
      image: tradeaidLive,
      images: [tradeaidimg, tradeaidimg],
      title: "TradeAid",
      category: "AI & Applications",
      status: "Frontend live · Integration pending",
      accent: "green",
      subtitle:
        "AI-powered WhatsApp business assistant for customer support and order management. Frontend complete; backend integration in progress.",
      readme:
        "TradeAid is a WhatsApp-based business assistant. I worked across most of its backend, including the APIs, PostgreSQL database, Redis, and NLP components, thinking through how the services work together to support business workflows. The React and TypeScript frontend is complete and hosted on Netlify; connecting it to the backend is the remaining launch step.",
      highlights: [
        "Completed React and TypeScript frontend hosted on Netlify",
        "Designed for AI-assisted WhatsApp support and order management",
        "Built APIs and worked across PostgreSQL, Redis, and NLP components",
        "Frontend-to-backend integration is the remaining launch milestone",
      ],
      tech_stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "NLP", "Twilio", "React", "TypeScript"],
      github_link: "https://github.com/Tony338818/BOSS/tree/development",
      live_link: "https://tradeaid-app.netlify.app/",
    },

    {
      image: church,
      images: [church, church1],
      title: "Church Admin & Communication System",
      category: "AI & Applications",
      status: "Full-stack system",
      accent: "purple",
      subtitle:
        "A centralized admin platform for managing church members and enabling real-time mass communication at scale.",

      readme:
        "A full-stack administrative system designed to replace manual church management processes with a centralized digital platform. It enables real-time member data management, structured communication workflows, and scalable messaging infrastructure for large congregations.",

      highlights: [
        "Centralized admin dashboard for real-time member management",
        "Built member and communication workflows for a community of 1,500+ members",
        "Implemented 30 endpoints with JWT authentication and bcrypt password hashing",
        "Scalable backend architecture designed for future feature expansion",
      ],

      tech_stack: ["Python", "FastAPI", "SQLAlchemy", "JWT", "Cloudinary", "Resend"],

      github_link: "",
      live_link: "",
    },

    {
      image: miniapiimg,
      images: [miniapiimg1, miniapiimg2, miniapiimg3],
      title: "Mini Banking API",
      category: "Backend",
      status: "Backend project",
      accent: "orange",
      subtitle:
        "A secure backend system simulating core banking operations including transactions, authentication, and account management.",
      readme:
        "A backend-focused banking system that simulates real-world financial operations such as account management, secure authentication, and transaction handling. Built with an emphasis on data consistency, validation, and API design best practices.",
      highlights: [
        "Secure authentication and authorization using JWT",
        "Transaction handling with validation and consistency checks",
        "Well-structured RESTful APIs with error handling",
        "API documentation ready for Postman/Swagger integration",
      ],
      tech_stack: ["Python", "FastAPI", "PostgreSQL", "JWT"],
      github_link: "https://github.com/Tony338818/mini-bank-api",
      live_link: "",
    },
  ];

  return (
    <section className="project-container" id="projects" aria-labelledby="projects-title">
      <div className="projects">
        <div className="section-heading"><span className="eyebrow">IDEAS INTO REALITY</span><h2 id="projects-title">Selected <span>projects.</span></h2><p>A few things I’ve brought to life. Built to solve real problems.</p></div>
        <div className="project-toolbar"><div className="project-filters" role="group" aria-label="Filter projects">{["All work", "Websites", "AI & Applications", "Backend"].map((category) => <button key={category} aria-pressed={filter === category} className={filter === category ? "is-active" : ""} onClick={() => setFilter(category)}>{category}</button>)}</div><span className="project-count" aria-live="polite">{projects.filter(p => filter === "All work" || p.category === filter).length} PROJECTS</span></div>
        <div className="project-content" id="project-results">
          {projects.filter(project => filter === "All work" || project.category === filter).map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
              number={projects.indexOf(project) + 1}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Project;
