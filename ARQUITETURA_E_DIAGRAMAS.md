# Arquitetura e Diagramas

## Visao Geral

```text
┌────────────┐
│ index.html │
└─────┬──────┘
      │
      ▼
┌──────────┐
│ main.jsx │  createRoot + StrictMode
└────┬─────┘
     │
     ▼
┌─────────┐
│ App.jsx │  retorna <Rotas />
└────┬────┘
     │
     ▼
┌──────────────────┐
│ router/rotas.jsx │  BrowserRouter + Routes
└────┬─────────────┘
     │
     ▼
┌────────────────────────────┐
│ Layout                     │
│ ├── Header                 │
│ └── Outlet                 │
└────┬───────────────────────┘
     │
     ├── /              -> Home
     ├── /projects      -> Project
     └── /projects/:slug -> ProjectDetails
```

## Hierarquia da Home

```text
Home
├── Hero
├── About
├── Skills
├── Experience
├── Project
│   └── CardProject x N
├── Contact
└── Footer
```

## Hierarquia de Projetos

```text
Project
├── importa projectsData
├── renderiza CardProject para cada item
└── cada CardProject pode exibir:
    ├── screenshot
    ├── tecnologias
    ├── link "Detalhes" -> /projects/:slug
    ├── link "Repositorio"
    └── link "Ver Website" quando web existir
```

## Rota de Detalhes

```text
/projects/:slug
└── ProjectDetails
    ├── useParams() pega slug
    ├── busca item em projectsData
    ├── se nao encontrar: Navigate para /projects
    └── se encontrar: renderiza descricao, aprendizado, tecnologias e links
```

## Fluxo de Navegacao do Header

```text
Clique em Home
└── NavLink para /

Clique em Projetos
└── NavLink para /projects

Clique em Sobre/Skills/Experiencia/Contato
├── se estiver na home: scrollIntoView(id)
└── se estiver em outra rota: navigate("/", { state: { scrollTo: id } })
    └── Home usa useEffect para rolar apos montar
```

## Estados Locais

```text
Header
├── menuActive: abre/fecha menu mobile
└── darkMode: salva tema em localStorage e alterna body.darkmode

Contact
├── formData: name, email, message
├── statusMessage: feedback para usuario
└── isSending: trava botao durante envio
```

## Formulario de Contato

```text
Submit
├── existe VITE_CONTACT_ENDPOINT?
│   ├── sim: envia POST com JSON
│   └── nao: abre mailto
└── se POST falhar: fallback para mailto
```

## Estrutura de Pastas

```text
src/
├── router/
├── assets/
├── components/
│   ├── Layout/
│   ├── Header/
│   ├── Home/
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   ├── Experience/
│   ├── Project/
│   ├── ProjectDetails/
│   ├── CardProject/
│   ├── Contact/
│   ├── Gallery/
│   ├── Button/
│   └── Footer/
├── App.jsx
├── main.jsx
├── App.css
└── index.css
```

## Responsabilidades

| Area | Responsabilidade |
|---|---|
| `router/rotas.jsx` | Define URLs e layout compartilhado |
| `Layout` | Mantem `Header` em todas as paginas |
| `Header` | Navegacao, menu mobile, tema, links externos |
| `Home` | Composicao das secoes da landing |
| `Project` | Lista todos os projetos |
| `ProjectDetails` | Mostra uma pagina por projeto |
| `projectsData.js` | Fonte dos dados dos projetos |
| `Contact` | Envio por endpoint ou fallback email |

## Pipeline de Qualidade

```text
editar codigo
└── npm run lint
    └── npm run build
        └── npm run preview
```
