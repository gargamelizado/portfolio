# Chock Trufas

Sistema de e-commerce para doces e salgados com foco em pedidos por WhatsApp, catálogo e gestão simples de pedidos.

## Visão geral

O projeto foi pensado para transformar uma landing page estática em uma aplicação de pedidos realista, com foco em experiência de compra, organização do catálogo e capacidade de evoluir para um backend completo com autenticação e banco de dados.

## Demonstração

- Loja e fluxo de compra: http://localhost:5173/compra
- API: http://localhost:3001/api/health

## Stack principal

| Camada    | Tecnologias                               |
| --------- | ----------------------------------------- |
| Front-end | React, Vite, JavaScript/JSX, CSS modular  |
| Back-end  | Node.js, Express, JavaScript, Zod          |
| Dados     | Arquivos JSON                             |
| Estado    | React Query, Zustand                      |
| Qualidade | Vitest, Testing Library, ESLint, Prettier |
| Segurança | JWT, bcryptjs                             |

## Arquitetura

```mermaid
flowchart LR
  A[Cliente] --> B[React + Vite]
  B --> C[React Query]
  B --> D[Zustand Cart]
  C --> E[Express API]
  E --> F[Services]
  F --> G[(Arquivos JSON)]
  E --> I[JWT Auth]
```

## Diagrama de entidades

```mermaid
erDiagram
  CATEGORY ||--o{ PRODUCT : contains
  USER ||--o{ ORDER : creates
  ORDER ||--o{ ORDER_ITEM : contains
  PRODUCT ||--o{ ORDER_ITEM : appears_in

  CATEGORY {
    string id
    string name
    string slug
  }

  PRODUCT {
    string id
    string name
    decimal price
    string description
  }

  USER {
    string id
    string email
    string password
    string role
  }

  ORDER {
    string id
    string status
    decimal total
    string customerName
    string deliveryMethod
  }

  ORDER_ITEM {
    string id
    int quantity
    decimal unitPrice
    string filling
  }
```

## Funcionalidades principais

- Catálogo com itens, combos e recheios
- Carrinho persistido no navegador
- Pedido com validação de dados e cálculo automático de total
- API de health check e catálogo
- Autenticação JWT para admin
- Armazenamento local em arquivos JSON, com possibilidade de migração futura para banco persistente

## Guia de instalação

1. Clone o projeto e acesse a pasta do repositório.
2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

4. Ajuste os valores no arquivo `.env`:

```env
PORT=3001
NODE_ENV=development
JWT_SECRET=change-me-in-production
JWT_EXPIRES_IN=7d
ORDERS_ADMIN_TOKEN=change-me
```

## Comandos úteis

```bash
npm run dev
npm run dev:web
npm run dev:api
npm run build
npm run lint
npm run test:run
```

## Fluxo de dados do pedido

1. Usuário escolhe produtos no catálogo.
2. Carrinho é persistido com Zustand.
3. Formulário envia payload para `/api/orders`.
4. API valida campos, calcula subtotal e total.
5. Pedido é salvo em JSON.
6. Mensagem de confirmação é aberta no WhatsApp.

## Qualidade e automação

- Testes de API com Vitest + Supertest
- Testes de interface com React Testing Library
- CI com GitHub Actions para lint e testes
- Estrutura preparada para padronização de commits

## Convenção de commits

O projeto usa Conventional Commits. Para facilitar a padronização, existe um template em [.gitmessage](.gitmessage).

Exemplos:

```bash
git commit -m "feat: add catalog API endpoints"
git commit -m "fix: adjust cart persistence on checkout"
git commit -m "docs: update project architecture readme"
```

## Observações

- A aplicação usa fallback local em `server/data/catalog.json` durante desenvolvimento.
- O armazenamento atual usa arquivos JSON e pode evoluir para um banco de dados persistente.
- A API foi estruturada para servir de base para um sistema de gestão administrativa de pedidos.
