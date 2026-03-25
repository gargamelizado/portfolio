# 📋 Documentação Completa do Portfólio - Portfolio Web Dev

## 🎯 Resumo Executivo

**Projeto:** Portfólio Web Dev  
**Versão:** 0.0.0  
**Tipo:** SPA com **React Router** (várias URLs, um bundle)  
**Framework Principal:** React 19.2.0  
**Roteamento:** React Router DOM 7.x  
**Build Tool:** Vite 8.0.0-beta.13  
**Estilo:** CSS Modules + CSS Global  
**Documentação revisada:** março de 2026

---

## 📦 Stack Tecnológico

### Runtime & Build
- **React**: ^19.2.0
- **React-DOM**: ^19.2.0
- **React Router DOM**: ^7.13.x
- **Vite**: ^8.0.0-beta.13 (Next Gen Frontend Tooling)
- **@vitejs/plugin-react**: ^5.1.1

### Compilação & Otimização
- **Babel React Compiler**: ^1.0.0 (Ativado para otimizações automáticas)
- **React Compiler Plugin** via Babel

### Linting & Qualidade
- **ESLint**: ^9.39.1
- **@eslint/js**: ^9.39.1
- **eslint-plugin-react-hooks**: ^7.0.1
- **eslint-plugin-react-refresh**: ^0.4.24

### Type Checking (DevDependencies)
- **@types/react**: ^19.2.7
- **@types/react-dom**: ^19.2.3

### Utilitários
- **globals**: ^16.5.0
- **prettier** (dev): formatação opcional

---

## 🗂️ Estrutura de Pastas Detalhada

```
portifolio/
├── src/
│   ├── router/
│   │   └── rotas.jsx        # BrowserRouter, Layout, Routes, Navigate
│   ├── components/
│   │   ├── About/           # Seção "Sobre Mim"
│   │   │   ├── About.css
│   │   │   └── About.jsx
│   │   ├── Button/          # Componente Button reutilizável
│   │   │   ├── button.jsx
│   │   │   └── button.module.css
│   │   ├── CardProject/     # Card para exibição de projetos
│   │   │   ├── CardProject.jsx
│   │   │   └── CardProject.module.css
│   │   ├── Contact/         # Seção de formulário de contato
│   │   │   ├── Contact.css
│   │   │   └── Contact.jsx
│   │   ├── Footer/          # Rodapé da aplicação
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── Gallery/         # Componente galeria reutilizável
│   │   │   ├── Gallery.css
│   │   │   └── Gallery.jsx
│   │   ├── Layout/          # Header + Outlet (rotas filhas)
│   │   │   └── Layout.jsx
│   │   ├── Header/          # Navegação + menu mobile + toggle tema (body)
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.css
│   │   ├── Hero/            # Seção hero com apresentação
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.module.css
│   │   ├── Home/            # Conteúdo da rota / (sem Header duplicado)
│   │   │   └── Home.jsx
│   │   ├── Project/         # Grid de projetos (também rota /projects)
│   │   │   ├── Project.jsx
│   │   │   ├── Project.module.css
│   │   │   └── devmedia/    # Exercícios/projetos de estudo (não importados pelo app)
│   │   └── Skills/          # Seção de habilidades
│   │       ├── Skills.jsx
│   │       └── Skills.module.css
│   │
│   ├── assets/              # Imagens e SVG usados nos imports
│   │   ├── logo.png, html.png, css.png, js.png, react.png, node.png, git.png, figma.png
│   │   ├── log2.jpeg, github-logo2.png, foto perfil.jpeg, react.svg
│   │   └── menu-closer.svg, menu-togle.svg
│   │
│   ├── App.jsx              # Retorna <Rotas />
│   ├── App.css              # Estilos globais do App
│   ├── main.jsx             # Entry point da aplicação
│   ├── index.css            # Reset CSS e estilos globais
│
├── public/                  # Arquivos estáticos
│   └── vite.svg
│
├── package.json             # Dependências e scripts
├── vite.config.js           # Configuração do Vite
├── eslint.config.js         # Configuração do ESLint
├── index.html               # HTML principal
└── README.md               # Documentação básica
```

---

## 🧩 Componentes React - Responsabilidades

### 1. **Layout** (`Layout.jsx`)
- **Responsabilidade:** Cabeçalho fixo em todas as rotas + área de conteúdo
- **Conteúdo:** `<Header />` e `<Outlet />` (filhos: `Home` ou `Project`)

