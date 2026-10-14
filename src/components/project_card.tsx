type Props = {
  image: string;
  tech_stack: string[];
  title: string;
  subtitle: string;
  live_link?: string;
  github_link?: string;
  category: string;
  status: string;
  accent: string;
  number: number;
  onClick: () => void;
};
export default function ProjectCard({ image, tech_stack, title, subtitle, live_link, github_link, category, status, accent, number, onClick }: Props) {
  return (
    <article className={`project-card project-${accent}`}>
      <button className="project-preview" onClick={onClick} aria-label={`View ${title} project details`}>
        <span className="preview-topline"><span>PROJECT / {String(number).padStart(2, "0")}</span><span>{category}</span></span>
        <span className="browser-frame"><span className="browser-chrome"><span className="browser-dots"><i /><i /><i /></span><span>{live_link ? new URL(live_link).hostname : title}</span><span>↗</span></span><img src={image} alt={`${title} screenshot`} loading="lazy" /></span>
        <span className="preview-open" aria-hidden="true">↗</span>
      </button>
      <div className="project-info">
        <div className="project-meta"><span>{category}</span><span className={live_link ? "project-status has-live" : "project-status"}><i />{status}</span></div>
        <h3>{title}</h3><p>{subtitle}</p>
        <div className="stack">{tech_stack.map(tech => <span key={tech}>{tech}</span>)}</div>
        <div className="project-actions"><button onClick={onClick}>Explore project <span>↗</span></button><div>{github_link && <a href={github_link} target="_blank" rel="noreferrer" aria-label={`View ${title} source on GitHub`}>GitHub ↗</a>}{live_link && <a className="live-demo" href={live_link} target="_blank" rel="noreferrer" aria-label={`Open ${title} live demo`}>Live Demo ↗</a>}</div></div>
      </div>
    </article>
  );
}
