import ProjectCard from "../components/project_card";
import tradeaidimg from "../assets/tradeaid_1.png";
import botnovaimg from "../assets/botnova_1.png";
import ProjectModal from "../components/project_modal";
import miniapiimg from "../assets/mini_api.png";
import miniapiimg1 from "../assets/mini_api_1.png";
import miniapiimg2 from "../assets/mini_api_2.png";
import miniapiimg3 from "../assets/mini_api_3.png";
import { useState } from "react";

function Project() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const projects = [
    {
      image: tradeaidimg,
      images: [tradeaidimg, botnovaimg],
      title: "TradeAid",
      subtitle:
        "AI-powered WhatsApp business assistant that automates customer support, order handling, and business workflows in real-time.",
      readme:
        "TradeAid is a conversational AI system built for businesses to automate customer interactions directly via WhatsApp. It processes natural language queries, manages orders, and maintains structured conversation history using a scalable FastAPI backend and PostgreSQL database.",
      highlights: [
        "Automates customer interactions and reduces manual response time",
        "AI-based intent detection and smart replies using Gemini API",
        "Scalable backend handling concurrent conversations in real-time",
        "Structured storage for users, orders, and chat history",
      ],
      tech_stack: ["Python", "FastAPI", "PostgreSQL", "Twilio", "Gemini API"],
      github_link: "https://github.com/yourusername/tradeaid",
      live_link: "https://tradeaid-demo.com",
    },

    {
      image: botnovaimg,
      images: [botnovaimg],
      title: "Church Admin & Communication System",
      subtitle:
        "A centralized admin platform for managing church members and enabling real-time mass communication at scale.",

      readme:
        "A full-stack administrative system designed to replace manual church management processes with a centralized digital platform. It enables real-time member data management, structured communication workflows, and scalable messaging infrastructure for large congregations.",

      highlights: [
        "Centralized admin dashboard for real-time member management",
        "Integrated Twilio bulk messaging to reach 1,500+ members instantly",
        "Eliminated manual record handling and improved operational efficiency",
        "Scalable backend architecture designed for future feature expansion",
      ],

      tech_stack: ["Python", "FastAPI", "PostgreSQL", "Cloudinary"],

      github_link: "https://github.com/yourusername/church-admin-system",
      live_link: "",
    },

    {
      image: "/project3.png",
      images: ["/project3.png"],
      title: "Flutter Bookstore App",
      subtitle:
        "A full-stack e-commerce mobile application with admin panel, real-time database sync, and advanced search/filtering.",
      readme:
        "A production-style mobile bookstore built with Flutter and Firebase. It includes user authentication, book discovery, cart functionality, and an admin dashboard for managing inventory. Firestore enables real-time updates across users.",
      highlights: [
        "User authentication, cart system, and order management",
        "Admin dashboard for managing books and inventory",
        "Search and filtering by price, category, and release date",
        "Efficient state management with real-time updates",
      ],
      tech_stack: ["Flutter", "Firebase", "Firestore", "REST APIs"],
      github_link: "https://github.com/yourusername/flutter-bookstore",
      live_link: "",
    },

    {
      image: miniapiimg,
      images: [miniapiimg1, miniapiimg2, miniapiimg3],
      title: "Mini Banking API",
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
      github_link: "https://github.com/yourusername/banking-api",
      live_link: "",
    },
  ];

  return (
    <div className="project-container">
      <div className="projects">
        {/* TOP SECTION (unchanged) */}
        <div className="project-top">
          <div className="top-left">
            <h3>
              <div className="line"></div>
              <span className="name">My Portfolio</span>
            </h3>
            <h1>
              My Latest <span>Projects</span>
            </h1>
          </div>
          <div className="top-right">
            <button className="view-all-btn">
              View All Projects
              <span className="btn-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className="project-content">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
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
    </div>
  );
}

export default Project;
