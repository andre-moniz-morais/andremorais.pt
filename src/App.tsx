import { useState } from 'react'
import './App.css'
import { type Project, projects as Projects, type TimelineItem, timeline as Timeline, techStack as TechStack } from './utils/contants.ts';
import ProjectComponent from './components/ProjectComponent/ProjectComponent.tsx';


function App() {
  const [projects] = useState<Project[]>(Projects)

  const [timeline] = useState<TimelineItem[]>(Timeline);

  const [techStack] = useState<string[]>(TechStack)

  return (
    <>
      <div className="container">
        <header className="glass-panel" style={{ padding: '3rem', marginTop: '2rem' }}>
          <h1>André Morais</h1>
          <p className="subtitle">Software Engineer & Founder • Portugal</p>
        </header>

        <section id="about">
          <h2>Sobre Mim</h2>
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div className="about-content">
              <div className="profile-img-container">
                <img
                  src="https://placehold.co/400x400/1e293b/cbd5e1?text=AM"
                  alt="André Morais"
                  className="profile-img"
                />
              </div>
              <div className="bio-text">
                <p>
                  Olá! Sou o André, um Engenheiro Informático com uma paixão profunda por criar
                  soluções que resolvem problemas reais. Desde a fundação de startups até à
                  engenharia de sistemas complexos, o meu foco está sempre na eficiência e inovação.
                </p>
                <p>
                  Especializo-me em desenvolvimento Full-stack, Automação e Inteligência Artificial.
                  Acredito que a tecnologia deve servir para potenciar as capacidades humanas e
                  simplificar o dia-a-dia.
                </p>

                <div className="timeline">
                  {timeline.map((item) => (
                    <div key={item.id} className="timeline-item">
                      <div className="timeline-year">{item.year}</div>
                      <h4 className="timeline-title">{item.role}</h4>
                      <p className="timeline-desc">{item.organization}</p>
                    </div>
                  ))}
                </div>

                <div className="tech-keywords">
                  {techStack.map((tech) => (
                    <span key={tech} className="keyword-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Projetos Recentes</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectComponent key={project.id} project={project} />
            ))}
          </div>
        </section>

        <footer>
          <p>© {new Date().getFullYear()} André Morais. Developed with the help of my assistant Elisa.</p>
        </footer>
      </div>
    </>
  )
}

export default App
