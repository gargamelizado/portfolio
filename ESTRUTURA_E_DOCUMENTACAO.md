# Estrutura e Documentacao Tecnica

## Resumo

Portfolio em React com Vite, organizado como SPA com React Router. A aplicacao possui uma landing completa, uma pagina de projetos e uma pagina dinamica de detalhes por `slug`.

## Stack

| Pacote | Versao |
|---|---|
| React | `^19.2.0` |
| React DOM | `^19.2.0` |
| React Router DOM | `^7.13.2` |
| Vite | `^8.0.0-beta.13` |
| ESLint | `^9.39.1` |
| Prettier | `3.8.1` |

## Arquitetura

```text
App.tsx
└── Rotas
    └── BrowserRouter
        └── Routes
            ├── Layout
            │   ├── Header
            │   └── Outlet
            │       ├── Home
            │       ├── Project
            │       └── ProjectDetails
            └── Navigate fallback
```

## Rotas

| Path | Elemento | Observacao |
|---|---|---|
| `/` | `Home` | Landing completa |
| `/projects` | `Project` | Lista todos os projetos |
| `/projects/:slug` | `ProjectDetails` | Busca dados em `projectsData.ts` |
| `*` | `Navigate` | Redireciona para `/` |

## Componentes

### Layout

`src/components/Layout/Layout.jsx`

Mantem o `Header` em todas as rotas e renderiza o conteudo da pagina pelo `Outlet`.

### Header

`src/components/Header/Header.jsx`

Responsavel por:

- Logo com link para `/`.
- Navegacao com `NavLink`.
- Scroll para secoes da home.
- Menu mobile.
- Fechamento com Escape.
- Bloqueio do scroll do `body` quando o menu mobile esta aberto.
- Tema claro/escuro salvo em `localStorage` com a chave `portfolio-theme`.
- Links externos: GitHub e curriculo em PDF.

### Home

`src/components/Home/Home.jsx`

Compoe a landing:

```text
Hero -> About -> Skills -> Experience -> Project -> Contact -> Footer
```

Tambem recebe `location.state.scrollTo` quando o usuario clica em uma ancora a partir de outra rota.

### Project

`src/components/Project/Project.tsx`

Renderiza a grade de projetos a partir de `projectsData`.

### ProjectDetails

`src/components/ProjectDetails/ProjectDetails.tsx`

Usa `useParams` para pegar `slug`, procura o projeto correspondente e renderiza:

- Imagem.
- Descricao.
- Detalhes.
- Aprendizado.
- Tecnologias.
- Links de repositorio e website.

Se o `slug` nao existir, redireciona para `/projects`.

### CardProject

`src/components/CardProject/CardProject.tsx`

Mostra imagem, titulo, descricao, tecnologias e acoes:

- `Detalhes` quando existe `slug`.
- `Repositorio`.
- `Ver Website` quando existe `web`.

### Contact

`src/components/Contact/Contact.jsx`

Formulario com:

- Nome.
- Email.
- Mensagem.
- Estado de envio.
- Mensagem de status.

Envio:

- Se `VITE_CONTACT_ENDPOINT` existir, faz `POST` em JSON.
- Se nao existir, abre `mailto`.
- Se o `POST` falhar, tambem abre `mailto`.

## Dados dos Projetos

Arquivo:

```text
src/data/projectsData.ts
```

Formato esperado:

```js
{
  slug: 'pet-shop',
  title: 'Pet shop',
  description: '...',
  technologies: ['HTML5', 'CSS3'],
  details: '...',
  learning: '...',
  link: 'https://github.com/...',
  web: 'src/components/...',
  image: Petshop
}
```

## Assets

Principais grupos:

- `src/assets/`: logo, foto de perfil, icones de skills, icones de menu, PDF.
- `src/components/Project/img/`: screenshots usados nos cards.
- `src/components/Project/devmedia/` e `mentoria/`: projetos de estudo anexados.

## Estilos

| Tipo | Onde |
|---|---|
| Global | `src/index.css`, `src/App.css` |
| CSS Modules | Header, Hero, Skills, Project, ProjectDetails, CardProject, Button |
| CSS comum | About, Contact, Experience, Gallery, Footer |

## Qualidade

Comandos de validacao:

```bash
npm run lint
npm run build
```

Status da ultima revisao:

- Lint sem erros.
- Build gerado com sucesso.

## Melhorias Recomendadas

- Comprimir imagens grandes de projetos.
- Padronizar nomes de arquivos e textos com acentos.
- Adicionar testes automatizados.
- Melhorar SEO e metadados.
- Separar projetos de estudo grandes em repositorios proprios ou pasta publica/documentada.
