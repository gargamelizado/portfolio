# Portfolio Web - Marcelo Henrique

Portfólio pessoal desenvolvido com React, Vite e TypeScript para apresentar perfil profissional, habilidades, experiências, projetos e contato.

![Status](https://img.shields.io/badge/status-ativo-brightgreen?style=flat-square)
![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-migra%C3%A7%C3%A3o%20gradual-3178c6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite)

## Visão Geral

O projeto é uma SPA com rotas:

- `/` - landing completa com Hero, About, Skills, Experience, projetos em destaque, Contact e Footer.
- `/projects` - lista completa de projetos com filtros.
- `/projects/:slug` - página de detalhes de um projeto.
- `*` - página 404 controlada.

Principais recursos:

- React 19 com Vite.
- Migração gradual para TypeScript em arquivos principais `.tsx` e dados `.ts`.
- React Router DOM para navegação.
- CSS Modules nos componentes principais e CSS global nas seções legadas.
- Menu mobile com abertura/fechamento, backdrop, Escape e fechamento por resize.
- Tema escuro/claro usando classe no `body` e preferência em `localStorage`.
- Projetos centralizados em `src/data/projectsData.ts`.
- Curadoria de projetos com `featured`, `category`, `priority`, `level`, `type` e `status`.
- Home com projetos principais e `/projects` com todos, principais, estudos e filtros por tecnologia.
- Formulário de contato com `VITE_CONTACT_ENDPOINT` opcional e fallback para `mailto`.
- Fallback de SPA para GitHub Pages em `public/404.html`.
- SEO básico com Open Graph, Twitter Card, sitemap, robots e imagem social.

## Stack

- React `^19.2.0`
- React DOM `^19.2.0`
- React Router DOM `^7.13.2`
- TypeScript
- Vite
- Vitest + Testing Library
- ESLint `^9.39.1`
- Prettier `3.8.1`
- CSS Modules + CSS global


## Estrutura Principal

```text
portfolio/
├── index.html
├── package.json
├── vite.config.ts
├── eslint.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── public/
│   ├── 404.html
│   ├── og-image.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── router/
│   │   └── rotas.tsx
│   ├── data/
│   │   └── projectsData.ts
│   ├── types/
│   │   └── project.ts
│   ├── assets/
│   └── components/
│       ├── Layout/
│       ├── Header/
│       ├── Home/
│       ├── Hero/
│       ├── About/
│       ├── Skills/
│       ├── Experience/
│       ├── Project/
│       ├── ProjectDetails/
│       ├── CardProject/
│       ├── Contact/
│       ├── NotFound/
│       └── Footer/
└── docs em .md
```

## Como Rodar

```bash
npm install
npm run dev
```

Servidor padrão do Vite: `http://localhost:5173`.

## Scripts

```bash
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção em dist/
npm run preview   # preview do build
npm run lint      # análise com ESLint
npm run typecheck # validação TypeScript sem emitir arquivos
npm run test      # Vitest em modo watch
npm run test:run  # Vitest em execução única
```

## Contato

O formulário usa `VITE_CONTACT_ENDPOINT` quando a variável existir e for segura.

Exemplo:

```bash
VITE_CONTACT_ENDPOINT=https://seu-endpoint-de-contato.com
```

Sem endpoint configurado, o site abre o cliente de email do usuário com a mensagem preenchida para `marcelohdjusto@gmail.com`.

## Rotas Diretas e GitHub Pages

O projeto usa `BrowserRouter`. Para evitar 404 em acesso direto como `/projects/chock-trufas-react`, existe um fallback em `public/404.html` que redireciona para `index.html` preservando a URL limpa.

O `index.html` lê o parâmetro temporário `spa-redirect` e restaura a rota original antes do React montar a aplicação.

## Alterações Recentes

- Migração gradual dos componentes principais de `.jsx` para `.tsx`.
- Criação de `src/types/project.ts` e `src/data/projectsData.ts`.
- Reordenação dos projetos por força técnica usando `priority`.
- Separação entre projetos principais e projetos de estudo.
- Filtros em `/projects`.
- Melhorias de texto no Hero e About com foco em vaga júnior.
- Página de detalhes de projeto mais completa.
- Componente `NotFound` para rotas e slugs inexistentes.
- Currículo renomeado para `Marcelo-Henrique-Curriculo.pdf`.
- Screenshots principais convertidos para WebP.
- Metadados de SEO, Open Graph, Twitter Card, `robots.txt`, `sitemap.xml` e `og-image.png`.
- Testes iniciais com Vitest e Testing Library.

## Qualidade Atual

Validações executadas nesta etapa:

- `npm run lint`
- `npm run typecheck`
- `npm run test:run`
- `npm run build`

## Autor

Marcelo Henrique<br>
GitHub: [@gargamelizado](https://github.com/gargamelizado)<br>
LinkedIn: [Marcelo Henrique Sarzedas](https://linkedin.com/in/marcelo-henrique-sarzedas-623690371/)

Última revisão da documentação: maio de 2026.
