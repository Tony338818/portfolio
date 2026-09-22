type Props = {
  image: string;
  tech_stack: string[];
  title: string;
  subtitle: string;
  onClick: () => void;
};


function ProjectCard({ image, tech_stack, title, subtitle, onClick }: Props) {
  return (
    <div className="project-card-container">
      <article className="project-card" onClick={onClick}>
        <div className="img">
          <img src={image} alt={title} />
        </div>

        <div className="card-body">
          <div className="stack">
            {tech_stack.map((tech) => <span key={tech} className="tag">{tech}</span>)}
          </div>

          <div className="card-footer">
            <div className="card-footer-left">
              <h2 className="card-title">{title}</h2>
              <h2 className="card-subtitle">{subtitle}</h2>
            </div>

            <button
              className="card-arrow-btn"
              onClick={(event) => { event.stopPropagation(); onClick(); }}
              aria-label={`View ${title} project details`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProjectCard
