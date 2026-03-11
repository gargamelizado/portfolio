# 📋 Documentação Completa do Portfólio - Portfolio Web Dev

## 🎯 Resumo Executivo

**Projeto:** Portfólio Web Dev  
**Versão:** 0.0.0  
**Tipo:** Aplicação SPA (Single Page Application)  
**Framework Principal:** React 19.2.0  
**Build Tool:** Vite 8.0.0-beta.13  
**Estilo:** CSS Modules + CSS Global  
**Data da Documentação:** 11 de março de 2026

---

## 📦 Stack Tecnológico

### Runtime & Build
- **React**: ^19.2.0
- **React-DOM**: ^19.2.0
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

---

## 🗂️ Estrutura de Pastas Detalhada

```
portifolio/
├── src/
│   ├── components/          # Componentes React
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
│   │   ├── Header/          # Cabeçalho com navegação
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.css
│   │   ├── Hero/            # Seção hero com apresentação
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.module.css
│   │   ├── Home/            # Página inicial (wrapper do Hero)
│   │   │   └── Home.jsx
│   │   ├── Project/         # Seção de projetos
│   │   │   ├── Project.jsx
│   │   │   └── Project.module.css
│   │   └── Skills/          # Seção de habilidades
│   │       ├── Skills.jsx
│   │       └── Skills.module.css
│   │
│   ├── assets/              # Imagens e ícones
│   │   ├── 2210_w018_n002_1346a_p30_1346.jpg  (Imagem de fundo)
│   │   ├── css.png
│   │   ├── figma.png
│   │   ├── git.png
│   │   ├── html.png
│   │   ├── js.png
│   │   ├── log2.jpg         (Logo/Header)
│   │   ├── log3.jpg         (Foto de perfil)
│   │   ├── logo.png         (Logo padrão)
│   │   ├── menu-closer.svg  (Ícone fechar menu)
│   │   ├── menu-togle.svg   (Ícone abrir menu)
│   │   ├── node.png
│   │   ├── react.png
│   │   ├── react.svg
│   │   └── sql.png
│   │
│   ├── App.jsx              # Componente raiz
│   ├── App.css              # Estilos globais do App
│   ├── main.jsx             # Entry point da aplicação
│   ├── index.css            # Reset CSS e estilos globais
│   │
│   └── components/Project/projeto-view-main/   # (Pasta com exemplos de projetos)
│       └── devmedia/        # Projetos demo/exemplo do DevMedia
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

### 1. **Header** (`Header.jsx` + `Header.module.css`)
- **Responsabilidade:** Navegação principal e cabeçalho
- **Features:**
  - Menu responsivo (mobile toggle com ícones SVG)
  - Links de redes sociais (GitHub, LinkedIn)
  - Logo/branding
  - Navegação suave (smooth scroll) para seções
  - Estado gerenciado com `useState` para menu ativo/inativo
- **Imports de Assets:** `log2.jpg`, `menu-closer.svg`, `menu-togle.svg`
- **Links Sociais:** 
  - GitHub: https://github.com/gargamelizado
  - LinkedIn: https://www.linkedin.com/in/marcelo-henrique-sarzedas-623690371/

### 2. **Home** (`Home.jsx`)
- **Responsabilidade:** Página inicial/wrapper
- **Features:**
  - Seção com ID "home" para anchor navigation
  - Renderiza o componente Hero
- **Componentes Filhos:** Hero

### 3. **Hero** (`Hero.jsx` + `Hero.module.css`)
- **Responsabilidade:** Apresentação visual principal (banner de boas-vindas)
- **Features:**
  - Título "Olá, eu sou Marcelo"
  - Subtítulo "Desenvolvedor Full-Stack"
  - Foto de perfil
  - Descrição profissional com background em Análise e Desenvolvimento de Sistemas
  - Design responsivo com CSS Modules
- **Imports de Assets:** `log3.jpg` (foto de perfil)
- **Conteúdo:**
  - Experiência em HTML5, CSS3, JavaScript, React, Node.js
  - Foco em UX/UI e performance
  - Comprometimento com qualidade de código e Git

### 4. **About** (`About.jsx` + `About.css`)
- **Responsabilidade:** Seção "Sobre Mim"
- **Features:**
  - Apresentação profissional
  - Descrição de especialização (Front-end/Interface)
  - Menção à confeitaria (hobby profissional)
  - Foco em atenção aos detalhes e satisfação do cliente
- **ID da Seção:** "about"

### 5. **Skills** (`Skills.jsx` + `Skills.module.css`)
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

### 6. **Project** (`Project.jsx` + `Project.module.css`)
- **Responsabilidade:** Seção de portfólio de projetos
- **Features:**
  - Array `projectsData` com 3 projetos demo:
    1. Portfólio Pessoal (React + CSS Modules)
    2. Landing Page Agência (React + Animações CSS)
    3. E-commerce Responsivo (React + Node.js)
  - Renderiza múltiplos `CardProject` via `.map()`
  - Links para GitHub
- **ID da Seção:** "projects"
- **Componentes Filhos:** CardProject

### 7. **CardProject** (`CardProject.jsx` + `CardProject.module.css`)
- **Responsabilidade:** Card individual de projeto
- **Props:**
  - `title` - Título do projeto
  - `description` - Descrição
  - `link` - URL do github/projeto
  - `image` - Imagem do projeto (default: `logo.png`)
- **Features:**
  - Imagem do projeto (com fallback)
  - Título e descrição
  - Link para abrir em nova aba
  - Design card responsivo

### 8. **Contact** (`Contact.jsx` + `Contact.css`)
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

### 9. **Footer** (`Footer.jsx` + `Footer.css`)
- **Responsabilidade:** Rodapé da aplicação
- **Features:**
  - Copyright dinâmico (ano atual)
  - Créditos: "© {year} Marcelo | Portfólio Web Dev"
  - Elemento semantic `<footer>`

### 10. **Button** (`button.jsx` + `button.module.css`)
- **Responsabilidade:** Componente reutilizável de botão/link
- **Props:**
  - `link` - URL para href
  - `children` - Texto do botão
  - `...props` - Props adicionais
- **Features:**
  - Renderiza como `<a>` tag (botão estilizado)
  - Fallback text: "Clique aqui"
  - Wrapper com CSS Module

### 11. **Gallery** (`Gallery.jsx` + `Gallery.css`)
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

### Fotos/Imagens
| Arquivo | Uso | Tipo |
|---------|-----|------|
| `log2.jpg` | Logo/Header | JPG |
| `log3.jpg` | Foto de perfil (Hero) | JPG |
| `logo.png` | Logo padrão (fallback) | PNG |
| `2210_w018_n002_1346a_p30_1346.jpg` | Imagem de fundo | JPG |

### Ícones de Tecnologias
| Arquivo | Tecnologia |
|---------|-----------|
| `html.png` | HTML5 |
| `css.png` | CSS3 |
| `js.png` | JavaScript |
| `react.png` | React |
| `react.svg` | React (vetor) |
| `node.png` | Node.js |
| `git.png` | Git |
| `figma.png` | Figma |
| `sql.png` | SQL |

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
index.html
  ↓
main.jsx (Entry Point)
  ├── Monta React com StrictMode
  ├── Carrega index.css (estilos globais)
  └── Renderiza App.jsx
      │
      └── App.jsx (Componente Raiz)
          ├── Importa App.css
          └── Renderiza Seções em Ordem:
              │
              ├── 1️⃣ <Header />
              │   └── Navegação + Menu Mobile + Social Links
              │
              ├── 2️⃣ <Home /> → <Hero />
              │   └── Apresentação Principal
              │
              ├── 3️⃣ <About />
              │   └── Seção "Sobre Mim"
              │
              ├── 4️⃣ <Skills />
              │   └── Grid de Tecnologias
              │
              ├── 5️⃣ <Project /> → <CardProject /> (x3)
              │   └── Portfolio de Projetos
              │
              ├── 6️⃣ <Contact />
              │   └── Formulário de Contato
              │
              └── 7️⃣ <Footer />
                  └── Copyright Dinâmico
```

