# Portfolio Web - Marcelo

Portfolio pessoal desenvolvido com React e Vite para apresentar perfil profissional, habilidades, experiencias, projetos e contato.

![Status](https://img.shields.io/badge/status-ativo-brightgreen?style=flat-square)
![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0.0_beta-646cff?style=flat-square&logo=vite)

## Visao Geral

O projeto e uma SPA com rotas:

- `/` - landing completa com Hero, About, Skills, Experience, Projects, Contact e Footer.
- `/projects` - lista de projetos.
- `/projects/:slug` - pagina de detalhes de um projeto.
- `*` - redireciona para `/`.

Principais recursos:

- React 19 com Vite.
- React Router DOM para navegacao.
- CSS Modules nos componentes principais.
- Menu mobile com controle de abertura/fechamento.
- Tema escuro/claro usando classe no `body` e preferencia em `localStorage`.
- Projetos centralizados em `src/components/Project/projectsData.js`.
- Formulario de contato com `VITE_CONTACT_ENDPOINT` opcional e fallback para `mailto`.

## Stack

- React `^19.2.0`
- React DOM `^19.2.0`
- React Router DOM `^7.13.2`
- Vite `^8.0.0-beta.13`
- ESLint `^9.39.1`
- Prettier `3.8.1`
- CSS Modules + CSS global

## Estrutura Principal

```text
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── router/
│   │   └── rotas.jsx
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
│       ├── Gallery/
│       ├── Button/
│       └── Footer/
└── docs em .md
```

## Como Rodar

```bash
npm install
npm run dev
```

Servidor padrao do Vite: `http://localhost:5173`.

## Scripts

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # build de producao em dist/
npm run preview  # preview do build
npm run lint     # analise com ESLint
```

## Contato

O formulario usa `VITE_CONTACT_ENDPOINT` quando a variavel existir.

Exemplo:

```bash
VITE_CONTACT_ENDPOINT=https://seu-endpoint-de-contato.com
```

Sem endpoint configurado, o site abre o cliente de email do usuario com a mensagem preenchida para `marcelohdjusto@gmail.com`.

## Qualidade Atual

Verificacoes recentes:

- `npm run lint` passou.
- `npm run build` passou.

Pontos recomendados para evolucao:

- Otimizar screenshots grandes dos projetos.
- Adicionar testes com Vitest + React Testing Library.
- Melhorar SEO com metatags e imagem social.
- Considerar migracao gradual para TypeScript.
- Publicar demos externas em vez de depender de caminhos locais para HTML.

## Autor

Marcelo  
GitHub: [@gargamelizado](https://github.com/gargamelizado)  
LinkedIn: [Marcelo Henrique Sarzedas](https://linkedin.com/in/marcelo-henrique-sarzedas-623690371/)

Ultima revisao da documentacao: abril de 2026.
