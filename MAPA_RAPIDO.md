# 🗺️ MAPA RÁPIDO DO PROJETO - Portfolio Web Dev

## 📍 Localização Raiz
```
/home/marcelo/Área de trabalho/portifolio/portifolio/
```

---

## ⚡ Quick Reference

### Stack
- **React** 19.2.0
- **React Router DOM** 7.13.x
- **Vite** 8.0.0-beta.13
- **CSS Modules + Global CSS**
- **ESLint** 9.39.1 (`globalIgnores`: `dist`, `node_modules`, `.next`, etc.)

### Scripts Principais
```bash
npm run dev      # Iniciar desenvolvimento
npm run build    # Build para produção
npm run lint     # Verificar código
npm run preview  # Preview build
```

---

## 🧩 Componentes principais

```
App → router/rotas.jsx (BrowserRouter)
└── Layout
    ├── Header (NavLink / + /projects, scroll seções, darkmode body)
    └── Outlet
        ├── / → Home → Hero, About, Skills, Project, Contact, Footer
        └── /projects → Project → CardProject × N

Gallery, Button (reutilizáveis; não necessariamente na home)
```

---

## 📂 Estrutura de Pastas

```
src/
├── router/
│   └── rotas.jsx           (Rotas + Layout)
├── components/
│   ├── Layout/             (Header + Outlet)
│   ├── About/
│   ├── Button/
│   ├── CardProject/
│   ├── Contact/
│   ├── Footer/
│   ├── Gallery/
│   ├── Header/
│   ├── Hero/
│   ├── Home/
│   ├── Project/            (+ devmedia/ estudos)
│   └── Skills/
├── assets/                 (imagens e SVGs usados nos imports)
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

---

## 🎨 Assets Disponíveis

### Fotos / branding (exemplos)
- `log2.jpeg` — logo no header
- `foto perfil.jpeg` — Hero
- `github-logo2.png` — rede social
- Ícones de skills: html, css, js, react, node, git, figma (.png)

### Ícones de UI
- menu-togle.svg, menu-closer.svg

---

## 🔗 Navegação

| Rota / seção | Onde |
|--------------|------|
| `/` | Home completa (IDs: #home, #about, #skills, #projects, #contact) |
| `/projects` | Só grid de projetos |
| Links do menu | `NavLink` para `/` e `/projects`; demais usam scroll ou `navigate('/', { state: { scrollTo } })` |

---

## 📊 Componentes Responsabilidades

| Componente | Tipo | Props | Estado |
|-----------|------|-------|--------|
| **Layout** | Layout | - | - |
| **Header** | Layout | - | menuActive, darkMode |
| **Hero** | Display | - | - |
| **About** | Display | - | - |
| **Skills** | Display | - | - |
| **Project** | Container | - | - |
| **CardProject** | Display | title, description, link, web?, image | - |
| **Contact** | Form | - | formData (useState) |
| **Footer** | Layout | - | - |
| **Gallery** | Display | items, link | - |
| **Button** | Display | link, children | - |

---

## 🎯 Fluxo de Dados

```
main.jsx → App.jsx → Rotas
  Layout
    Header
    Outlet → Home (…) ou Project (cards)
```

---

## ⚙️ Configurações

### vite.config.js
- React Plugin ✅
- Babel React Compiler ✅
- Fast Refresh (HMR) ✅

### eslint.config.js
- Recomendações de JS ✅
- React Hooks ✅
- React Refresh ✅
- ES2020+ ✅
- Ignora `dist`, `node_modules`, `.next`, `build` aninhados ✅

---

## 💾 Dados Estáticos

### Skills Array (7 items)
```javascript
[
  'HTML5', 'CSS3', 'JavaScript', 'React',
  'Node.js', 'Git', 'Figma'
]
```

### Projects (`projectsData` em `Project.jsx`)
Lista configurável de projetos; cada item pode ter `web` opcional (link “Ver Website” só se preenchido).

---

## 🔗 Links Sociais

- **GitHub:** https://github.com/gargamelizado
- **LinkedIn:** https://www.linkedin.com/in/marcelo-henrique-sarzedas-623690371/

---

## 📝 Formulário de Contato

**Campos:**
- Nome (text, required)
- Email (email, required)
- Mensagem (textarea, required)

**Comportamento:**
- Valida campos (required)
- Console.log do formulário
- Alert de sucesso
- Reset dos campos

**Status Atual:** Frontend apenas (sem backend)

---

## ⚠️ Pontos de Atenção

| Aspecto | Status |
|--------|--------|
| Roteamento | ✅ React Router (`/`, `/projects`) |
| State Global | ❌ Sem Redux/Context |
| API Backend | ❌ Sem integração |
| TypeScript | ❌ Não implementado |
| Testes | ❌ Sem testes |
| Database | ❌ Sem persistência |
| Vite Version | ⚠️ Beta 13 (consider upgrade) |

---

## 🚀 Para Iniciar o Projeto

```bash
cd /home/marcelo/Área\ de\ trabalho/portifolio/portifolio

npm install          # 1. Instalar deps
npm run dev         # 2. Iniciar dev server
npm run build       # 3. (Opcional) Build para prod
npm run lint        # 4. (Opcional) Verificar código
```

---

## 📱 Responsividade

- **Header:** Menu toggle para mobile ✅
- **Componentes:** CSS Modules (estrutura pronta)
- **Layout:** Grid/Flexbox (presumido via Modules)

---

## 🎨 Tema de Cores (index.css)

- **Background:** `#0f172a` (Slate-900)
- **Text:** `#f1f5f9` (Slate-100)
- **Links:** `#60a5fa` (Blue-400)
- **Gradient:** 135deg de Slate-900 para Slate-800

**Tipo:** Dark Mode

---

## 📂 Arquivos de Configuração

| Arquivo | Propósito |
|---------|-----------|
| `package.json` | Deps + scripts |
| `vite.config.js` | Build config |
| `eslint.config.js` | Lint rules |
| `index.html` | HTML raiz |
| `README.md` | Docs Vite template |

---

## 🔗 Arquivos Principais para Editar

| Necessidade | Arquivo |
|-----------|---------|
| Mudar rotas | `src/router/rotas.jsx` |
| Mudar layout global (header em todas páginas) | `src/components/Layout/Layout.jsx` |
| Mudar navegação | `src/components/Header/Header.jsx` |
| Mudar hero/apresentação | `src/components/Hero/Hero.jsx` |
| Mudar ou adicionar projetos | `src/components/Project/Project.jsx` |
| Mudar estilos globais | `src/index.css` |
| Mudar scripts | `package.json` |

---

## 📅 Data Stack

- **Criado:** Versão 0.0.0
- **Node/npm version:** Recomendado v16+
- **Documentação:** 11 de março de 2026

---

**Use este arquivo como referência rápida!**  
*Para detalhes completos, veja `ESTRUTURA_E_DOCUMENTACAO.md`*
