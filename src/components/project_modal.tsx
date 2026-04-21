type ModalProps = {
  project: {
    image: string;
    images?: string[];
    title: string;
    subtitle: string;
    readme?: string;
    highlights?: string[];
    tech_stack: string[];
    github_link?: string;
    live_link?: string;
  };
  onClose: () => void;
};

function ProjectModal({ project, onClose }: ModalProps) {
  const allImages = [project.image, ...(project.images ?? [])];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-inner">

          {/* ── LEFT: image gallery ── */}
          <div className="modal-gallery">
            <div className="gallery-hero">
              <img src={allImages[0]} alt={project.title} />
            </div>
            {allImages.length > 1 && (
              <div className="gallery-thumbs">
                {allImages.slice(1).map((src, i) => (
                  <div className="gallery-thumb" key={i}>
                    <img src={src} alt={`${project.title} screenshot ${i + 2}`} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ── RIGHT: readme + meta ── */}
          <div className="modal-body">
            <h2>{project.title}</h2>
            <p className="modal-subtitle">{project.subtitle}</p>

            <div className="modal-divider" />

            {/* Mini README */}
            {project.readme && (
              <div className="modal-readme">
                <h3>About this project</h3>
                <p>{project.readme}</p>
              </div>
            )}

            {/* Highlights */}
            {project.highlights && (
              <div className="modal-highlights">
                <h3>Highlights</h3>
                <ul>
                  {project.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="modal-divider" />

            {/* Tech stack */}
            <div className="modal-tech">
              {project.tech_stack.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            {/* Links */}
            <div className="modal-links">
              {project.github_link && (
                <a href={project.github_link} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              )}
              {project.live_link && (
                <a href={project.live_link} target="_blank" rel="noreferrer">
                  Live Demo ↗
                </a>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;