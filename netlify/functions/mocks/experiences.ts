interface Translation {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface WorkExperience {
  id: number;
  translations: Record<string, Translation>;
}

export const experiences: WorkExperience[] = [
  {
    id: 1,
    translations: {
      en: {
        title: 'Senior Front-End Developer',
        company: 'Alto',
        location: 'Remote - USA',
        startDate: 'Jan 2023',
        endDate: 'Present',
        responsibilities: [
          'Developed the Coach Dashboard for Anytime Fitness (SaaS) with React and TypeScript',
          'Personally developed reusable components that became standards across the platform',
          'Consistently shipped new features every week, staying aligned with business priorities',
          'Quickly handled all bugs assigned to me within 24h, helping reduce the overall bug count to zero',
        ],
      },
      pt: {
        title: 'Desenvolvedor Front-End Sênior',
        company: 'Alto',
        location: 'Remoto - EUA',
        startDate: 'Jan 2023',
        endDate: 'Presente',
        responsibilities: [
          'Desenvolvi do Coach Dashboard para o Anytime Fitness (SaaS) com React e TypeScript',
          'Criei componentes reutilizáveis que viraram padrão no projeto',
          'Entreguei novas funcionalidades semanalmente, sempre alinhado às prioridades do time',
          'Resolvi todos os bugs que me foram atribuídos, geralmente em menos de 24h, contribuindo para zerar o backlog de erros',
        ],
      },
    },
  },
  {
    id: 2,
    translations: {
      en: {
        title: 'Mid-Level Front-End Developer',
        company: 'Jurema',
        location: 'Brazil',
        startDate: 'Jan 2020',
        endDate: 'Dec 2022',
        responsibilities: [
          'Worked closely with design and backend teams to build websites focused on real user needs',
          'Handled projects in banking, government, and e-commerce using React and Angular',
          'Explored and applied modern tools like Next.js, Tailwind CSS, and SQL in real scenarios',
        ],
      },
      pt: {
        title: 'Desenvolvedor Front-End Pleno',
        company: 'Jurema',
        location: 'Brasil',
        startDate: 'Jan 2020',
        endDate: 'Dez 2022',
        responsibilities: [
          'Colaborei de perto com os times de design e backend para entregar sites focados nas necessidades reais dos usuários',
          'Atuei em projetos de bancos, governo e e-commerce utilizando React e Angular',
          'Apliquei na prática tecnologias modernas como Next.js, Tailwind CSS e SQL',
        ],
      },
    },
  },
  {
    id: 3,
    translations: {
      en: {
        title: 'Full Stack Developer',
        company: 'Newton Marketing',
        location: 'Brazil',
        startDate: 'Nov 2018',
        endDate: 'Dec 2019',
        responsibilities: [
          'Developed responsive websites for clients in retail, healthcare, and real estate sectors',
          'Improved user experience and SEO results through practical UX and performance adjustments',
          'Used mostly WordPress but also experimented with React, Angular, and Node.js in side tasks',
        ],
      },
      pt: {
        title: 'Desenvolvedor Full Stack',
        company: 'Newton Marketing',
        location: 'Brasil',
        startDate: 'Nov 2018',
        endDate: 'Dez 2019',
        responsibilities: [
          'Desenvolvi sites responsivos para clientes dos setores de varejo, saúde e imobiliária',
          'Melhorei a experiência do usuário e o SEO com ajustes práticos de UX e performance',
          'Trabalhei principalmente com WordPress, mas também explorei React, Angular e Node.js em tarefas complementares',
        ],
      },
    },
  },
  {
    id: 4,
    translations: {
      en: {
        title: 'Front-End Developer',
        company: 'Class Solutions',
        location: 'Brazil',
        startDate: 'Oct 2017',
        endDate: 'Oct 2018',
        responsibilities: [
          'Built intranet systems for companies like Hershey’s using AngularJS and SharePoint',
          'Improved how the companies organized internal info and managed documents',
        ],
      },
      pt: {
        title: 'Desenvolvedor Front-End',
        company: 'Class Solutions',
        location: 'Brasil',
        startDate: 'Out 2017',
        endDate: 'Out 2018',
        responsibilities: [
          'Construi sistemas de intranet para empresas como a Hershey’s usando AngularJS e SharePoint',
          'Melhorei a forma como as empresas organizavam informações e gerenciavam documentos',
        ],
      },
    },
  },
  {
    id: 5,
    translations: {
      en: {
        title: 'Freelance Projects',
        company: 'Various Clients',
        location: 'Global',
        startDate: 'Oct 2020',
        endDate: 'Present',
        responsibilities: [
          'Worked directly with clients from Brazil and abroad, adapting to each context and tech stack',
          'Alamanda – Full-stack development with React and Node',
          'BV Bank – Contributed to internal Angular applications',
          'Sony – Delivered responsive UI using HTML, CSS and JavaScript',
          'Luvieh – Built Shopify store with focus on clean UX',
        ],
      },
      pt: {
        title: 'Projetos Freelance',
        company: 'Diversos Clientes',
        location: 'Global',
        startDate: 'Out 2020',
        endDate: 'Presente',
        responsibilities: [
          'Atuei diretamente com clientes do Brasil e do exterior, me adaptando ao contexto e stack de cada projeto',
          'Alamanda – Desenvolvimento full-stack com React e Node',
          'BV Bank – Contribuição em aplicações internas com Angular',
          'Sony – Interfaces responsivas com HTML, CSS e JavaScript',
          'Luvieh – Loja em Shopify com foco em UX leve e intuitiva',
        ],
      },
    },
  },
];
