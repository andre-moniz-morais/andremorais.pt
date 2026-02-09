import { useState } from 'react'
import './App.css'

function App() {
  const [projects] = useState([
    {
      id: 1,
      title: 'Raydium Solana Bot',
      description: 'Um bot de notificação de preços para Solana que alerta sobre variações significativas de preço.',
      tech: ['Python', 'Solana', 'Crypto']
    },
    {
      id: 2,
      title: 'YouTube Automator',
      description: 'Automação completa para produção de vídeos no YouTube sem esforço manual.',
      tech: ['Automation', 'Video Processing', 'Python']
    },
    {
      id: 3,
      title: 'Gals4Guys',
      description: 'Plataforma web para showcase de modelos gerados por Inteligência Artificial.',
      tech: ['React', 'AI', 'Web']
    },
    {
      id: 4,
      title: 'Velvet Theory Music',
      description: 'Projeto Django focado em pesquisa e teoria musical.',
      tech: ['Django', 'Python', 'Music Theory']
    }
  ])

  return (
    <>
      <div className="container">
        <header>
          <h1>André Morais</h1>
          <p className="subtitle">Programador &amp; Criador de Soluções</p>
        </header>

        <section id="about">
          <h2>Sobre Mim</h2>
          <p>
            Olá! Sou o André, um programador apaixonado por criar soluções eficientes e inovadoras.
            Com foco em automação, desenvolvimento web e inteligência artificial, procuro sempre
            simplificar processos complexos através de código limpo e funcional.
          </p>
          <p>
            Atualmente estou focado em projetos que envolvem automação de tarefas, criptomoedas e
            desenvolvimento de plataformas web modernas.
          </p>
        </section>

        <section id="projects">
          <h2>Projetos Recentes</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {project.tech.map((t) => (
                    <span key={t} style={{
                      fontSize: '0.75rem',
                      background: '#334155',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      color: '#cbd5e1'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} André Morais. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  )
}

export default App
