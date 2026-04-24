# 💼 Portfólio Web - Marcelo

Um portfólio web moderno e profissional desenvolvido com **React** e **Vite**, apresentando projetos, habilidades técnicas e informações de contato de um desenvolvedor Full-Stack.

![Status](https://img.shields.io/badge/Status-Ativo-brightgreen?style=flat-square)
![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0.0beta-646cff?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

---

## 🎯 Visão Geral

Este portfólio foi desenvolvido como uma plataforma moderna para apresentar:
- **Perfil Profissional**: Apresentação pessoal e profissional
- **Habilidades Técnicas**: Stack de tecnologias dominadas (Frontend, Backend, Ferramentas)
- **Projetos Destacados**: Portfólio de trabalhos realizados com descrições detalhadas
- **Formulário de Contato**: Seção para comunicação direta com envio por endpoint configurável
- **Design Responsivo**: Otimizado para todos os dispositivos

### 🌟 Destaques
- ✅ **Design Moderno**: Interface elegante com tema azul claro/escuro e preferência salva no navegador
- ✅ **Totalmente Responsivo**: Mobile, tablet e desktop
- ✅ **Performance Otimizada**: Vite + React Compiler ativado
- ✅ **CSS Modules**: Estilos isolados e sem conflitos
- ✅ **Acessível**: Semântica HTML apropriada
- ✅ **Navegação Suave**: Scroll entre seções na home e rotas com **React Router**
- ✅ **Rotas**: `/` (página completa), `/projects` e `/projects/:slug`, com layout compartilhado

---

## 📋 Stack Tecnológico

### Frontend
- **React 19.2.0** - Biblioteca UI moderna
- **React Router DOM 7.13** - Rotas (`/`, `/projects`, fallback `*`)
- **Vite 8.0.0-beta.13** - Bundler rápido e moderno
- **CSS Modules** - Estilos scopados e isolados
- **CSS Global** - Estilização base da aplicação
- **Babel React Compiler** - Otimizações automáticas

### DevTools
- **ESLint 9.39.1** - Linting de código
- **ESLint React Hooks Plugin** - Regras específicas React
- **ESLint React Refresh Plugin** - Validação HMR

### Ambiente
- **Node.js** - Runtime JavaScript (v16+)
- **npm** - Gerenciador de pacotes

---

## 📁 Estrutura do Projeto

```
portifolio/
├── 📄 index.html                    # Arquivo raiz HTML
├── 📄 vite.config.js               # Configuração Vite
├── 📄 eslint.config.js             # Configuração ESLint
├── 📄 package.json                 # Dependências e scripts
├── 📄 package-lock.json            # Lock de versões
├── 📂 public/                       # Arquivos estáticos
├── 📂 src/
│   ├── 📄 main.jsx                 # Entry point
│   ├── 📄 App.jsx                  # Monta <Rotas />
│   ├── 📄 App.css                  # Estilos globais
│   ├── 📄 index.css                # Estilos raiz (dark theme)
│   ├── 📂 router/
│   │   └── rotas.jsx               # BrowserRouter, Layout, Routes
│   ├── 📂 assets/                  # Imagens e ícones (imports nos componentes)
│   │   ├── logo.png, html.png, css.png, js.png, react.png, node.png, git.png, figma.png
│   │   ├── log2.jpeg, github-logo2.png, foto perfil.jpeg
│   │   ├── menu-togle.svg, menu-closer.svg
│   │   └── …
│   └── 📂 components/              # Componentes React
│       ├── 📂 Layout/              # Header + <Outlet /> (rotas filhas)
│       │   └── Layout.jsx
│       ├── 📂 Header/
│       │   ├── Header.jsx
│       │   └── Header.module.css
│       ├── 📂 Hero/
│       │   ├── Hero.jsx
│       │   └── Hero.module.css
│       ├── 📂 Home/
│       │   └── Home.jsx
│       ├── 📂 About/
│       │   ├── About.jsx
│       │   └── About.css
│       ├── 📂 Skills/
│       │   ├── Skills.jsx
│       │   └── Skills.module.css
│       ├── 📂 Project/
│       │   ├── Project.jsx         # Grid de projetos (projectsData)
│       │   ├── Project.module.css
│       │   └── devmedia/           # Projetos de estudo (HTML, Next, etc.) — não importados pelo Vite
│       ├── 📂 CardProject/
│       │   ├── CardProject.jsx
│       │   └── CardProject.module.css
│       ├── 📂 Contact/
│       │   ├── Contact.jsx
│       │   └── Contact.css
│       ├── 📂 Gallery/
│       │   ├── Gallery.jsx
│       │   └── Gallery.css
│       ├── 📂 Footer/
│       │   ├── Footer.jsx
│       │   └── Footer.css
│       └── 📂 Button/
│           ├── button.jsx
│           └── button.module.css
├── 📂 dist/                        # Build de produção (gerado)
└── 📂 node_modules/               # Dependências (npm install)
```

---

## 🏗️ Arquitetura de Componentes

### Hierarquia de Componentes

```
App
└── Rotas (react-router-dom)
    └── Layout
	        ├── Header (NavLink, scroll/âncoras, tema salvo no navegador)
        └── Outlet
            ├── rota "/" → Home
            │   ├── Hero
            │   ├── About
	            │   ├── Skills
	            │   ├── Experience
	            │   ├── Project → CardProject × N
            │   ├── Contact
            │   └── Footer
	            ├── rota "/projects" → Project → CardProject × N
	            └── rota "/projects/:slug" → ProjectDetails
```

### Descrição dos Componentes

| Componente | Tipo | Responsabilidade |
|-----------|------|------------------|
| **Layout** | Layout | Envolve rotas: Header fixo + `Outlet` para o conteúdo |
| **Header** | Layout | Navbar responsiva, `NavLink` (Home / Projetos), scroll suave nas seções |
| **Hero** | Display | Apresentação principal com foto de perfil |
| **About** | Display | Seção "Sobre Mim" com descrição profissional |
| **Skills** | Display | Grid de 7 tecnologias principais |
| **Project** | Container | Orquestra cards a partir de `projectsData` (vários projetos) |
| **CardProject** | Display | Card com imagem, repositório GitHub e link “Ver Website” se `web` existir |
| **Contact** | Form | Formulário de contato (frontend) |
| **Gallery** | Display | Galeria genérica reutilizável |
| **Footer** | Layout | Rodapé com informações de copyright |
| **Button** | Display | Componente botão reutilizável |

---

## 🚀 Como Começar

### Pré-requisitos
- **Node.js** v16+ instalado ([Download](https://nodejs.org/))
- **npm** v8+ (incluído com Node.js)

### Instalação

1. **Clone ou acesse o repositório**
```bash
cd /home/marcelo/Área\ de\ trabalho/portifolio/portifolio
```

2. **Instale as dependências**
```bash
npm install
```

### Desenvolvimento

```bash
# Inicia servidor de desenvolvimento (http://localhost:5173)
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173` com **Hot Module Replacement (HMR)** ativado - mudanças em código são refletidas instantaneamente.

### Build para Produção

```bash
# Cria build otimizado em ./dist
npm run build
```

A pasta `dist/` contém a aplicação pronta para deploy.

### Visualizar Build de Produção

```bash
# Serve a pasta dist localmente para preview
npm run preview
```

### Linting

```bash
# Verifica problemas de código
npm run lint

# Corrige problemas automaticamente (quando possível)
npm run lint -- --fix
```

---

## 🎨 Design e Tema

### Paleta de Cores

**Dark Theme Professional:**
- **Primária**: `#3b82f6` (Azul)
- **Secundária**: `#60a5fa` (Azul Claro)
- **Background**: `#0f172a` (Azul Escuro)
- **Surface**: `#1e293b` (Grafite)
- **Text**: `#f1f5f9` (Branco Claro)
- **Text Muted**: `#cbd5e1` (Cinza Claro)

### Tipografia

- **Font Family**: Roboto, sans-serif
- **H1**: 2.5rem, peso 700
- **H2**: 2.2rem, peso 700
- **Descrição**: 1rem, altura de linha 1.8

### Responsividade

- **Desktop**: Layouts com múltiplas colunas
- **Tablet**: Grids adaptados
- **Mobile**: Menu collapsible, stack vertical

---

## 📱 Seções da Aplicação

### 1. **Header**
- Logo (`NavLink` para `/`)
- Home e Projetos com `NavLink`; Sobre, Skills e Contato com scroll (na `/`) ou navegação para `/` + scroll
- Menu mobile com toggle e alternância de tema (`body.darkmode`)
- Links para redes sociais (GitHub, LinkedIn)

### 2. **Hero (Home)**
- Foto de perfil
- Apresentação pessoal
- Stack técnico principal
- Descrição de foco e valores

### 3. **About**
- Descrição detalhada do perfil profissional
- Experiência e formação
- Abordagem e valores

### 4. **Skills**
- Grid de 7 tecnologias principais
- Ícones e nomes
- Animações on hover

### 5. **Projects**
- Grid responsivo de projetos
- Cards com título, descrição e link
- Links para repositórios GitHub

### 6. **Contact**
- Formulário com campos: Nome, Email, Mensagem
- Validação básica frontend
- ⚠️ *Nota: Atualmente apenas frontend - precisa backend para envio real*

### 7. **Footer**
- Copyright
- Links úteis
- Informações de contato

---

## ⚙️ Configurações

### Vite Configuration
```javascript
// vite.config.js
export default {
  plugins: [react()],
  // ... mais configs
}
```

### ESLint Configuration
```javascript
// eslint.config.js
export default [
  js.configs.recommended,
  ...eslintPluginReact.configs.flat.recommended,
  // Regras customizadas
]
```

---

## 🔄 Fluxo de Dados

```
Usuário Interage
    ↓
Evento (onClick, addEventListener)
    ↓
State/Handler atualizado
    ↓
Componente re-renderiza
    ↓
DOM atualizado (Virtual DOM)
    ↓
UI refletida (Navegação, Scroll, etc.)
```

---

## 🐛 Troubleshooting

### Porta 5173 já em uso
```bash
npm run dev -- --port 3000
```

### Limpeza de cache
```bash
rm -rf node_modules dist
npm install
npm run dev
```

### Problemas com ESLint
```bash
npm run lint -- --fix
```

---

## 📈 Próximas Melhorias

### Priority Alta
- [ ] **Backend para Formulário** - Integrar API Node.js/Express para envio de emails
- [x] **React Router** - Rotas `/`, `/projects` e layout com `Outlet`
- [ ] **TypeScript** - Adicionar tipos estáticos ao projeto

### Priority Média
- [ ] **Testes** - Vitest + React Testing Library
- [ ] **CI/CD** - GitHub Actions para deploy automático
- [ ] **Dark/Light Theme completo** - Expandir o toggle atual (classes/tokens CSS)
- [ ] **Analytics** - Google Analytics ou alternativa

### Priority Baixa
- [ ] **PWA** - Service Worker e offline support
- [ ] **SEO** - Meta tags dinâmicas, sitemap
- [ ] **i18n** - Suporte a múltiplos idiomas
- [ ] **Blog** - Seção de artigos/posts

---

## 📚 Documentação Adicional

Arquivos de referência criados:

- **[ESTRUTURA_E_DOCUMENTACAO.md](ESTRUTURA_E_DOCUMENTACAO.md)** - Documentação técnica completa
- **[PROJECT_MAP.md](PROJECT_MAP.md)** - Mapa detalhado do repositório
- **[MAPA_RAPIDO.md](MAPA_RAPIDO.md)** - Cheat sheet rápido
- **[RESPONSIVIDADE_GUIDE.md](RESPONSIVIDADE_GUIDE.md)** - Breakpoints e testes responsivos
- **[ARQUITETURA_E_DIAGRAMAS.md](ARQUITETURA_E_DIAGRAMAS.md)** - Diagramas visuais
- **[GUIA_DE_INICIO_RAPIDO.md](GUIA_DE_INICIO_RAPIDO.md)** - Próximas ações recomendadas

---

## 🤝 Contribuição

Este é um projeto pessoal de portfólio. Sugestões e melhorias são bem-vindas!

Para contribuir:
1. Crie uma branch (`git checkout -b feature/sua-feature`)
2. Commit suas mudanças (`git commit -m 'Add sua-feature'`)
3. Push para branch (`git push origin feature/sua-feature`)
4. Abra um Pull Request

---

## 📬 Envio de Contato

O formulario usa a variavel `VITE_CONTACT_ENDPOINT` quando ela estiver configurada.
Esse endpoint pode ser de servicos como Formspree, EmailJS com API propria, Netlify Forms ou um backend Node.
Se a variavel estiver vazia, o site abre o aplicativo de email do usuario com a mensagem preenchida para `marcelohdjusto@gmail.com`.

Exemplo:

```bash
cp .env.example .env
# edite VITE_CONTACT_ENDPOINT com a URL do seu servico de formulario
```

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja arquivo LICENSE para detalhes.

---

## 👤 Autor

**Marcelo** - Desenvolvedor Full-Stack  
📧 Email: [marcelohdjusto@gmail.com](mailto:marcelohdjusto@gmail.com)
🔗 GitHub: [@gargamelizado](https://github.com/gargamelizado)
💼 LinkedIn: [Seu Perfil](https://linkedin.com/in/marcelo-henrique-sarzedas-623690371/)

---

## 📞 Suporte

Encontrou um bug ou tem dúvidas?
- 📧 Abra uma issue no GitHub
- 💬 Envie uma mensagem via formulário de contato
- 🐦 Contate via LinkedIn

---

## 🙏 Agradecimentos

- React.js e comunidade React
- Vite por ferramental rápido
- Font "Roboto" do Google Fonts
- Inspiração de portfolios modernos

---

<div align="center">

**[⬆ Voltar ao topo](#-portfólio-web---marcelo)**

Feito com ❤️ por Marcelo | Última atualização: março de 2026

</div>
