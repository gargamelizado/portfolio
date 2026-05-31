# Project Map

## Raiz

```text
portfolio/
├── CNAME
├── README.md
├── DOCUMENTACAO_INDEX.md
├── MAPA_RAPIDO.md
├── PROJECT_MAP.md
├── ESTRUTURA_E_DOCUMENTACAO.md
├── ARQUITETURA_E_DIAGRAMAS.md
├── RESPONSIVIDADE_GUIDE.md
├── GUIA_DE_INICIO_RAPIDO.md
├── index.html
├── package.json
├── package-lock.json
├── vite.config.ts
├── eslint.config.js
├── public/
└── src/
```

## Codigo Fonte

```text
src/
├── main.tsx
├── App.tsx
├── App.css
├── index.css
├── router/
│   └── rotas.tsx
├── assets/
└── components/
    ├── About/
    ├── Button/
    ├── CardProject/
    ├── Contact/
    ├── Experience/
    ├── Footer/
    ├── Gallery/
    ├── Header/
    ├── Hero/
    ├── Home/
    ├── Layout/
    ├── Project/
    └── ProjectDetails/
```

## Componentes

| Componente | Arquivos | Papel |
|---|---|---|
| `Layout` | `Layout.jsx` | Header compartilhado + `Outlet` |
| `Header` | `Header.jsx`, `Header.module.css` | Navegacao, tema, menu mobile |
| `Home` | `Home.jsx` | Landing da rota `/` |
| `Hero` | `Hero.jsx`, `Hero.module.css` | Apresentacao principal |
| `About` | `About.jsx`, `About.css` | Sobre |
| `Skills` | `Skills.jsx`, `Skills.module.css` | Habilidades |
| `Experience` | `Experience.jsx`, `Experience.css` | Experiencias/formacao |
| `Project` | `Project.tsx`, `Project.module.css`, `projectsData.ts` | Grade de projetos |
| `ProjectDetails` | `ProjectDetails.tsx`, `ProjectDetails.module.css` | Detalhe por slug |
| `CardProject` | `CardProject.tsx`, `CardProject.module.css` | Card individual |
| `Contact` | `Contact.jsx`, `Contact.css` | Formulario |
| `Footer` | `Footer.jsx`, `Footer.css` | Rodape |
| `Gallery` | `Gallery.jsx`, `Gallery.css` | Galeria reutilizavel |
| `Button` | `button.jsx`, `button.module.css` | Botao/link reutilizavel |

## Projetos de Estudo

Dentro de `src/components/Project/` existem pastas com projetos de estudo:

```text
src/components/Project/
├── devmedia/
├── mentoria/
├── img/
├── projectsData.ts
├── Project.tsx
└── Project.module.css
```

Essas pastas armazenam exercicios HTML/CSS/JS/Next e assets. O app principal importa principalmente screenshots de `img/` e dados de `projectsData.ts`.

## Fluxo de Dados

```text
projectsData.ts
└── Project
    ├── CardProject
    └── ProjectDetails por slug
```

```text
Header
├── localStorage: portfolio-theme
├── body.darkmode
└── navigate + scrollIntoView
```

```text
Contact
├── import.meta.env.VITE_CONTACT_ENDPOINT
├── fetch POST quando configurado
└── mailto quando nao configurado ou quando envio falha
```

## Configuracao

| Arquivo | Uso |
|---|---|
| `package.json` | Scripts, dependencias e overrides |
| `vite.config.ts` | Vite + React plugin |
| `eslint.config.js` | Regras ESLint |
| `index.html` | HTML base |
| `CNAME` | Dominio para deploy estatico |

## Checklist de Manutencao

- Ao adicionar projeto, atualizar `projectsData.ts`.
- Ao adicionar rota, atualizar `src/router/rotas.tsx`.
- Ao criar componente com estilo isolado, preferir CSS Module.
- Rodar `npm run lint` antes de finalizar.
- Rodar `npm run build` para validar producao.
- Comprimir imagens grandes antes de subir.
