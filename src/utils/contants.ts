export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image?: string;
}

export const projects:Project[] = [
    {
      id: 1,
      title: 'Raydium Solana Bot',
      description: 'Bot de notificação em tempo real para monitorizar variações de preço na rede Solana.',
      tech: ['Python', 'Solana API', 'Telegram Bot'],
      // Using purple-tinted placeholders
      image: 'https://placehold.co/600x400/581c87/e9d5ff?text=Raydium+Bot'
    },
    {
      id: 2,
      title: 'YouTube Automator',
      description: 'Pipeline completo de automação para produção e publicação de vídeos sem intervenção manual.',
      tech: ['Python', 'FFmpeg', 'YouTube API'],
      image: 'https://placehold.co/600x400/6b21a8/f3e8ff?text=YT+Automator'
    },
    {
      id: 3,
      title: 'Gals4Guys',
      description: 'Plataforma web inovadora para showcase de modelos gerados por Inteligência Artificial.',
      tech: ['React', 'Node.js', 'AI Integration'],
      image: 'https://placehold.co/600x400/7e22ce/faf5ff?text=Gals4Guys'
    },
    {
      id: 4,
      title: 'Velvet Theory Music',
      description: 'Aplicação Django dedicada à pesquisa e catalogação de teoria musical avançada.',
      tech: ['Django', 'PostgreSQL', 'Music Theory'],
      image: 'https://placehold.co/600x400/9333ea/ffffff?text=Velvet+Theory'
    }
]

export interface TimelineItem {
  id: number;
  year: string;
  role: string;
  organization: string;
}

export const timeline: TimelineItem[] = [
    { id: 7, year: '2025 - Atual', role: 'Engenheiro Informático', organization: 'Precise' },
    { id: 6, year: '2025 - Atual', role: 'Fundador', organization: 'Unlimited Solutions' },
    { id: 5, year: '2023 - 2025', role: 'Engenheiro Informático', organization: 'Synertics' },
    { id: 4, year: '2021 - 2023', role: 'Mestrado em Engenharia Informática (Sistemas Multimédia)', organization: 'Instituto Superior Politécnico do Porto' },
    { id: 3, year: '2021 - 2023', role: 'Fundador', organization: 'Skillskope (Startup)' },
    { id: 2, year: '2018 - 2021', role: 'Licenciatura em Engenharia Informática', organization: 'Universidade de Aveiro' },
    { id: 1, year: '2015 - 2018', role: 'Curso Tecnologias e Sistemas de Informação', organization: 'Colégio de Gaia' }
];

export const techStack: string[] = [
    'React', 'TypeScript', 'Node.js', 'Python', 
    'Django', 'Solana', 'AI Integration', 'Automation',
    'PostgreSQL', 'Docker', 'AWS'
]
