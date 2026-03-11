# 🎯 ARQUITETURA E DIAGRAMA DE COMPONENTES

## 📐 Diagrama de Hierarquia de Componentes

```
┌─────────────────────────────────────────────────────┐
│                   index.html                         │
│          (Entry Point da Aplicação)                  │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│                   main.jsx                           │
│          (Monta React com StrictMode)                │
│           Carrega: index.css                         │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│                   App.jsx                            │
│        (Componente Raiz - Orquestrador)             │
│         Carrega: App.css                            │
│                                                      │
│  └─ Renderiza Seções em Sequência:                 │
└──┬────────────────────────────────────────────────┬─┘
   │                                                  │
   ├─────────────────────────────────────────────────┤
   │                                                  │
   ▼                                                  ▼
┌──────────────────────┐              ┌──────────────────────┐
│ 1. Header            │              │ 2. Home              │
│ ├─ Nav Links         │              │ └─ Hero              │
│ ├─ Logo              │              │    ├─ Foto Perfil   │
│ ├─ Social Links      │              │    ├─ Título         │
│ └─ Mobile Menu       │              │    └─ Descrição      │
│    (toggle)          │              └──────────────────────┘
└──────────────────────┘
   │                                      │
   │                                      │
   ├─────────────────────────────────────┤
   │                                     │
   ▼                                     ▼
┌──────────────────────┐      ┌──────────────────────┐
│ 3. About             │      │ 4. Skills            │
│ └─ Descrição         │      │ ├─ Skill Grid        │
│    (Seção HTML)      │      │ ├─ [SkillCard x7]    │
│                      │      │ │  ├─ Icon           │
└──────────────────────┘      │ │  └─ Nome            │
                              │ └─ (renderizado       │
   │                          │    com .map())        │
   │                          └──────────────────────┘
   │                                     │
   ├─────────────────────────────────────┤
   │                                     │
   ▼                                     ▼
┌──────────────────────┐      ┌──────────────────────┐
│ 5. Project           │      │ 6. Contact           │
│ ├─ ProjectGrid       │      │ ├─ Form Container    │
│ ├─ [CardProject x3]  │      │ ├─ Input: Nome       │
│ │  ├─ Image          │      │ ├─ Input: Email      │
│ │  ├─ Title          │      │ ├─ Textarea: Msg     │
│ │  ├─ Description    │      │ └─ Button: Submit    │
│ │  └─ Link Button    │      │    (console.log)     │
│ └─ (renderizado      │      │                      │
│    com .map())       │      └──────────────────────┘
└──────────────────────┘
   │                                     │
   ├─────────────────────────────────────┤
   │                                     │
   ▼
┌──────────────────────┐
│ 7. Footer            │
│ └─ Copyright         │
│    (dinâmico)        │
└──────────────────────┘
```

---

## 📦 Estrutura de Pastas Detalhada

