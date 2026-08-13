# Mapa Rapido do Projeto

## Local

```text
/home/marcelo/Área de trabalho/portifolio/portfolio
```

## Stack

- React 19.2.0
- React Router DOM 7.13.x
- Vite 8.0.0-beta.13
- CSS Modules + CSS global
- ESLint 9

## Comandos

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## Fluxo de Renderizacao

```text
index.html
└── src/main.tsx
    └── App.tsx
        └── router/rotas.tsx
            └── Layout
                ├── Header
                └── Outlet
                    ├── /              -> Home
                    ├── /projects      -> Project
                    └── /projects/:slug -> ProjectDetails
```

## Rotas

| Rota | Componente | Uso |
|---|---|---|
| `/` | `Home` | Landing completa |
| `/projects` | `Project` | Grade de projetos |
| `/projects/:slug` | `ProjectDetails` | Detalhe do projeto |
| `*` | `Navigate` | Redireciona para `/` |

## Secoes da Home

| ID | Componente |
|---|---|
| `home` | `Home` |
| `about` | `About` |
| `skills` | `Skills` |
| `experience` | `Experience` |
| `projects` | `Project` |
| `contact` | `Contact` |

## Arquivos Mais Editados

| O que mudar | Arquivo |
|---|---|
| Rotas | `src/router/rotas.tsx` |
| Menu/topo/tema | `src/components/Header/Header.jsx` |
| Lista de projetos | `src/data/projectsData.ts` |
| Card de projeto | `src/components/CardProject/CardProject.tsx` |
| Detalhe de projeto | `src/components/ProjectDetails/ProjectDetails.tsx` |
| Home | `src/components/Home/Home.jsx` |
| Formulario | `src/components/Contact/Contact.jsx` |
| Estilos globais | `src/index.css` e `src/App.css` |

## Dados

Projetos ficam em:

```text
src/data/projectsData.ts
```

Cada item usa, em geral:

```js
{
  slug,
  title,
  description,
  technologies,
  details,
  learning,
  link,
  web,
  image
}
```

## Pontos de Atencao

- Ha projetos de estudo dentro de `src/components/Project/devmedia` e `src/components/Project/mentoria`.
- Alguns assets de projeto sao grandes e podem afetar o build.
- O formulario depende de `VITE_CONTACT_ENDPOINT`; sem isso, usa `mailto`.
- O tema e controlado no `Header` com `localStorage` e classe `body.darkmode`.
- Ainda nao ha testes automatizados.
