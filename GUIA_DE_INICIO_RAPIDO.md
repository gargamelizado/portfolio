# Guia de Inicio Rapido

## 1. Instalar

```bash
cd /home/marcelo/Área\ de\ trabalho/portifolio/portfolio
npm install
```

## 2. Rodar em desenvolvimento

```bash
npm run dev
```

Acesse:

```text
http://localhost:5173
```

## 3. Validar

```bash
npm run lint
npm run build
```

## 4. Preview do build

```bash
npm run preview
```

## Rotina Recomendada

```text
editar
└── npm run lint
    └── npm run build
        └── testar no navegador
```

## Adicionar um Projeto

1. Coloque a imagem em `src/components/Project/img/`.
2. Importe a imagem em `src/data/projectsData.ts`.
3. Adicione um objeto novo com `slug`, `title`, `description`, `technologies`, `details`, `learning`, `link`, `web` e `image`.
4. Rode `npm run lint` e `npm run build`.

Exemplo:

```js
{
  slug: 'meu-projeto',
  title: 'Meu Projeto',
  description: 'Descricao curta para o card.',
  technologies: ['React', 'CSS Modules'],
  details: 'Descricao maior para a pagina de detalhes.',
  learning: 'O que foi praticado no projeto.',
  link: 'https://github.com/usuario/repositorio',
  web: 'https://demo.com',
  image: MinhaImagem
}
```

## Configurar Contato

Opcionalmente crie `.env`:

```bash
VITE_CONTACT_ENDPOINT=https://seu-endpoint.com
```

Sem endpoint, o formulario abre o aplicativo de email do usuario com a mensagem pronta.

## Roadmap Sugerido

Prioridade alta:

- Otimizar imagens dos projetos.
- Corrigir textos e nomes com erros de digitacao.
- Garantir que todos os links `web` funcionem em producao.
- Revisar acessibilidade dos botoes, links e imagens.

Prioridade media:

- Adicionar testes com Vitest e React Testing Library.
- Criar SEO basico: title, description, Open Graph.
- Melhorar organizacao dos projetos de estudo.
- Criar pagina 404 propria em vez de redirecionar tudo para `/`.

Prioridade baixa:

- Migracao gradual para TypeScript.
- CI com GitHub Actions.
- Analytics.
- PWA.

## Onde Mexer

| Tarefa | Arquivo |
|---|---|
| Mudar menu | `src/components/Header/Header.jsx` |
| Mudar apresentacao | `src/components/Hero/Hero.jsx` |
| Mudar skills | `src/components/Skills/Skills.jsx` |
| Mudar experiencias | `src/components/Experience/Experience.jsx` |
| Mudar projetos | `src/data/projectsData.ts` |
| Mudar detalhes | `src/components/ProjectDetails/ProjectDetails.tsx` |
| Mudar contato | `src/components/Contact/Contact.jsx` |
| Mudar rotas | `src/router/rotas.tsx` |