```
portifolio/
│
├── 📄 index.html
│   └─ Root HTML, carrega bundle
│
├── 📄 package.json
│   └─ Dependencies: React 19.2.0, react-dom 19.2.0
│   └─ Scripts: dev, build, lint, preview
│
├── 📄 vite.config.js
│   └─ Vite 8.0.0-beta.13
│   └─ React Plugin + Babel Compiler
│
├── 📄 eslint.config.js
│   └─ ESLint 9.39.1
│   └─ React Hooks Rules
│
├── 📄 README.md
│   └─ Docs básicas (template Vite)
│
├── 📁 public/
│   └─ 🖼️ vite.svg (estático)
│
├── 📁 src/ (Código-fonte)
│   │
│   ├── 📄 main.jsx
│   │   └─ Entry point
│   │
│   ├── 📄 App.jsx
│   │   └─ Componente raiz
│   │
│   ├── 📄 App.css
│   │   └─ Estilos App
│   │
│   ├── 📄 index.css
│   │   └─ Reset CSS + Dark Theme Global
│   │
│   ├── 📁 assets/ (13 imagens/ícones)
│   │   ├── 🖼️ 2210_w018_n002_1346a_p30_1346.jpg (Fundo)
│   │   ├── 🖼️ log2.jpg (Logo Header)
│   │   ├── 🖼️ log3.jpg (Foto perfil)
│   │   ├── 🖼️ logo.png (Logo padrão)
│   │   ├── 🎨 html.png (Icon)
│   │   ├── 🎨 css.png (Icon)
│   │   ├── 🎨 js.png (Icon)
│   │   ├── 🎨 react.png (Icon)
│   │   ├── 🎨 react.svg (Icon)
│   │   ├── 🎨 node.png (Icon)
│   │   ├── 🎨 git.png (Icon)
│   │   ├── 🎨 figma.png (Icon)
│   │   ├── 🎨 sql.png (Icon)
│   │   ├── 🎨 menu-togle.svg (UI)
│   │   └── 🎨 menu-closer.svg (UI)
│   │
│   └── 📁 components/ (11 componentes)
│       │
│       ├── 📁 Header/
│       │   ├── Header.jsx (Navegação + Menu Mobile)
│       │   └── Header.module.css
│       │
│       ├── 📁 Home/
│       │   └── Home.jsx (Wrapper para Hero)
│       │
│       ├── 📁 Hero/
│       │   ├── Hero.jsx (Apresentação Principal)
│       │   └── Hero.module.css
│       │
│       ├── 📁 About/
│       │   ├── About.jsx (Seção "Sobre Mim")
│       │   └── About.css
│       │
│       ├── 📁 Skills/
│       │   ├── Skills.jsx (Grid de Habilidades)
│       │   └── Skills.module.css
│       │
│       ├── 📁 Project/
│       │   ├── Project.jsx (Container de Projetos)
│       │   ├── Project.module.css
│       │   │
│       │   └── 📁 projeto-view-main/
│       │       ├── README.md
│       │       │
│       │       ├── 📁 devmedia/
│       │       │   ├── Agencia-de-Design-Digital/
│       │       │   ├── Agencia-de-Viagens/
│       │       │   ├── API-de-captura-de-leads/
│       │       │   ├── Barbearia/
│       │       │   ├── Cafeteria/
│       │       │   ├── Calculadora-de-Porcentagem/
│       │       │   ├── Cardapio-Digital/ (Next.js)
│       │       │   ├── Clinica/
│       │       │   ├── Conversor/
│       │       │   ├── Eventos-Astronomicos/
│       │       │   ├── Fato-Historico/
│       │       │   ├── Imobiliaria/
│       │       │   ├── Jogo-de-Forca/
│       │       │   ├── LinkBio-do-Neymar-Jr/
│       │       │   ├── Loja-oculos/ (Next.js)
│       │       │   ├── Novo/
│       │       │   ├── Padaria/
│       │       │   ├── Pagina-de-Divulgacao-do-Livro/
│       │       │   ├── Parque-Estadual/
│       │       │   ├── Petshop/
│       │       │   ├── Pousada/
│       │       │   ├── Projet-ipca/
│       │       │   ├── Provedor-Hospedagem/
│       │       │   ├── Quiz-Fatos-Historicos/
│       │       │   └── Sorveteria/
│       │       │
│       │       └── 📁 mentoria/
│       │           ├── pagina-login/
│       │           └── Nova-pasta/
│       │
│       ├── 📁 CardProject/
│       │   ├── CardProject.jsx (Card Individual)
│       │   └── CardProject.module.css
│       │
│       ├── 📁 Contact/
│       │   ├── Contact.jsx (Formulário)
│       │   └── Contact.css
│       │
│       ├── 📁 Footer/
│       │   ├── Footer.jsx (Rodapé)
│       │   └── Footer.css
│       │
│       ├── 📁 Gallery/
│       │   ├── Gallery.jsx (Componente Reutilizável)
│       │   └── Gallery.css
│       │
│       └── 📁 Button/
│           ├── button.jsx (Botão Reutilizável)
│           └── button.module.css
│
└── 📄 ESTRUTURA_E_DOCUMENTACAO.md (Documentação Completa)
    └── Versão descritiva completa
```

