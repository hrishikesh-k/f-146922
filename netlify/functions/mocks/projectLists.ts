export interface Translation {
  name: string;
  description: string;
}

export interface Project {
  year: number;
  url?: string;
  technology: string;
  image: string;
  id: number;
  translations: Record<string, Translation>;
}

export const devProjects: Project[] = [
  {
    id: 1,
    technology: 'React',
    year: 2025,
    url: 'https://vimeo.com/1074964819/672ee796f2',
    image: '/images/project-anytime.jpg',
    translations: {
      en: {
        name: 'AnytimeFitness',
        description:
          'Developed the second version of the website and did the maintenance, collaborating with the design and product teams.',
      },
      pt: {
        name: 'AnytimeFitness',
        description:
          'Desenvolvi novas funcionalidades e fiz a manutenção, colaborando com os times de design e produto.',
      },
    },
  },
  {
    id: 2,
    technology: 'React and NodeJS',
    year: 2025,
    url: 'https://nintendostorebylucasmendonca.netlify.app/',
    image: '/images/project-nintendo.jpg',
    translations: {
      en: {
        name: 'Nintendo Demo',
        description: 'E-commerce demo for my portfolio, developed with React and NodeJS.',
      },
      pt: {
        name: 'Nintendo Demo',
        description: 'Demonstração para o portfólio, desenvolvida com React e NodeJS.',
      },
    },
  },
  {
    id: 3,
    technology: 'React',
    year: 2019,
    url: 'https://eixo-lp.netlify.app/',
    image: '/images/project-eixo.jpg',
    translations: {
      en: {
        name: 'Landing Page Eixo Platina',
        description: 'Developed a Landing page for a real estate launch in React.',
      },
      pt: {
        name: 'Landing Page Eixo Platina',
        description: 'Landing page para lançamento imobiliário em React.',
      },
    },
  },
  {
    id: 4,
    technology: 'AngularJS',
    year: 2018,
    url: 'https://taskdashboardlucas.netlify.app/',
    image: '/images/dashboard.jpg',
    translations: {
      en: {
        name: 'DashBoard Demo',
        description: 'Task dashboard demo for portfolio, developed using AngularJS.',
      },
      pt: {
        name: 'DashBoard Demo',
        description:
          'Demonstração de painel de tarefas para o portfólio, desenvolvido com AngularJS.',
      },
    },
  },
  {
    id: 5,
    technology: 'Angular 9',
    year: 2021,
    url: 'https://sampamaisrural.prefeitura.sp.gov.br/',
    image: '/images/project-samparural.jpg',
    translations: {
      en: {
        name: 'SampaRural',
        description:
          'Developed the website from scratch, creating pages, features, API integrations and a form generator.',
      },
      pt: {
        name: 'SampaRural',
        description:
          'Desenvolvimento completo do site com criação de páginas, funcionalidades, integrações de API e formulários dinâmicos.',
      },
    },
  },
  {
    id: 6,
    technology: 'Angular 7',
    year: 2020,
    url: 'https://napista.com.br/',
    image: '/images/project-napista.jpg',
    translations: {
      en: {
        name: 'Na Pista',
        description:
          'Developed new features and did the maintenance of the webiste, fixed bugs and implemented analytics.',
      },
      pt: {
        name: 'Na Pista',
        description:
          'Desenvolvi novas funcionalidades, fiz a manutenção do site, corrigi bugs e implementei o analytics.',
      },
    },
  },
  {
    id: 7,
    technology: 'React And NestJS',
    year: 2022,
    url: 'https://vimeo.com/778621074',
    image: '/images/project-alamanda.jpg',
    translations: {
      en: {
        name: 'Alamanda',
        description:
          'E-commerce with admin panel, client area and analytics, designed and developed from scratch [Front-End, Back-End and MySQL]',
      },
      pt: {
        name: 'Alamanda',
        description:
          'E-commerce com painel administrativo, desenhado e desenvolvido do zero. Fiz tanto o Front-End quanto o Back-End',
      },
    },
  },
  {
    id: 8,
    technology: 'Wordpress',
    year: 2019,
    url: 'https://www.omint.com.br/en/',
    image: '/images/project-omint.jpg',
    translations: {
      en: {
        name: 'Omint',
        description:
          'Created custom pages, edited the Wordpress theme with PHP, and did the maintenance.',
      },
      pt: {
        name: 'Omint',
        description:
          'Criei páginas customizadas, editei o tema do Wordpress com PHP e fiz a manutenção',
      },
    },
  },
  {
    id: 9,
    technology: 'Shopify',
    year: 2021,
    url: 'https://luvieh.com/',
    image: '/images/project-luvieh.jpg',
    translations: {
      en: {
        name: 'Luvieh Jewellery',
        description: 'E-commerce customization and theme editing on Shopify.',
      },
      pt: {
        name: 'Luvieh Jewellery',
        description: 'Customização e edição de tema em e-commerce na plataforma Shopify.',
      },
    },
  },
  {
    id: 10,
    technology: 'React',
    year: 2022,
    url: 'https://diariodoclima.jurema.la/',
    image: '/images/project-clima.jpg',
    translations: {
      en: {
        name: 'Diário do Clima',
        description:
          'End to end website creation with API integrations, best practices setup, and automated tests.',
      },
      pt: {
        name: 'Diário do Clima',
        description:
          'Criação completa do site com integração de APIs, configuração de boas práticas e testes automáticos.',
      },
    },
  },
  {
    id: 11,
    technology: 'Angular',
    year: 2022,
    url: 'https://queridodiario.jurema.la/',
    image: '/images/project-diario.jpg',
    translations: {
      en: {
        name: 'Querido Diário',
        description: 'Developed new pages, with new features and API integrations.',
      },
      pt: {
        name: 'Querido Diário',
        description: 'Desenvolvi novas páginas, com novas features e integrações de API.',
      },
    },
  },
  {
    id: 12,
    technology: 'React',
    year: 2022,
    url: 'https://jurema.la/',
    image: '/images/project-jurema.jpg',
    translations: {
      en: {
        name: 'Jurema Institutional',
        description:
          'Developed the complete website, with API integrations, translations and dynamic components.',
      },
      pt: {
        name: 'Jurema Institucional',
        description: 'Desenvolvi o site completo, com integração de api e tranduções.',
      },
    },
  },
  {
    id: 13,
    technology: 'WordPress',
    year: 2019,
    url: 'https://emccamp.com.br/',
    image: '/images/project-emccamp.jpg',
    translations: {
      en: {
        name: 'Emccamp',
        description: 'Maintenance, bug fixes and new page creation in WordPress with PHP.',
      },
      pt: {
        name: 'Emccamp',
        description:
          'Manutenção, correções de bugs e criação de novas páginas em WordPress com PHP.',
      },
    },
  },
  {
    id: 14,
    technology: 'Angular 7',
    year: 2019,
    url: 'https://www.bv.com.br/seguro',
    image: '/images/project-bv.jpg',
    translations: {
      en: {
        name: 'Banco BV',
        description: 'Developed pages to present the products for a Health Insurance Company.',
      },
      pt: {
        name: 'Banco BV',
        description:
          'Desenvolvimento de páginas para apresentação de produtos do Banco Votorantim.',
      },
    },
  },
];

