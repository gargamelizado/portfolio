# Guia de Responsividade

## Visao Geral

O portfolio usa CSS global, CSS comum e CSS Modules. A responsividade esta distribuida pelos arquivos de estilo dos componentes.

O `Header` fica no `Layout`, portanto aparece em todas as rotas:

- `/`
- `/projects`
- `/projects/:slug`

## Breakpoints Principais

| Faixa | Largura | Uso |
|---|---:|---|
| Desktop | `1025px+` | Layout amplo |
| Tablet | `721px - 1024px` | Grids reduzidos |
| Mobile grande | `601px - 720px` | Menu mobile e secoes em coluna |
| Mobile | `321px - 600px` | Conteudo compacto |
| Mobile pequeno | `até 320px` | Ajustes minimos |

## Componentes com Responsividade

| Componente | Arquivo |
|---|---|
| Header | `src/components/Header/Header.module.css` |
| Hero | `src/components/Hero/Hero.module.css` |
| Skills | `src/components/Skills/Skills.module.css` |
| Experience | `src/components/Experience/Experience.css` |
| Project | `src/components/Project/Project.module.css` |
| ProjectDetails | `src/components/ProjectDetails/ProjectDetails.module.css` |
| CardProject | `src/components/CardProject/CardProject.module.css` |
| Contact | `src/components/Contact/Contact.css` |
| About | `src/components/About/About.css` |
| Gallery | `src/components/Gallery/Gallery.css` |
| Footer | `src/components/Footer/Footer.css` |

## O Que Testar

Header:

- Menu abre e fecha no mobile.
- Escape fecha o menu.
- Backdrop fecha o menu.
- Links rolam para secoes corretas.
- Tema claro/escuro continua funcionando.

Home:

- Hero nao quebra texto.
- Foto de perfil nao deforma.
- Skills cabem em grade adequada.
- Experience fica legivel.
- Cards de projeto nao estouram largura.
- Formulario ocupa a largura correta.

Projetos:

- `/projects` mostra cards em grade responsiva.
- `/projects/:slug` mostra imagem e texto sem overflow.
- Tags de tecnologias quebram linha corretamente.

## Como Testar no Navegador

1. Rode:

```bash
npm run dev
```

2. Abra DevTools.
3. Ative o modo responsivo.
4. Teste larguras:

```text
1440px
1024px
768px
720px
600px
390px
320px
```

## Checklist Rapido

- [ ] Nenhum texto fica cortado.
- [ ] Nenhum botao fica fora da tela.
- [ ] Menu mobile nao deixa a pagina rolar por baixo.
- [ ] Imagens mantem proporcao.
- [ ] Cards mantem espacamento consistente.
- [ ] Formulario e clicavel em mobile.
- [ ] Pagina de detalhes funciona em tela pequena.

## Melhorias Recomendadas

- Comprimir imagens grandes dos projetos.
- Garantir `max-width: 100%` para imagens.
- Revisar tamanhos de fonte em telas de 320px.
- Evitar alturas fixas quando houver conteudo dinamico.
- Testar em celular real antes de publicar.