---

## 🔄 Fluxo de Dados

```
┌──────────────────────────────────────────────────────┐
│                   Estado Global                      │
│           (Nenhum - Arquitetura Simples)            │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│            Estado Local (useState)                   │
├──────────────────────────────────────────────────────┤
│                                                      │
│  Header Component:                                  │
│  └─ menuActive: boolean (toggle menu)               │
│                                                      │
│  Contact Component:                                 │
│  └─ formData: {name, email, message}                │
│                                                      │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│            Dados Estáticos (Arrays)                 │
├──────────────────────────────────────────────────────┤
│                                                      │
│  Skills.jsx:                                        │
│  └─ skills: [                                       │
│      {name: 'HTML5', icon: html},                   │
│      {name: 'CSS3', icon: css},                     │
│      ...                                            │
│     ]                                               │
│                                                      │
│  Project.jsx:                                       │
│  └─ projectsData: [                                 │
│      {title, description, link, image},             │
│      ...                                            │
│     ]                                               │
│                                                      │
│  Header.jsx:                                        │
│  └─ socialLinks: [                                  │
│      {href, label, icon},                           │
│      ...                                            │
│     ]                                               │
│                                                      │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│            Navegação (sem routing)                   │
├──────────────────────────────────────────────────────┤
│                                                      │
│  Âncoras HTML (#id):                               │
│  - scrollIntoView({ behavior: 'smooth' })           │
│  - IDs: home, about, skills, projects, contact      │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## 📊 Matriz de Componentes

```
┌─────────────────┬──────────────┬──────────────────────┬────────────┐
│ Componente      │ Tipo         │ Responsabilidade     │ Estado/    │
│                 │              │                      │ Props      │
├─────────────────┼──────────────┼──────────────────────┼────────────┤
│ Header          │ Layout       │ Navegação principal  │ useState   │
│                 │              │ Menu mobile          │ (menu)     │
├─────────────────┼──────────────┼──────────────────────┼────────────┤
│ Home            │ Container    │ Wrapper para Hero    │ Simples    │
├─────────────────┼──────────────┼──────────────────────┼────────────┤
│ Hero            │ Display      │ Apresentação visual  │ Nenhum     │
│                 │              │                      │            │
├─────────────────┼──────────────┼──────────────────────┼────────────┤
│ About           │ Display      │ Sobre o Marcelo      │ Nenhum     │
├─────────────────┼──────────────┼──────────────────────┼────────────┤
│ Skills          │ Display      │ Grid de habilidades  │ Array      │
│                 │              │                      │ (dados)    │
├─────────────────┼──────────────┼──────────────────────┼────────────┤
│ Project         │ Container    │ Orquestrador de      │ Array      │
│                 │              │ projetos             │ (dados)    │
├─────────────────┼──────────────┼──────────────────────┼────────────┤
│ CardProject     │ Display      │ Card individual      │ Props      │
│                 │              │                      │ (4 props)  │
├─────────────────┼──────────────┼──────────────────────┼────────────┤
│ Contact         │ Form         │ Formulário contato   │ useState   │
│                 │              │                      │ (form)     │
├─────────────────┼──────────────┼──────────────────────┼────────────┤
│ Footer          │ Layout       │ Rodapé estático      │ Nenhum     │
├─────────────────┼──────────────┼──────────────────────┼────────────┤
│ Gallery         │ Display      │ Galeria reutilizável │ Props      │
│                 │              │                      │ (2 props)  │
├─────────────────┼──────────────┼──────────────────────┼────────────┤
│ Button          │ Display      │ Botão reutilizável   │ Props      │
│                 │              │                      │ (2+ props) │
└─────────────────┴──────────────┴──────────────────────┴────────────┘
```

---

## 🎨 Estrutura de Estilos

```
┌─────────────────────────────────────────────────────┐
│              ESTILOS GLOBAIS                        │
├─────────────────────────────────────────────────────┤
│                                                     │
│  index.css:                                         │
│  ├─ :root (vars CSS)                               │
│  ├─ Font: Roboto                                    │
│  ├─ Dark Theme: #0f172a, #f1f5f9                   │
│  ├─ Background: Gradiente 135deg                    │
│  ├─ Links: #60a5fa (Blue-400)                      │
│  ├─ Reset HTML (body, a, button)                    │
│  └─ Transições: 0.3s ease                          │
│                                                     │
│  App.css:                                           │
│  └─ Estilos específicos do App                      │
│                                                     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│           CSS MODULES (Scoped)                      │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Header.module.css       → Header                  │
│  Hero.module.css         → Hero                    │
│  Skills.module.css       → Skills                  │
│  Project.module.css      → Project                 │
│  CardProject.module.css  → CardProject             │
│  Button.module.css       → Button                  │
│  Header.module.css       → Header                  │
│                                                     │
│  (Isolamento de estilos via CSS Modules)           │
│                                                     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│        CSS NORMAL (Global por seção)               │
├─────────────────────────────────────────────────────┤
│                                                     │
│  About.css              → About                    │
│  Contact.css            → Contact                  │
│  Footer.css             → Footer                   │
│  Gallery.css            → Gallery                  │
│                                                     │
│  (Importados como CSS global no componente)        │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 🚀 Pipeline de Execução