export const designProjects: Project[] = [
  {
    id: 1,
    technology: 'Photoshop, AdobeXD',
    year: 2020,
    url: 'https://xd.adobe.com/view/2168ae57-7722-4175-7187-32285ced0798-5759/',
    image: '/images/project-lejour.jpg',
    translations: {
      pt: {
        name: 'Le jour',
        description:
          'Protótipo de interface criado para uma competição na FIAP, durante minha graduação.',
      },
      en: {
        name: 'Le jour',
        description: 'UI concept designed for a competition at FIAP university.',
      },
    },
  },
  {
    id: 2,
    technology: 'Photoshop',
    year: 2022,
    url: 'https://www.behance.net/gallery/135246757/Nintendo-redesign',
    image: '/images/project-nintendo.jpg',
    translations: {
      pt: {
        name: 'Redesign do site da Nintendo',
        description:
          'Conceito de redesign da loja da Nintendo, criado para aprimorar meu portfólio.',
      },
      en: {
        name: 'Nintendo Website Redesign',
        description: 'Redesign concept of the Nintendo store for portfolio improvement.',
      },
    },
  },
];

export const intranetProjects: Project[] = [
  {
    id: 1,
    technology: 'Sharepoint',
    year: 2018,
    image: '/images/intranet-tallento.jpg',
    translations: {
      pt: {
        name: 'Tallento',
        description: 'Criação de formulários e páginas internas usando SharePoint.',
      },
      en: {
        name: 'Tallento',
        description: 'Developed internal forms and SharePoint pages.',
      },
    },
  },
  {
    id: 2,
    technology: 'Sharepoint',
    year: 2018,
    image: '/images/intranet-nexa.jpg',
    translations: {
      pt: {
        name: 'Nexa',
        description: 'Desenvolvimento de formulários e páginas internas em SharePoint.',
      },
      en: {
        name: 'Nexa',
        description: 'Developed internal forms and SharePoint pages.',
      },
    },
  },
  {
    id: 3,
    technology: 'Sharepoint',
    year: 2018,
    image: '/images/intranet-hersheys.jpg',
    translations: {
      pt: {
        name: "Hershey's",
        description: 'Desenvolvimento de formulários e páginas internas no SharePoint.',
      },
      en: {
        name: "Hershey's",
        description: 'Developed internal forms and SharePoint pages.',
      },
    },
  },
  {
    id: 4,
    technology: 'React',
    year: 2019,
    image: '/images/intranet-newton.jpg',
    translations: {
      pt: {
        name: 'Newton',
        description: 'Desenvolvimento de dashboard e páginas internas com React.',
      },
      en: {
        name: 'Newton',
        description: 'Developed internal dashboard and pages using React.',
      },
    },
  },
  {
    id: 5,
    technology: 'Sharepoint',
    year: 2017,
    image: '/images/intranet-class.jpg',
    translations: {
      pt: {
        name: 'Class Solutions',
        description: 'Criação de formulários personalizados e páginas internas em SharePoint.',
      },
      en: {
        name: 'Class Solutions',
        description: 'Created custom internal forms and SharePoint pages.',
      },
    },
  },
];