### 2. **Header** (`Header.jsx` + `Header.module.css`)
- **Responsabilidade:** Navegação e ações do topo
- **Features:**
  - `NavLink` para `/` e `/projects`
  - Scroll suave para `#about`, `#skills`, `#contact` na home; a partir de outras rotas usa `navigate('/', { state: { scrollTo } })`
  - Menu mobile (SVG), redes sociais, toggle `body.darkmode`
  - `useLocation` + `useNavigate`
- **Imports de Assets (ex.):** `log2.jpeg`, `github-logo2.png`, `menu-closer.svg`, `menu-togle.svg`
- **Links Sociais:** 
  - GitHub: https://github.com/gargamelizado
  - LinkedIn: https://www.linkedin.com/in/marcelo-henrique-sarzedas-623690371/

### 3. **Home** (`Home.jsx`)
- **Responsabilidade:** Rota `/` — todas as seções da landing
- **Features:**
  - `useLocation` + `useEffect` para scroll após navegação com `state.scrollTo`
  - Renderiza Hero, About, Skills, Project, Contact, Footer
- **ID:** `home` na `<section>` raiz

### 4. **Hero** (`Hero.jsx` + `Hero.module.css`)
- **Responsabilidade:** Apresentação visual principal (banner de boas-vindas)
- **Features:**
  - Título "Olá, eu sou Marcelo"
  - Subtítulo "Desenvolvedor Full-Stack"
  - Foto de perfil
  - Descrição profissional com background em Análise e Desenvolvimento de Sistemas
  - Design responsivo com CSS Modules
- **Imports de Assets:** `foto perfil.jpeg` (ou equivalente em `src/assets/`)
- **Conteúdo:**
  - Experiência em HTML5, CSS3, JavaScript, React, Node.js
  - Foco em UX/UI e performance
  - Comprometimento com qualidade de código e Git

### 5. **About** (`About.jsx` + `About.css`)
- **Responsabilidade:** Seção "Sobre Mim"
- **Features:**
  - Apresentação profissional
  - Descrição de especialização (Front-end/Interface)
  - Menção à confeitaria (hobby profissional)
  - Foco em atenção aos detalhes e satisfação do cliente
- **ID da Seção:** "about"

### 6. **Skills** (`Skills.jsx` + `Skills.module.css`)
- **Responsabilidade:** Exibição de habilidades tecnológicas
- **Features:**
  - Grid de skills com ícones
  - Array `skills` com 7 tecnologias:
    - HTML5
    - CSS3
    - JavaScript
    - React
    - Node.js
    - Git
    - Figma
  - Renderização com `.map()`
  - Design com CSS Modules
- **ID da Seção:** "skills"
- **Imports de Assets:** Ícones `.png` de cada tecnologia

### 7. **Project** (`Project.jsx` + `Project.module.css`)
- **Responsabilidade:** Grid de projetos na home e página `/projects`
- **Features:**
  - `projectsData`: título, descrição, `link` (repo), `web` opcional, imagem
  - Mapeia `CardProject`
- **ID da Seção:** `projects`

### 8. **CardProject** (`CardProject.jsx` + `CardProject.module.css`)
- **Props:** `title`, `description`, `link`, `web` (opcional), `image`
- **Features:** link repositório; “Ver Website” só se `web` estiver definido

### 9. **Contact** (`Contact.jsx` + `Contact.css`)
- **Responsabilidade:** Formulário de contato
- **Features:**
  - Form com 3 campos:
    - Nome (text)
    - Email (email)
    - Mensagem (textarea presumido)
  - Estado gerenciado com `useState` e objeto `formData`
  - Handlers: `handleChange`, `handleSubmit`
  - Validação básica (required)
  - Reset do form após submissão
  - Alert de sucesso
  - Log do formulário no console
- **ID da Seção:** "contact"

### 10. **Footer** (`Footer.jsx` + `Footer.css`)
- **Responsabilidade:** Rodapé da aplicação
- **Features:**
  - Copyright dinâmico (ano atual)
  - Créditos: "© {year} Marcelo | Portfólio Web Dev"
  - Elemento semantic `<footer>`

### 11. **Button** (`button.jsx` + `button.module.css`)
- **Responsabilidade:** Componente reutilizável de botão/link
- **Props:**
  - `link` - URL para href
  - `children` - Texto do botão
  - `...props` - Props adicionais
