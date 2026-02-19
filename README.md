# Portfolio Showcase

Este é um site de portfólio full-stack construído com React, TypeScript e Vite. Ele foi projetado para ser uma vitrine rápida, moderna e responsiva do meu trabalho, habilidades e experiência.

## Funcionalidades

*   **Aplicação de Página Única (SPA):** Uma experiência de usuário suave e contínua com um layout de página única.
*   **Arquitetura Baseada em Componentes:** Construído com uma biblioteca de componentes modulares e reutilizáveis.
*   **Conteúdo Orientado a Dados:** Atualize facilmente o conteúdo do portfólio editando um único arquivo de dados (`client/src/data/portfolio.ts`).
*   **Formulário de Contato:** Um formulário de contato funcional com validação.
*   **Otimizado para Performance:** O projeto foi otimizado para performance com divisão de código (code splitting), carregamento lento (lazy loading) e otimização de fontes.
*   **Design Responsivo:** O site foi projetado para ter uma ótima aparência em todos os dispositivos.

## Tecnologias Utilizadas

*   **Frontend:**
    *   React
    *   TypeScript
    *   Vite
    *   Tailwind CSS
    *   Framer Motion
    *   Radix UI
*   **Ferramentas:**
    *   npm
    *   Vite
    *   TypeScript
    *   PostCSS
    *   Tailwind CSS

## Começando

### Pré-requisitos

*   Node.js (v18 ou superior)
*   npm

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/fullstack-portfolio.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd fullstack-portfolio
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```

### Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```bash
npm run dev
```

Isso iniciará o servidor de desenvolvimento em `http://localhost:5173`.

## Scripts Disponíveis

*   `npm run dev`: Inicia o servidor de desenvolvimento.
*   `npm run build`: Compila o projeto para produção.
*   `npm run preview`: Visualiza a compilação de produção.
*   `npm run check`: Executa o compilador TypeScript.
*   `npm run analyze`: Compila o projeto e fornece uma análise do bundle.

## Estrutura do Projeto

O projeto está organizado nos seguintes diretórios:

*   `client/`: Contém a aplicação frontend.
    *   `src/`: O código-fonte principal da aplicação React.
        *   `components/`: Componentes reutilizáveis.
        *   `data/`: Os dados do portfólio.
        *   `hooks/`: Hooks React personalizados.
        *   `lib/`: Funções utilitárias.
        *   `pages/`: As páginas principais da aplicação.
*   `public/`: Ativos estáticos.

## Otimizações de Performance

O projeto foi otimizado para performance usando as seguintes técnicas:

*   **Code Splitting:** O código é dividido em pedaços menores, que são carregados sob demanda.
*   **Lazy Loading:** Os componentes React e as imagens são carregados lentamente para reduzir o tempo de carregamento inicial.
*   **Otimização de Fontes:** O número de fontes foi reduzido ao mínimo e elas são carregadas com `display=swap`.


## Licença

Livre para praticar e usar
