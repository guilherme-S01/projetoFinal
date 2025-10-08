# Blueprint da Aplicação Aurea

## Visão Geral

Aurea é uma aplicação web moderna para pesquisa de imóveis, concebida para oferecer uma experiência de utilizador visualmente apelativa e interativa. A aplicação irá apresentar listagens de imóveis com imagens de alta qualidade, informações detalhadas e funcionalidades de pesquisa e filtragem fáceis de usar.

## Design e Estilo (Fase 1)

*   **Paleta de Cores:**
    *   `--ivory-elegant`: #FDFCF8 (Fundo Principal)
    *   `--charcoal-gray`: #333333 (Texto e Cabeçalhos)
    *   `--gold-soft`: #C0B283 (Acentos e Destaques)
    *   `--cool-gray`: #D8D8D8 (Bordas e Divisores)
    *   `--white-pure`: #FFFFFF (Fundo dos Cartões)
*   **Tipografia:** Uma fonte sans-serif moderna e legível será usada em toda a aplicação.
*   **Estilo Visual:** O design será limpo e minimalista, com foco em imagens de alta qualidade e um layout espaçoso.

## Plano da Fase 1: Configuração do Projeto e Estrutura Principal (Concluída)

1.  **Estrutura do Projeto:** Organizar a estrutura de ficheiros para a aplicação.
2.  **Componentes Principais:** Criar o `HeaderComponent` e o `FooterComponent`.
3.  **Estilo Global:** Definir a folha de estilos global.
4.  **Atualizar Componente da Aplicação:** Integrar os componentes do cabeçalho e do rodapé no layout principal.
5.  **Resolução de Erros:** Corrigir dependências e configurações de compilação (`@angular/animations`, `buildTarget`).
6.  **Construir e Verificar:** Compilar a aplicação para garantir que não há erros.

---

## Plano da Fase 2: Funcionalidade da Página Principal (Concluída)

1.  **Criar o `HomeComponent`**: Gerar o `HomeComponent` no diretório `src/app/pages/home`.
2.  **Reativar a Rota**: Descomentar a rota para o `HomeComponent` no ficheiro `src/app/app.routes.ts`.
3.  **Verificar o `router-outlet`**: Garantir que o `<router-outlet>` está presente no `app.component.html` para que a rota possa ser renderizada.
4.  **Construir e Verificar**: Executar `ng build` para garantir que tudo está a funcionar corretamente.

---

## Plano da Fase 3: Lógica de Dados no HomeComponent (Concluída)

1.  **Criar um Modelo de Dados (`Property`)**: Definir uma interface TypeScript para a estrutura dos dados de um imóvel.
2.  **Criar um Serviço de Dados (`PropertyService`)**: Criar um serviço para fornecer os dados dos imóveis.
3.  **Criar Dados Falsos (`mock-data`)**: Criar uma lista de imóveis de exemplo que o serviço irá usar.
4.  **Injetar o Serviço no `HomeComponent`**: O `HomeComponent` irá usar o `PropertyService` para obter a lista de imóveis.
5.  **Exibir os Dados**: Usar o `@for` no `home.component.html` para listar as propriedades, exibindo o título e o preço de cada uma.
6.  **Configurar o `HttpClient`**: Adicionar o `provideHttpClient()` às configurações da aplicação para preparar para futuras chamadas a uma API real.
7.  **Atualizar o `blueprint.md`**: Documentar os passos desta fase.
8.  **Construir e Verificar**: Compilar o projeto para garantir que está tudo funcional.

---

## Plano da Fase 4: Card de Propriedade e Estilização

1.  **Criar o `PropertyCardComponent`**: Gerar um novo componente reutilizável para exibir as informações de um único imóvel.
2.  **Estilizar o Card**: Adicionar estilos CSS ao `PropertyCardComponent` para criar um "card" visualmente atraente que exiba a imagem, o título e o preço do imóvel, de acordo com a nossa identidade visual.
3.  **Integrar o `PropertyCardComponent` no `HomeComponent`**: Substituir a lista simples atual no `HomeComponent` por uma grelha de `PropertyCardComponent`, um para cada imóvel.
4.  **Atualizar o `blueprint.md`**: Documentar os passos desta nova fase.
5.  **Construir e Verificar**: Como sempre, compilar o projeto para garantir que está tudo funcional.
