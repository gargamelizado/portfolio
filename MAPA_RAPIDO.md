# 🗺️ MAPA RÁPIDO DO PROJETO - Portfolio Web Dev

## 📍 Localização Raiz
```
/home/marcelo/Área de trabalho/portifolio/portifolio/
```

---

## ⚡ Quick Reference

### Stack
- **React** 19.2.0
- **Vite** 8.0.0-beta.13
- **CSS Modules + Global CSS**
- **ESLint** 9.39.1

### Scripts Principais
```bash
npm run dev      # Iniciar desenvolvimento
npm run build    # Build para produção
npm run lint     # Verificar código
npm run preview  # Preview build
```

---

## 🧩 Componentes (11 total)

```
Header
├── Navegação + Menu Mobile
└── Social Links

Home
└── Hero (Apresentação Principal)

About
└── Seção "Sobre Mim"

Skills
└── Grid de 7 Tecnologias

Project
└── CardProject (x3 projetos)

Contact
└── Formulário (Nome, Email, Mensagem)

Footer
└── Copyright Dinâmico

Gallery (Reutilizável)
Button (Reutilizável)
```

---

## 📂 Estrutura de Pastas

```
src/
├── components/
│   ├── About/              (CSS normal)
│   ├── Button/             (Module CSS)
│   ├── CardProject/        (Module CSS)
│   ├── Contact/            (CSS normal)
│   ├── Footer/             (CSS normal)
│   ├── Gallery/            (CSS normal)
│   ├── Header/             (Module CSS)
│   ├── Hero/               (Module CSS)
│   ├── Home/               (Simples wrapper)
│   ├── Project/            (Module CSS)
│   └── Skills/             (Module CSS)
│
├── assets/                 (13 imagens/ícones)
├── App.jsx                 (Componente Raiz)
├── App.css
├── main.jsx                (Entry Point)
├── index.css               (Reset + Global Styles)
│
└── components/Project/projeto-view-main/  (Exemplos/referências)
```

---

## 🎨 Assets Disponíveis

### Fotos
- `log2.jpg` - Logo/Header
- `log3.jpg` - Foto de Perfil
- `logo.png` - Logo Padrão
- `2210_w018_n002_1346a_p30_1346.jpg` - Fundo

### Ícones de Tech
- html.png, css.png, js.png, react.png, node.png, git.png, figma.png, sql.png, react.svg

### Ícones de UI
- menu-togle.svg, menu-closer.svg

---

## 🔗 Navegação

| Seção | ID | Componente |
|-------|-------|-----------|
| Home | #home | Home + Hero |
| Sobre | #about | About |
| Skills | #skills | Skills |
| Projetos | #projects | Project |
| Contato | #contact | Contact |

**Método:** Âncoras HTML + Smooth Scroll via `scrollIntoView()`

---

## 📊 Componentes Responsabilidades

| Componente | Tipo | Props | Estado |
|-----------|------|-------|--------|
| **Header** | Layout | - | menuActive (useState) |
| **Hero** | Display | - | - |
| **About** | Display | - | - |
| **Skills** | Display | - | - |
| **Project** | Container | - | - |
| **CardProject** | Display | title, description, link, image | - |
| **Contact** | Form | - | formData (useState) |
| **Footer** | Layout | - | - |
| **Gallery** | Display | items, link | - |
| **Button** | Display | link, children | - |

---

## 🎯 Fluxo de Dados

```
main.jsx
  ↓
App.jsx
  ├── Header (com navegação para #id)
  ├── Home → Hero (apresentação)
  ├── About (descrição)
  ├── Skills (array de tecnologias)
  ├── Project → [CardProject × 3] (array de projetos)
  ├── Contact (formulário → console.log)
  └── Footer (copyright dinâmico)
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

---

## 💾 Dados Estáticos

### Skills Array (7 items)
```javascript
[
  'HTML5', 'CSS3', 'JavaScript', 'React',
  'Node.js', 'Git', 'Figma'
]
```

### Projects Array (3 items)
```javascript
[
  { title: 'Portfólio Pessoal', ... },
  { title: 'Landing Page Agência', ... },
  { title: 'E-commerce Responsivo', ... }
]
```

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
| Roteamento | ❌ Sem React Router |
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
| Mudar layout geral | `src/App.jsx` |
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
