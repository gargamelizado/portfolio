# Indice da Documentacao

Este indice aponta para os arquivos de documentacao da raiz do projeto.

## Leitura Recomendada

1. [README.md](README.md) - visao geral, stack, scripts e contato.
2. [MAPA_RAPIDO.md](MAPA_RAPIDO.md) - consulta rapida de rotas, arquivos e comandos.
3. [PROJECT_MAP.md](PROJECT_MAP.md) - mapa da estrutura do repositorio.
4. [ESTRUTURA_E_DOCUMENTACAO.md](ESTRUTURA_E_DOCUMENTACAO.md) - detalhes tecnicos dos componentes.
5. [ARQUITETURA_E_DIAGRAMAS.md](ARQUITETURA_E_DIAGRAMAS.md) - diagramas de fluxo e responsabilidades.
6. [RESPONSIVIDADE_GUIDE.md](RESPONSIVIDADE_GUIDE.md) - breakpoints e testes responsivos.
7. [GUIA_DE_INICIO_RAPIDO.md](GUIA_DE_INICIO_RAPIDO.md) - setup, validacao e proximas acoes.

## Quando Usar Cada Arquivo

| Necessidade | Documento |
|---|---|
| Entender o projeto rapidamente | `README.md` |
| Achar comandos ou arquivos | `MAPA_RAPIDO.md` |
| Ver a estrutura completa | `PROJECT_MAP.md` |
| Entender componentes | `ESTRUTURA_E_DOCUMENTACAO.md` |
| Visualizar fluxo da aplicacao | `ARQUITETURA_E_DIAGRAMAS.md` |
| Testar telas pequenas | `RESPONSIVIDADE_GUIDE.md` |
| Planejar melhorias | `GUIA_DE_INICIO_RAPIDO.md` |

## Estado Atual Registrado

- SPA com React Router.
- Rotas `/`, `/projects` e `/projects/:slug`.
- Header compartilhado via `Layout`.
- Formulario com endpoint opcional e fallback para email.
- Projetos alimentados por `projectsData.ts`.
- Documentacao revisada em abril de 2026.

## Validacao

Use sempre:

```bash
npm run lint
npm run build
```

Esses comandos ajudam a confirmar que mudancas na documentacao acompanhadas de ajustes no codigo nao quebraram a aplicacao.
