Configuração mínima para deploy no Vercel

Passos recomendados para publicar este repositório no Vercel:

1. Crie um projeto no painel do Vercel e conecte ao repositório `gargamelizado/portfolio`.
2. Adicione os seguintes Secrets no GitHub (Settings > Secrets):
   - `VERCEL_TOKEN` (token de deploy com permissão para o projeto/organização)
   - `VERCEL_ORG_ID` (opcional, melhora detecção do projeto)
   - `VERCEL_PROJECT_ID` (opcional, melhora detecção do projeto)
3. O workflow `.github/workflows/vercel-deploy.yml` será acionado em push para `main`.
4. O `vercel.json` na raiz garante que a saída estática (`dist`) e as rotas SPA sejam servidas corretamente.

Observações:
- Se preferir, conecte o repositório diretamente pelo painel do Vercel e use as configurações padrão (build: `npm run build`, output: `dist`).
- Recomendo manter o GitHub Pages workflow intacto caso queira ter fallback de publicação automática para GitHub Pages.