```
npm install
    │
    ▼
 node_modules/
    │
    ├─ react@19.2.0
    ├─ react-dom@19.2.0
    └─ [...outras deps...]

npm run dev
    │
    ▼
vite dev server
    │
    ├─ Lê vite.config.js
    │  ├─ React Plugin
    │  └─ Babel Compiler
    │
    ├─ Lê eslint.config.js (opcional)
    │
    ├─ Compila main.jsx
    │  └─ Renderiza App.jsx
    │
    ├─ Serve em http://localhost:5173/ (padrão)
    │
    └─ HMR ativo para Fast Refresh

npm run build
    │
    ▼
vite build
    │
    ├─ Minifica código
    ├─ Otimiza assets
    ├─ Tree-shaking
    └─ Output: dist/

npm run lint
    │
    ▼
eslint .
    │
    └─ Verifica qualidade código (ESLint)

npm run preview
    │
    ▼
Preview build local
    │
    └─ Serve dist/ em localhost
```

---

## 🔗 Fluxo de Renderização

```
index.html
  │
  │ Root: #root
  │
  └─► React.createRoot()
      │
      └─► <App />
          │
          ├─► <Header />
          │   └─ Menu Mobile (useState)
          │   └─ Social Links
          │
          ├─► <Home />
          │   └─► <Hero />
          │       └─ Foto + Título + Descrição
          │
          ├─► <About />
          │   └─ Texto sobre Marcelo
          │
          ├─► <Skills />
          │   └─ Map: skills.map() → Card
          │
          ├─► <Project />
          │   └─ Map: projectsData.map() → CardProject
          │       └─ Título + Descrição + Link + Imagem
          │
          ├─► <Contact />
          │   └─ Form: nome, email, mensagem
          │   └─ useState: formData
          │   └─ Handlers: onChange, onSubmit
          │
          └─► <Footer />
              └─ Copyright © {year} Marcelo | Portfólio Web Dev
```

---

## 📋 Props Flow

```
App
 │
 ├─► Header (sem props)
 │    └─ Internal: menuActive
 │    └─ Renderiza: socialLinks (array local)
 │
 ├─► Home (sem props)
 │    └─► Hero (sem props)
 │
 ├─► About (sem props)
 │
 ├─► Skills (sem props)
 │    └─ Internal: skills (array local)
 │    └─ .map(): Renderiza sem passar props
 │
 ├─► Project (sem props)
 │    └─ Internal: projectsData (array local)
 │    └─ .map(): Passa props para CardProject
 │         └─► CardProject
 │              ├─ title
 │              ├─ description
 │              ├─ link
 │              └─ image
 │
 ├─► Contact (sem props)
 │    └─ Internal: formData (useState)
 │
 ├─► Footer (sem props)
 │
 └─ Componentes Não Usados (mas disponíveis):
    ├─► Gallery (props: items, link)
    └─► Button (props: link, children, ...props)
```

