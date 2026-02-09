import { useState } from 'react'
import './App.css'

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image?: string;
}

interface TimelineItem {
  id: number;
  year: string;
  role: string;
  organization: string;
}

function App() {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: 'Raydium Solana Bot',
      description: 'Bot de notificação em tempo real para monitorizar variações de preço na rede Solana.',
      tech: ['Python', 'Solana API', 'Telegram Bot'],
      image: 'https://placehold.co/600x400/10b981/ffffff?text=Raydium+Bot'
    },
    {
      id: 2,
      title: 'YouTube Automator',
      description: 'Pipeline completo de automação para produção e publicação de vídeos sem intervenção manual.',
      tech: ['Python', 'FFmpeg', 'YouTube API'],
      image: 'https://placehold.co/600x400/3b82f6/ffffff?text=YT+Automator'
    },
    {
      id: 3,
      title: 'Gals4Guys',
      description: 'Plataforma web inovadora para showcase de modelos gerados por Inteligência Artificial.',
      tech: ['React', 'Node.js', 'AI Integration'],
      image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Gals4Guys'
    },
    {
      id: 4,
      title: 'Velvet Theory Music',
      description: 'Aplicação Django dedicada à pesquisa e catalogação de teoria musical avançada.',
      tech: ['Django', 'PostgreSQL', 'Music Theory'],
      image: 'https://placehold.co/600x400/f59e0b/ffffff?text=Velvet+Theory'
    }
  ])

  const [timeline] = useState<TimelineItem[]>([
    { id: 7, year: '2025 - Atual', role: 'Engenheiro Informático', organization: 'Precise' },
    { id: 6, year: '2025', role: 'Fundador', organization: 'Unlimited Solutions' },
    { id: 5, year: '2023 - 2025', role: 'Engenheiro Informático', organization: 'Synertics' },
    { id: 4, year: '2021 - 2023', role: 'Mestrado em Engenharia Informática (Sistemas Multimédia)', organization: 'Instituto Superior Politécnico do Porto' },
    { id: 3, year: '2021', role: 'Fundador', organization: 'Skillskope (Startup)' },
    { id: 2, year: '2018 - 2021', role: 'Licenciatura em Engenharia Informática', organization: 'Universidade de Aveiro' },
    { id: 1, year: '2015 - 2018', role: 'Curso Tecnologias e Sistemas de Informação', organization: 'Colégio de Gaia' }
  ])

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
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Projetos Recentes</h2>
          <div className="projects-grid">
            {projects.map((project) => (
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
            ))}
          </div>
        </section>

        <footer>
          <p>© {new Date().getFullYear()} André Morais. Developed with React & TypeScript.</p>
        </footer>
      </div>
    </>
  )
}

export default App
