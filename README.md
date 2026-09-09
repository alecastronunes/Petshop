# Petshop

Este projeto foi desenvolvido como um estudo prático para fixar e aplicar os conceitos de Context API no React, com foco em construir um carrinho de compras funcional e escalável.

O principal objetivo aqui não foi apenas criar uma interface bonita, mas entender na prática como compartilhar estado global entre componentes, como atualizar dados de forma previsível e como manter a lógica do carrinho organizada.

## 🎯 Objetivo do projeto

- Aprender e consolidar o uso de Context API no React
- Centralizar o estado do carrinho em um provedor global
- Compartilhar dados entre componentes sem prop drilling
- Trabalhar a lógica de adição, remoção e atualização de quantidade
- Reforçar conceitos de React state, renderização e atualização de UI

## 🚀 Tecnologias utilizadas

- React
- TypeScript
- Vite
- React Router
- React Icons
- Tailwind CSS
- Context API
- npm

## 🧠 Conceitos trabalhados

Este projeto foi pensado para praticar especialmente:

- criação de Context
- Provider e Consumer
- acesso ao estado global com `useContext`
- atualização de estado compartilhado
- manipulação de arrays e objetos em React
- sincronização entre carrinho, quantidade e subtotal
- organização da lógica em um contexto dedicado

## 📦 Funcionalidades

- Catálogo de produtos em destaque
- Adição de produtos ao carrinho
- Aumento e diminuição da quantidade
- Remoção individual de itens
- Remoção completa de um produto
- Cálculo do subtotal e total do pedido
- Layout responsivo para desktop e mobile

## 🛠️ Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- Node.js (versão LTS recomendada)
- npm

## ▶️ Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/petshop.git
```

2. Entre na pasta do projeto:

```bash
cd petshop
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie a aplicação:

```bash
npm run dev
```

5. Abra no navegador a URL exibida no terminal, geralmente:

```bash
http://localhost:5173
```

## 🧪 Build para produção

Para gerar a versão pronta para produção:

```bash
npm run build
```

E para visualizar a build localmente:

```bash
npm run preview
```

## 🌐 Deploy

Link do projeto em produção:

```bash
https://petshop-sage-six.vercel.app/
```

## 📁 Estrutura principal

```bash
src/
├── components/
├── context/
│   └── CartContext.tsx
├── pages/
│   ├── home/
│   └── cart/
├── App.tsx
├── main.tsx
├── index.css
└── services/
```

## 📝 Observações

Este projeto serve como base para reforçar o uso de Context API em aplicações React, além de mostrar como esse padrão pode facilitar o compartilhamento de estado em um fluxo de compra simples e realista.

Ele foi desenvolvido principalmente como um projeto de estudo e prática para consolidar conhecimentos de frontend, gerenciamento de estado e organização de lógica de business rules em aplicações web.