---

## 🎭 Padrões Identificados

### ✅ Component-Based Architecture
```
Cada seção é um componente independente
├─ Header
├─ About
├─ Skills
├─ Project
├─ Contact
└─ Footer
```

### ✅ Functional Components com Hooks
```
const Component = () => {
  const [state, setState] = useState();
  return <JSX />;
};
```

### ✅ Data Mapping com .map()
```
{array.map((item, index) => (
  <Component key={index} {...props} />
))}
```

### ✅ CSS Modules para Isolamento
```
import styles from './Component.module.css';
<div className={styles.className}></div>
```

### ✅ Conditional Rendering
```
{condition ? <ComponentA /> : <ComponentB />}
```

### ✅ Event Handlers
```
const handleChange = (e) => { ... };
const handleSubmit = (e) => { ... };
```

---

## 📈 Complexidade por Componente

```
Simplicidade ────────────────────────────► Complexidade

Footer
About
Home
Gallery
Button
  │
  ├─ Hero
  ├─ Skills
  │
  ├─ CardProject
  │
  ├─ Project
  │
  ├─ Contact
  │
  ├─ Header
  │
  └─ App (Orquestrador)
```

| Componente | Complexity | Linhas | Estado |
|-----------|-----------|--------|--------|
| Footer | ⭐ | ~10 | Nenhum |
| About | ⭐ | ~30 | Nenhum |
| Home | ⭐ | ~10 | Nenhum |
| Hero | ⭐⭐ | ~30 | Nenhum |
| Skills | ⭐⭐ | ~30 | Dados |
| CardProject | ⭐⭐ | ~20 | Props |
| Project | ⭐⭐ | ~30 | Dados |
| Contact | ⭐⭐⭐ | ~50 | useState |
| Header | ⭐⭐⭐ | ~50 | useState |
| App | ⭐ | ~20 | Nenhum |

---

## 🎯 Próximas Melhorias (Recomendadas)

```
┌─────────────────────────────────────────────────┐
│          ROADMAP DE MELHORIAS                   │
├─────────────────────────────────────────────────┤
│                                                 │
│  1. Backend Integration                         │
│     ├─ API para formulário de contato           │
│     ├─ SendGrid/Mailgun para emails             │
│     └─ Database para persistência               │
│                                                 │
│  2. Routing (React Router v6)                   │
│     ├─ Múltiplas páginas                        │
│     └─ Nested routes                            │
│                                                 │
│  3. TypeScript                                  │
│     ├─ Type safety                              │
│     ├─ IntelliSense melhorado                   │
│     └─ Props validation                         │
│                                                 │
│  4. Estado Global (Context/Zustand)             │
│     ├─ Theme (Light/Dark)                       │
│     ├─ User data                                │
│     └─ App state                                │
│                                                 │
│  5. Testing                                     │
│     ├─ Vitest (unit tests)                      │
│     ├─ React Testing Library                    │
│     └─ E2E (Playwright/Cypress)                 │
│                                                 │
│  6. SEO                                         │
│     ├─ next-seo / Helmet                        │
│     ├─ Meta tags dinâmicas                      │
│     └─ Sitemap                                  │
│                                                 │
│  7. Analytics                                   │
│     ├─ Google Analytics                         │
│     └─ Conversion tracking                      │
│                                                 │
│  8. Deploy                                      │
│     ├─ Vercel (recomendado)                     │
│     ├─ Netlify                                  │
│     └─ GitHub Pages                             │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

**Documentação Gerada:** 11 de março de 2026  
**Desenvolvedor:** Marcelo Henrique Sarzedas
