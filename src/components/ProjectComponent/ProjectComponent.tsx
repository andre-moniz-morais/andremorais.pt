import '../../App.css';
import './ProjectComponent.css';
import { type Project } from '../../utils/contants.ts';

export default function ProjectComponent({ project }: { project: Project }) {
    return (
        <div key={project.id} className="glass-panel project-card">
            {project.image && (
                <img src={project.image} alt={project.title} className="project-image" />
            )}
            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="tech-stack">
                    {project.tech.map((t) => (
                        <span key={t} className="tech-badge">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}