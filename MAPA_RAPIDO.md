# 🗺️ MAPA RÁPIDO DO PROJETO

## 📍 Raiz do repositório
```bash
/workspace/portfolio
```

## ⚡ Stack e scripts
- React 19
- Vite 8 (beta)
- CSS global + CSS Modules
- ESLint 9

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## 🧩 Estrutura rápida

```text
src/
├── main.jsx
├── App.jsx
├── index.css
├── App.css
├── assets/                     # 20 arquivos
│   ├── html.png css.png js.png react.png node.png git.png figma.png
│   ├── github-logo.png github.png sql.png
│   ├── log2.jpeg log2.jpg log3.jpg logo.png
│   ├── foto perfil.jpeg foto perfil.png
│   ├── menu-togle.svg menu-closer.svg react.svg
│   └── 2210_w018_n002_1346a_p30_1346.jpg
└── components/                 # 11 componentes
    ├── Header/                 # menu mobile + navegação + redes
    ├── Home/                   # wrapper da seção home
    ├── Hero/                   # apresentação principal
    ├── About/                  # seção sobre
    ├── Skills/                 # grid de skills
    ├── Project/                # seção de projetos
    ├── CardProject/            # card reutilizável
    ├── Contact/                # formulário local
    ├── Footer/                 # rodapé com ano dinâmico
    ├── Gallery/                # componente reutilizável
    └── Button/                 # componente reutilizável
```

## 🔗 Seções e âncoras
- `#home`
- `#about`
- `#skills`
- `#projects`
- `#contact`

## 🧠 Fluxo de renderização
```text
main.jsx
  → App.jsx
    → Header
    → Home (Hero)
    → About
    → Skills
    → Project (CardProject x4)
    → Contact
    → Footer
```

## 📌 Observações úteis
- `Header` usa `useState` para abrir/fechar menu mobile.
- `Contact` usa estado local (`name`, `email`, `message`) e exibe `alert` no envio.
- `Skills` renderiza um array local de 7 tecnologias.
- `Project` renderiza um array local com 4 projetos.
