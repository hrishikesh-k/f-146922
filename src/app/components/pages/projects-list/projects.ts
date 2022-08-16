export interface Project {
  Title: string;
  Link: string;
  Imagem: string;
  About: string;
  subCategory: string;
}

export const subCategoryLevel = {
  Angular: 1,
  React: 2,
  JQuery: 3,
  VueJS: 4,
  AngularJS: 5,
}

export const projects = {
  'Projetos-Front': [
    {
      'Title': 'Alamanda - React',
      'subCategory': 'React',
      'Link': 'https://alamandaeditora.netlify.app',
      'Imagem': 'assets/images/alamanda.png',
      'About': 'website developed in React, for a demo and study'
    },
    {
      'Title': 'TvShow - React',
      'subCategory': 'React',
      'Link': 'https://lucasmendoncateste.netlify.com/',
      'Imagem': 'assets/images/tvshow.png',
      'About': 'Developed in React on a test required by a company during the hiring process'
    },
    
    {
      'Title': 'This Portfolio - Angular',
      'subCategory': 'Angular',
      'Link': '',
      'Imagem': 'assets/images/portfolio.png',
      'About': 'A way to show my work'
    },
    {
      'Title': 'Blog - Angular',
      'subCategory': 'Angular',
      'Link': 'https://angularblog.netlify.com/',
      'Imagem': 'assets/images/blog.png',
      'About': 'A study about Angular'
    },
    {
      'Title': 'Social Media - React',
      'subCategory': 'React',
      'Link': 'http://lucasmendoncapportfolio.atwebpages.com/pages/SocialMedia/SocialMedia.html',
      'Imagem': 'assets/images/SocialMedia.png',
      'About': 'A study about React'
    },
    {
      'Title': 'Dashboard - AngularJS',
      'subCategory': 'AngularJS',
      'Link': 'http://lucasmendoncapportfolio.atwebpages.com/pages/GerenciamentoProjetos.html',
      'Imagem': 'assets/images/dashboard.png',
      'About': 'A study about AngularJS and Javascript'
    },
    {
      'Title': 'LP Eixo Platina - React',
      'subCategory': 'React',
      'Link': 'https://eixo-lp.netlify.com/',
      'Imagem': 'assets/images/eixo.png',
      'About': 'Page developed in React, for Eixo Platina, to show a new building project'
    },
    {
      'Title': 'pneuStore - React',
      'subCategory': 'React',
      'Link': 'https://pneu-store.netlify.com/',
      'Imagem': 'assets/images/pneus.png',
      'About': 'Page developed to a PneuStore competition'
    },
    {
      'Title': 'E-Commerce - JQuery',
      'subCategory': 'JQuery',
      'Link': 'http://lucasmendoncapportfolio.atwebpages.com/pages/Vendas.html',
      'Imagem': 'assets/images/ecomerce.png',
      'About': 'A study about JQuery'
    },
    {
      'Title': 'Zara - React',
      'subCategory': 'React',
      'Link': 'https://gtc-lucasmendonca.netlify.com/',
      'Imagem': 'assets/images/gtc.png',
      'About': 'Developed in React on a test required by a company during the hiring process'
    },
    {
      'Title': 'Checklist - VueJS',
      'subCategory': 'VueJS',
      'Link': 'http://lucasmendoncapportfolio.atwebpages.com/pages/checklist/',
      'Imagem': 'assets/images/vue.png',
      'About': 'A study about VueJS'
    },
    {
      'Title': 'Login - JQuery',
      'subCategory': 'JQuery',
      'Link': 'http://lucasmendoncapportfolio.atwebpages.com/pages/Login.html',
      'Imagem': 'assets/images/login.png',
      'About': 'A study about JQuery'
    },
    {
      'Title': 'Marvel Characters - React',
      'subCategory': 'React',
      'Link': 'https://marveltestlucasmendonca.netlify.com/',
      'Imagem': 'assets/images/marvelTest.png',
      'About': 'Developed in React on a test required by a company during the hiring process'
    },
    {
      'Title': 'profit - React',
      'subCategory': 'React',
      'Link': 'https://test-profit-lucas-mendonca.netlify.com/',
      'Imagem': 'assets/images/profit.png',
      'About': 'Developed in React on a test required by a company during the hiring process'
    }
  ],
  'Projetos-WebDesign': [
    {
      'Title': 'Le jour',
      'Link': 'https://xd.adobe.com/view/2168ae57-7722-4175-7187-32285ced0798-5759/',
      'Imagem': 'assets/images/lejour.png',
      'About': 'Project designed in competition on FIAP, my graduation'
    },
    {
      'Title': 'This Portfolio',
      'Link': '',
      'Imagem': 'assets/images/portfolio.png',
      'About': 'A way to show my work'
    },
    {
      'Title': 'Nintendo Website Redesign',
      'Link': 'https://www.behance.net/gallery/135246757/Nintendo-redesign',
      'Imagem': 'assets/images/nintendo-site/desafio-01.jpg',
      'About': 'Design developed to a challenge to help a friend study front-end'
    },
  ],
  'Projects': [
     {
      'Title': 'SampaRural - Angular 9',
      'Link': 'https://sampamaisrural.prefeitura.sp.gov.br/',
      'Imagem': 'assets/images/map-sprural.png',
      'About': 'Website developed with angular 9, I developed the whole website, creating pages, API integrations and a form generator'
    },
    {
      'Title': 'MeuCarroNovo - Angular 7',
      'Link': 'https://www.meucarronovo.com.br',
      'Imagem': 'assets/images/meucarronovo.png',
      'About': 'Website developed with angular 7, I developed the analytics, some layouts ajusts, bugs corrections, changes of integration with API and also developed pages to another projects in the meucarronovo system'
    },
    {
      'Title': 'Jurema - Angular 13',
      'Link': 'https://www.jurema.com.br/',
      'Imagem': 'assets/images/jurema.png',
      'About': 'Website developed with angular 13, I developed the whole website, creating pages and API integrations'
    },
    {
      'Title': 'Omint - Wordpress',
      'Link': 'https://www.omint.com.br/en/',
      'Imagem': 'assets/images/omint.png',
      'About': 'Developed with Wordpress, I adjusted some layout bugs, created custom pages and edited the PHP integration'
    },
    {
      'Title': 'Luvieh Jewellery - Shopify',
      'Link': 'https://luvieh.com/',
      'Imagem': 'assets/images/luvieh.png',
      'About': 'E-commerce developed with Shopify, a plataform like Wordpress. I made some modifications that the client wanted, edited the theme and created customized pages'
    },
    {
      'Title': 'Diário do Clima - React',
      'Link': '',
      'Imagem': 'assets/images/diario.png',
      'About': 'Website developed with React 18, I developed the whole website, creating pages, API integrations and configuring the project with webpack, eslit and unit tests.'
    }
  ]
}