- **Features:**
  - Renderiza como `<a>` tag (botão estilizado)
  - Fallback text: "Clique aqui"
  - Wrapper com CSS Module

### 12. **Gallery** (`Gallery.jsx` + `Gallery.css`)
- **Responsabilidade:** Componente reutilizável de galeria
- **Props:**
  - `items` - Array de objetos com `image`, `title`, `description`
  - `link` - URL opcional
- **Features:**
  - Grid de itens
  - Renderização condicional (mensagem "Nenhum item encontrado")
  - Links opcionais com `target="_blank"`

---

## 🎨 Arquivos CSS/CSS Modules

### CSS Global
- **`src/index.css`** 
  - Font: Roboto
  - Dark theme com Slate colors
  - Background: Gradiente azul-escuro
  - Estilos de reset e normalizações
  - Transições suaves (0.3s)
  - Core typography (h1, buttons)

- **`src/App.css`**
  - Estilos específicos do App (não explorado completamente)

### CSS Modules (Componentes)
- **`Header.module.css`** - Estilos do header (navegação, menu mobile)
- **`Hero.module.css`** - Seção hero (layout, foto de perfil)
- **`Skills.module.css`** - Grid de skills
- **`Project.module.css`** - Grid de projetos
- **`CardProject.module.css`** - Card individual
- **`Button.module.css`** - Estilo do botão
- **`Header.module.css`** - Estilos de cabeçalho

### CSS Normal (sem Modules)
- **`About.css`** - Seção sobre mim
- **`Contact.css`** - Formulário de contato
- **`Footer.css`** - Rodapé
- **`Gallery.css`** - Galeria

---

## 🖼️ Assets (Imagens e Ícones)

### Fotos / branding (exemplos)
| Arquivo | Uso |
|---------|-----|
| `log2.jpeg` | Logo no header |
| `foto perfil.jpeg` | Hero |
| `github-logo2.png` | Link GitHub no header |
| `logo.png` | Fallback em `CardProject` |

### Ícones de skills (Skills.jsx)
| Arquivo | Tecnologia |
|---------|-----------|
| `html.png` … `figma.png` | As 7 skills listadas no componente |
| `react.svg` | Disponível em `assets` |

### Ícones de UI
| Arquivo | Uso |
|---------|-----|
| `menu-togle.svg` | Menu mobile (abrir) |
| `menu-closer.svg` | Menu mobile (fechar) |

### Statics
- **`public/vite.svg`** - Logo do Vite

---

## 🔧 Fluxo Principal da Aplicação

```
index.html → main.jsx (StrictMode) → App.jsx → router/rotas.jsx
  BrowserRouter
    Routes
      Layout (Route sem path, element pai)
        ├── Header
        └── Outlet
             ├─ path "/"     → Home (Hero … Footer)
             └─ path "/projects" → Project (cards)
      path "*" → Navigate replace "/"
```

### Navegação
- **React Router:** `/`, `/projects`, fallback `*`
- **Header:** `NavLink` para `/` e `/projects`; âncoras com scroll na home; vindo de `/projects`, `navigate('/', { state: { scrollTo } })` e `Home` lê no `useEffect`
- **Scroll:** `scrollIntoView({ behavior: 'smooth' })` onde aplicável

---

## 📜 Scripts NPM Disponíveis

```json
{
  "dev": "vite",           // 🚀 Inicia servidor dev (HMR ativado)
  "build": "vite build",   // 🔨 Build para produção (dist/)
  "lint": "eslint .",      // 🔍 Verifica código com ESLint
  "preview": "vite preview" // 👁️ Preview build local
}
```

### Como Usar
```bash
npm install              # Instalar dependências
npm run dev             # Iniciar desenvolvimento
npm run build           # Build para produção
npm run lint            # Verificar qualidade do código
npm run preview         # Preview do build
```

---

## ⚙️ Configurações Importantes

### `vite.config.js`
```javascript
- Plugin React habilitado
- Babel React Compiler integrado
- Fast Refresh ativado (HMR)
```

### `eslint.config.js`
```javascript
- ESLint 9 flat config (defineConfig + globalIgnores)
- Ignorados: dist, node_modules, **/.next/**, coverage, **/build/**
- Recommended JS + react-hooks + react-refresh (Vite)
```

### `package.json`
```json
- "type": "module"  → ES Modules
- react, react-dom, react-router-dom
- Vite (override 8.0.0-beta.x conforme package.json)
```

---

## 🎯 Tecnologias & Padrões Identificados

