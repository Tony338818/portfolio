import { useEffect, useRef, useState } from "react";
type ModalProps = {
  project: { image: string; images?: string[]; title: string; subtitle: string; readme?: string; highlights?: string[]; tech_stack: string[]; github_link?: string; live_link?: string; status?: string; category?: string };
  onClose: () => void;
};
export default function ProjectModal({ project, onClose }: ModalProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [activeImage, setActiveImage] = useState(0);
  const allImages = [...new Set([project.image, ...(project.images ?? [])])];
  useEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => { element?.close(); document.body.style.overflow = previousOverflow; };
  }, []);
  return (
    <dialog ref={dialog} className="project-dialog" aria-labelledby="modal-title" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="modal-shell">
        <div className="modal-topbar"><span>PROJECT DETAILS / {project.category}</span><button className="modal-close" onClick={onClose} aria-label="Close project details" autoFocus>✕</button></div>
        <div className="modal-inner">
          <div className="modal-gallery">
            <div className="gallery-hero"><img src={allImages[activeImage]} alt={`${project.title} screenshot ${activeImage + 1}`} /></div>
            {allImages.length > 1 && <div className="gallery-thumbs">{allImages.map((src, i) => <button className={i === activeImage ? "is-active" : ""} onClick={() => setActiveImage(i)} aria-label={`Show screenshot ${i + 1}`} aria-pressed={i === activeImage} key={src}><img src={src} alt="" /></button>)}</div>}
            <p className="gallery-caption">{String(activeImage + 1).padStart(2, "0")} / {String(allImages.length).padStart(2, "0")} — PROJECT PREVIEW</p>
          </div>
          <div className="modal-body">
            <span className="modal-status">{project.status}</span><h2 id="modal-title">{project.title}</h2><p className="modal-subtitle">{project.subtitle}</p>
            <div className="modal-divider" />
            {project.readme && <div className="modal-readme"><h3>About this project</h3><p>{project.readme}</p></div>}
            {project.highlights && <div className="modal-highlights"><h3>What went into it</h3><ul>{project.highlights.map(item => <li key={item}>{item}</li>)}</ul></div>}
            <div className="modal-divider" /><div className="stack">{project.tech_stack.map(tech => <span key={tech}>{tech}</span>)}</div>
            <div className="modal-links">{project.live_link && <a className="button button-blue" href={project.live_link} target="_blank" rel="noreferrer">Live Demo ↗</a>}{project.github_link && <a className="text-link" href={project.github_link} target="_blank" rel="noreferrer">View on GitHub ↗</a>}</div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
