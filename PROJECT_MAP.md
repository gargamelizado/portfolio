# 🗺️ Project Map (Atualizado)

## 1) Visão geral
Aplicação SPA de portfólio em React + Vite, com páginas em seções únicas e navegação por âncoras no mesmo documento.

---

## 2) Estrutura do repositório

```text
portfolio/
├── README.md
├── PROJECT_MAP.md
├── MAPA_RAPIDO.md
├── DOCUMENTACAO_INDEX.md
├── ESTRUTURA_E_DOCUMENTACAO.md
├── ARQUITETURA_E_DIAGRAMAS.md
├── GUIA_DE_INICIO_RAPIDO.md
├── RESPONSIVIDADE_GUIDE.md
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── index.html
├── public/
│   └── vite.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── App.css
    ├── assets/
    │   └── (20 arquivos de imagens/ícones)
    └── components/
        ├── About/
        ├── Button/
        ├── CardProject/
        ├── Contact/
        ├── Footer/
        ├── Gallery/
        ├── Header/
        ├── Hero/
        ├── Home/
        ├── Project/
        └── Skills/
```

---

## 3) Mapa de componentes (React)

```text
App
├── Header
├── Home
│   └── Hero
├── About
├── Skills
├── Project
│   └── CardProject (lista)
├── Contact
└── Footer
```

### Componentes reutilizáveis auxiliares
- `Gallery`: grade de itens com imagem/título/descrição/link.
- `Button`: link estilizado como botão.

---

## 4) Responsabilidades por componente

- **Header**
  - Navegação por seção (`scrollIntoView`).
  - Menu mobile com estado local `menuActive`.
  - Links sociais (GitHub e LinkedIn).

- **Home / Hero**
  - Seção de abertura com imagem de perfil e texto de apresentação.

- **About**
  - Texto institucional (“Sobre Mim”).

- **Skills**
  - Renderização de lista local de skills (7 itens).

- **Project / CardProject**
  - Renderização de lista local de projetos (4 itens).

- **Contact**
  - Formulário controlado localmente (`useState`).
  - Submissão local (`console.log`, reset e `alert`).

- **Footer**
  - Exibe ano dinâmico.

---

## 5) IDs de navegação

| Seção | ID |
|---|---|
| Home | `home` |
| Sobre | `about` |
| Skills | `skills` |
| Projetos | `projects` |
| Contato | `contact` |

---

## 6) Estilos

- **Globais:** `src/index.css`, `src/App.css`
- **CSS Modules:** Header, Hero, Skills, Project, CardProject, Button
- **CSS comum por componente:** About, Contact, Footer, Gallery

---

## 7) Build e qualidade

Scripts do `package.json`:
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run preview`

Configuração Vite:
- `@vitejs/plugin-react`
- `babel-plugin-react-compiler`

---

## 8) Situação atual do projeto

- Sem roteamento (`react-router`) — navegação é por âncoras.
- Sem integração de backend no formulário.
- Sem suíte de testes automatizados no repositório.
- Projeto pronto para evolução incremental por seções/componentes.