### Navegação
- **Header** fornece links para cada seção com IDs:
  - `#home` → Home
  - `#about` → About
  - `#skills` → Skills
  - `#projects` → Projects
  - `#contact` → Contact
- **Scroll Suave:** Implementado com `element.scrollIntoView({ behavior: 'smooth' })`
- **Menu Mobile:** Toggle com ícones SVG, fecha ao clicar em link

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
- ESLint 9.39.1 (configração flat)
- Recommended rules de JS
- React Hooks plugin
- React Refresh plugin
- ECMAScript 2020+
- JSX suportado
- Globals do browser
- Padrão: Ignora pasta /dist/
```

### `package.json`
```json
- "type": "module"  → ES Modules
- React 19.2.0     → Versão estável
- Compilation override: Vite 8.0.0-beta.13
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

## 📁 Pasta Adicional: `projeto-view-main`

Localização: `src/components/Project/projeto-view-main/`

**Conteúdo:** Exemplos de projetos do DevMedia (Mentoria + Estudos)

**Subpastas Principais:**
- `devmedia/` - Projetos de exemplo/estudo
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

- `mentoria/` - Projetos de mentoria/aprendizado
  - pagina-login/
  - Outras pastas

**Status:** Esses arquivos são referências/exemplos, **não carregados** na aplicação principal.

---

## 💡 Pontos Importantes

### 1. **Sem Roteamento**
- Aplicação de página única linear (não usa React Router)
- Navegação via âncoras HTML (#id)

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
   - Implementar React Router para múltiplas páginas
   - Estruturar como SPA completo

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
| Componentes React | 11 |
| Seções de Conteúdo | 7 |
| CSS Modules | 6 |
| CSS Global | 2 |
| CSS Normal | 4 |
| Imagens | 13 |
| Ícones SVG | 2 |
| Dependências Diretas | 2 (React + React-DOM) |
| DevDependencies | 10 |
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

**Documentação criada em:** 11 de março de 2026  
**Desenvolvedor:** Marcelo Henrique Sarzedas  
**Portfólio:** https://github.com/gargamelizado