### Design Patterns
- ✅ **Component-Based Architecture**
- ✅ **CSS Modules** (Isolamento de estilos)
- ✅ **Functional Components** (hooks com useState)
- ✅ **Semantic HTML**

### Performance
- ✅ **React Compiler** (Otimizações automáticas)
- ✅ **Vite** (Build rápido e dev server eficiente)
- ✅ **CSS Modules** (CSS scoped)

### Acessibilidade
- ✅ **Semantic HTML** (`<header>`, `<footer>`, `<section>`)
- ✅ **Alt text** em imagens
- ✅ **ARIA ready** (estrutura compatível)

### Responsividade
- ✅ **Menu mobile toggle**
- ✅ **CSS Grid/Flexbox** (inferido via CSS Modules)
- ✅ **Design adaptativo**

---

## 📁 Pasta adicional: `src/components/Project/devmedia/`

**Conteúdo:** Projetos de estudo / referência (HTML estático, Next.js, Node, etc.)

**Não fazem parte do bundle Vite** salvo se você importá-los explicitamente.

**Exemplos de pastas:**
  - Agência de Design Digital
  - Agência de Viagens
  - API de Captura de Leads  
  - Barbearia
  - Cafeteria
  - Calculadora de Porcentagem
  - Cardápio Digital (Next.js)
  - Clínica
  - Conversor
  - Eventos Astronômicos
  - Fato Histórico
  - Imobiliária
  - Jogo de Forca
  - LinkBio do Neymar Jr
  - Loja de Óculos (Next.js)
  - Padaria
  - Página de Divulgação do Livro
  - Parque Estadual
  - Petshop
  - Pousada
  - Projeto IPCA
  - Provedor Hospedagem
  - Quiz Fatos Históricos
  - Sorveteria
- (outras pastas conforme seu clone)

**Status:** Referência local; o app principal consome só dados em `Project.jsx` e imagens em `Project/img/`.

---

## 💡 Pontos Importantes

### 1. **Roteamento parcial**
- Duas rotas principais + layout; a home continua sendo âncoras/scroll entre seções

### 2. **Sem State Global**
- Estado local em componentes (useState)
- Sem Redux, Context API ou Zustand

### 3. **Sem Backend**
- Formulário de contato é apenas frontend (console.log)
- Não há integração com API/banco de dados

### 4. **React Compiler Ativado**
- Otimizações de performance automáticas
- Pode impactar dev & build performance

### 5. **Versão Vite Beta**
- Usando Vite 8.0.0-beta.13 (versão pre-release)
- Considerar update para versão estável em produção

---

## 🚀 Recomendações Futuras

1. **Integração Backend**
   - Conectar formulário de contato a serviço de email (SendGrid, Mailgun)
   - Criar API Node.js para persistência

2. **Roteamento**
   - Expandir (ex.: `/projects/:slug`, novas rotas estáticas)

3. **TypeScript**
   - Migrar para TypeScript (melhor DX e type safety)

4. **State Management**
   - Considerar Context API ou Zustand se complexidade aumentar

5. **Testing**
   - Adicionar Vitest + React Testing Library
   - Testes unitários e E2E

6. **Hospedagem**
   - Deploy em Vercel (otimizada para Vite)
   - Alternativas: Netlify, GitHub Pages

7. **SEO**
   - Adicionar Helmet ou next-seo
   - Meta tags dinâmicas

8. **Estatísticas**
   - Google Analytics
   - Rastreamento de conversões

---

## 📊 Resumo de Recursos

| Recurso | Quantidade |
|---------|-----------|
| Componentes principais | 12+ (inclui Layout) |
| Rotas | 2 + fallback |
| CSS Modules | 6 |
| CSS Global | 2 |
| CSS Normal | 4 |
| Dependências diretas | react, react-dom, react-router-dom |
| Scripts NPM | 4 |

---

## 📝 Notas Finais

Este portfólio é uma aplicação **bem estruturada e profissional** com:
- ✅ Componentes bem organizados
- ✅ Estilos isolados com CSS Modules
- ✅ Navegação responsiva
- ✅ Design moderno (dark theme)
- ✅ Performance otimizada (React Compiler)
- ✅ Código limpo e legível

Pronto para **deploy em produção** ou **expansão futura** com as recomendações acima.

---

**Revisão:** março de 2026  
**Desenvolvedor:** Marcelo Henrique Sarzedas  
**Portfólio:** https://github.com/gargamelizado
