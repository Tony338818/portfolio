type Props = {
  image: string;
  tech_stack: string[];
  title: string;
  subtitle: string;
  onClick: () => void;
};


// Cycles through accent colors for the tags
const TAG_COLORS = [
  {
    bg: "rgba(255, 107, 61, 0.15)",
    border: "rgba(255, 107, 61, 0.5)",
    color: "#ff6b3d",
  },
  {
    bg: "rgba(56, 189, 248, 0.12)",
    border: "rgba(56, 189, 248, 0.4)",
    color: "#38bdf8",
  },
  {
    bg: "rgba(163, 230, 53, 0.12)",
    border: "rgba(163, 230, 53, 0.4)",
    color: "#a3e635",
  },
  {
    bg: "rgba(251, 191, 36, 0.12)",
    border: "rgba(251, 191, 36, 0.4)",
    color: "#fbbf24",
  },
];

function ProjectCard({ image, tech_stack, title, subtitle, onClick }: Props) {
  return (
    <div className="project-card-container">
      <div className="project-card">
        <div className="img">
          <img src={image} alt={title} />
        </div>

        <div className="card-body">
          <div className="stack">
            {tech_stack.map((tech, index) => {
              const style = TAG_COLORS[index % TAG_COLORS.length];
              return (
                <span
                  key={index}
                  className="tag"
                  style={{
                    background: style.bg,
                    border: `1px solid ${style.border}`,
                    color: style.color,
                  }}
                >
                  {tech}
                </span>
              );
            })}
          </div>

          <div className="card-footer">
            <div className="card-footer-left">
              <h2 className="card-title">{title}</h2>
              <h2 className="card-subtitle">{subtitle}</h2>
            </div>

            <button
              className="card-arrow-btn"
              onClick={onClick}
              aria-label="View project"
            >
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard