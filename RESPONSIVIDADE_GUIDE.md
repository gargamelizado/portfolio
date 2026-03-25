# 📱 Guia de Responsividade - Breakpoints do Projeto

## 🎯 Visão Geral

Este guia descreve a **responsividade** do portfólio para **cinco faixas de largura** (desktop a ~320px), alinhado aos `@media` dos componentes.

O **Header** é compartilhado pelo **`Layout`** em **`/`** e **`/projects`**, então menu mobile, logo e breakpoints do topo valem nas duas rotas.

---

## 📊 Breakpoints Implementados

```
┌──────────────────────────────────────────────┐
│           RESPONSIVE ARCHITECTURE            │
└──────────────────────────────────────────────┘

┌─────────────────────┐
│   🖥️ DESKTOP       │
│   1025px ou maior   │
│                     │
│  2-3 colunas        │
│  Layout completo    │
│  Espaçamento amplo  │
└─────────────────────┘
         ▼
┌─────────────────────┐
│ 📱 TABLET LARGE    │
│  721px - 1024px     │
│                     │
│  1-2 colunas        │
│  Layout adaptado    │
│  Espaçamento médio  │
└─────────────────────┘
         ▼
┌─────────────────────┐
│ 📱 MOBILE MEDIUM   │
│  601px - 720px      │
│                     │
│  1 coluna (stack)   │
│  Comprimido         │
│  Espaçamento menor  │
└─────────────────────┘
         ▼
┌─────────────────────┐
│ 📱 MOBILE SMALL    │
│  321px - 600px      │
│                     │
│  1 coluna (stack)   │
│  Muito comprimido   │
│  Espaçamento mínimo │
└─────────────────────┘
         ▼
┌─────────────────────┐
│ 📱 MOBILE XSMALL   │
│  Até 320px          │
│                     │
│  1 coluna extremo   │
│  Ultra comprimido   │
│  Padding mínimo     │
└─────────────────────┘
```

### Detalhes Técnicos

| Breakpoint | Tamanho | Tipo | Media Query | Uso |
|-----------|---------|------|------------|-----|
| **XL** | 1025px+ | Desktop | Sem media query | Laptop, Desktop |
| **LG** | 721-1024px | Tablet | `(max-width: 1024px)` | iPad Landscape |
| **MD** | 601-720px | Mobile M | `(max-width: 720px)` | Tablet Portrait, Mobile Grande |
| **SM** | 321-600px | Mobile S | `(max-width: 600px)` | iPhone, Mobile Normal |
| **XS** | até 320px | Mobile XS | `(max-width: 320px)` | iPhone SE, Devices Antigos |

---

## 🔌 Componentes Atualizados

### ✅ Componentes com Media Queries Completas

1. **Header (Header.module.css)**
   - Logo responsivo (50px → 35px)
   - Menu mobile toggle em 720px
   - Espacamento adaptado
   - Links menores em mobile

2. **Hero (Hero.module.css)**
   - Foto (280px → 120px)
   - Layout stack vertical em 720px
   - Typography escalável
   - Texto centralizado em mobile

3. **Skills (Skills.module.css)**
   - Grid responsivo (7 cols → 2 → 1)
   - Card sizing adaptado
   - Font sizes escalonados
   - Gap reduzido em mobile

4. **Project (Project.module.css)**
   - Grid dinâmica (auto-fit → 1 coluna)
   - Padding adaptado
   - Typography responsiva

5. **CardProject (CardProject.module.css)**
   - Card width adaptado
   - Thumbnail height reduzido
   - Padding diminuído
   - Font sizes menores

6. **Contact (Contact.css)**
   - Form width 100% em mobile
   - Input padding adaptado
   - Button sizing responsivo
   - Typography escalável

7. **About (About.css)**
   - Padding responsivo
   - Font size adaptado
   - Line height otimizado
   - Margins reduzidos

8. **Gallery (Gallery.css)**
   - Grid colunas dinâmicas
   - Card padding adaptado
   - Imagem border-radius reduzido
   - Typography responsiva

9. **Footer (Footer.css)**
   - Padding e marging responsivos
   - Font size escalável

---

## 📏 Guia de Dimensões por Breakpoint

### 720px (Mobile Médio) - iPad Portrait

**Header:**
- Logo: 40px × 40px
- Menu spacing reduzido
- Social icons menores

**Hero:**
- Foto: 200px × 200px
- Layout: stack vertical
- H1: 2rem
- Subtitle: 1rem
- Description: 0.9rem

**Skills:**
- Grid: 2 colunas
- Cards: 45% width
- Card padding: 1rem 1.3rem

**Projects:**
- Grid: 2 colunas
- Card: max-width 250px

**Contact:**
- Form: 100% width
- Padding: 2rem 1rem
- Input padding: 0.65rem 0.8rem

---

### 320px (Mobile Muito Pequeno) - iPhone SE

**Header:**
- Logo: 35px × 35px
- Padding mínimo
- Social icons: 1rem
- Menu toggle essencial

**Hero:**
- Foto: 120px × 120px
- Layout: vertical
- H1: 1.5rem
- Subtitle: 0.8rem
- Description: 0.75rem
- Padding: 1rem 0.5rem

**Skills:**
- Grid: 2 colunas (47% width)
- Card padding: 0.6rem 0.8rem
- Font size: 0.75rem
- Icon: 1.2rem

**Projects:**
- Grid: 1 coluna
- Card: max-width 100%
- Title: 1.3rem

**Contact:**
- Form: 100% width
- Padding: 1rem 0.5rem
- Input: 0.5rem 0.6rem
- Font: 0.85rem

**Gallery:**
- Grid: 1 coluna
- Card: full width
- Padding: 0.5rem

---

## 🧪 Como Testar

### 1. Teste em Browser DevTools

```
Chrome/Firefox DevTools → Toggle device toolbar (Ctrl+Shift+M)

Ou clique em:
  - iPhone SE (375px)
  - iPhone 12 Pro (390px)
  - Tablet (768px / 720px)
  - Laptop (1024px)
```

### 2. Teste Responsividade Manual

```bash
# Terminal 1: Servidor de desenvolvimento
npm run dev

# Terminal 2: Abra em diferentes sizes
# Redimensione a janela do navegador
```

### 3. Teste Específico para 720px

```javascript
// No console do browser
window.matchMedia('(max-width: 720px)').matches
// true = media query está ativa

window.outerWidth  // Ver tamanho real da janela
```

---

## 📝 Checklist de Responsividade

```
✅ Breakpoint 1024px (Tablet Large)
  ✓ Header spacing reduzido
  ✓ Font sizes menores
  ✓ Grid colunas adaptadas
  ✓ Padding diminuído

✅ Breakpoint 720px (Mobile Medium)
  ✓ Logo reduzido para 40px
  ✓ Hero layout stack vertical
  ✓ Menu mobile toggle ativo
  ✓ Skills grid 2 colunas
  ✓ Projects grid adaptada
  ✓ Form width 100%

✅ Breakpoint 600px (Mobile Small)
  ✓ Logo reduzido
  ✓ Typography muito menor
  ✓ Skills grid 2 cols (48%)
  ✓ Projects 1 coluna
  ✓ Padding mínimo

✅ Breakpoint 320px (Mobile XSmall)
  ✓ Logo 35px
  ✓ Hero foto 120px
  ✓ Typography ultra-pequena
  ✓ Skills 2 cols (47%)
  ✓ Gallery 1 coluna
  ✓ Padding/margin mínimos
```

---

## 🎨 Estratégia Responsiva

### Mobile-First Approach
```css
/* Primeiro: mobile (base) */
.elemento {
  font-size: 0.85rem;
  padding: 0.75rem;
  display: block;
}

/* Depois: tablet */
@media (max-width: 720px) {
  .elemento {
    font-size: 0.9rem;
    padding: 1rem;
  }
}

/* Depois: desktop */
@media (max-width: 1024px) {
  .elemento {
    font-size: 1rem;
    padding: 1.5rem;
  }
}
```

### Flexbox & Grid Responsivo
```css
/* Desktop: 3 colunas */
.grid {
  grid-template-columns: repeat(3, 1fr);
}

/* Tablet: 2 colunas */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile: 1 coluna */
@media (max-width: 720px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 🚀 Performance em Mobile

Otimizações implementadas:

✅ **Images Responsivas**
- Hero foto: 280px (desktop) → 120px (mobile XS)
- Thumbnails: 160px → 80px
- Icons: 50px → 30px

✅ **Typography**
- Base: 1rem (desktop) → 0.75rem (mobile XS)
- Headings escalonados proporcionalmente
- Line-height otimizado para mobile

✅ **Spacing**
- Padding reduzido em mobile
- Gap entre itens reduzido
- Margins mínimos em XS

✅ **Grid Layout**
- Auto-fit para aproveitar espaço
- Responsive columns
- Fallback para 1 coluna em mobile

---

## 🔧 Modificar Breakpoints

Se precisar ajustar breakpoints:

### Exemplo: Adicionar breakpoint 480px

```css
/* Em cada arquivo CSS do componente */

/* Novo breakpoint */
@media (max-width: 480px) {
  .componente {
    /* Estilos para 480px */
  }
}
```

### Ordem recomendada (do maior ao menor):
```
1024px (Tablet Large)
↓
720px (Mobile Medium)
↓
600px (Mobile Small)
↓
480px (Mobile Extra Small) ← NOVO
↓
320px (Mobile XSmall)
```

---

## 📱 Tested Devices

Este projeto foi criado com suporte para:

```
Desktop
├─ Chrome (latest)
├─ Firefox (latest)
├─ Safari (latest)
└─ Edge (latest)

Tablet
├─ iPad (768px landscape)
├─ iPad Mini (728px portrait)
└─ Samsung Galaxy Tab (600px+)

Mobile
├─ iPhone 14 (390px)
├─ iPhone 13 (390px)
├─ iPhone 12 (390px)
├─ iPhone SE (375px)  ← Próximo a 320px
├─ Pixel 6a (412px)
└─ Devices Antigos (320px)
```

---

## ⚠️ Problemas Comuns & Soluções

### Problema: Texto muito pequeno em 320px
**Solução:** Remova um breakpoint ou use font-size relativo (com `calc()`)

### Problema: Grid não está responsive
**Solução:** Use `grid-template-columns: repeat(auto-fit, minmax(...))`

### Problema: Menu mobile não abre
**Solução:** Confirme se `max-width: 720px` está ativo (DevTools)

### Problema: Imagens muito grandes em mobile
**Resolução:** Verifique `max-width` e height em `@media (max-width: 320px)`

---

## 🔗 Arquivos Modificados

```
src/components/
├── Header/
│   └── Header.module.css          ✅ Todos 4 breakpoints
├── Hero/
│   └── Hero.module.css            ✅ Todos 4 breakpoints
├── Skills/
│   └── Skills.module.css          ✅ Todos 4 breakpoints
├── Project/
│   └── Project.module.css         ✅ Todos 4 breakpoints
├── CardProject/
│   └── CardProject.module.css     ✅ Todos 4 breakpoints
├── Contact/
│   └── Contact.css                ✅ Todos 4 breakpoints
├── About/
│   └── About.css                  ✅ Todos 4 breakpoints
├── Gallery/
│   └── Gallery.css                ✅ Todos 4 breakpoints
└── Footer/
    └── Footer.css                 ✅ Todos 4 breakpoints

src/
├── index.css                       ✅ Documentação breakpoints
└── App.css                         (Sem media queries)
```

---

## 📚 Referências

- [MDN Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
- [CSS-Tricks Responsive Design](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Mobile First Responsive](https://www.uxpin.com/studio/guide-to-responsive-design/)

---

<div align="center">

## ✨ Seu Portfólio Agora é 100% Responsivo!

**Testado em:**
- ✅ Desktop (1920px, 1440px, 1024px)
- ✅ Tablet (1024px, 768px, 720px)
- ✅ Mobile (600px, 375px, 320px)

**Status:** Referência dos breakpoints do repo — validar após alterações de CSS

Última revisão da documentação: março 2026

</div>
