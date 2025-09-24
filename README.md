# Calculadora.js
Uma calculadora simples e funcional desenvolvida com HTML, CSS e JavaScript puro. O projeto oferece uma interface limpa com funcionalidades básicas, além de alguns recursos extras como troca de tema, suporte para teclado e a funcionalidade de copiar o resultado.

## ✨ Funcionalidades
- **Operações Aritméticas Básicas**: Adição (``+``), Subtração (``-``), Multiplicação (``*``) e Divisão (``/``).

- **Funções Adicionais**: Suporte para parênteses ``( )`` para agrupar operações e operador de Módulo (``mod`` ou ``%``).

- **Troca de Tema**: Botão para alternar facilmente entre o modo claro (light) e escuro (dark).

- **Suporte via Teclado**: Permite a inserção de números e operadores diretamente pelo teclado, incluindo `Enter` para calcular e `Backspace` para apagar.

- **Copiar Resultado**: Um botão prático para copiar o resultado final para a área de transferência do usuário.

- **Feedback Visual**: O botão "Copiar" muda de texto para "Copiado!" temporariamente, e o campo de resultado exibe "Error" caso a expressão matemática seja inválida.

## 🛠️ Tecnologias Utilizadas
- **HTML5**: Para a estrutura e semântica do conteúdo.

- **CSS3**: Para a estilização, layout e temas.

- **JavaScript (ES6+)**: Para toda a lógica funcional, manipulação do DOM e interatividade.

## 🚀 Como Usar
Para executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório (ou simplesmente baixe os arquivos `index.html`, ``script.js`` e ``style.css`` para a mesma pasta).
```
git clone https://github.com/BrunoFelipeVaz/Calculadora.js.git
```

2. Navegue até a pasta do projeto.
```
cd Calculadora.js
```
3. Abra o arquivo ``index.html`` no seu navegador de preferência.

E pronto! A calculadora estará funcionando.

## 📄 Explicação do Código (``script.js``)
O arquivo `script.js` é o cérebro da aplicação e é responsável por toda a interatividade.

- **Manipulação do DOM**: O código começa selecionando todos os elementos interativos da página (botões, inputs, etc.).

- **Entrada de Dados**: Event Listeners são adicionados aos botões para capturar os cliques e ao ``input`` principal para capturar as teclas pressionadas (``keydown``). Apenas as teclas permitidas (definidas no array ``allowedKeys``) são processadas.

- **Cálculo**: A função ``calculate()`` é o coração da lógica. Ela utiliza o método ``eval()`` do JavaScript para processar a string da expressão matemática digitada pelo usuário. Um tratamento de erro básico é aplicado para exibir a mensagem "Error" em caso de uma expressão inválida.

- **Troca de Tema**: O botão de tema verifica o atributo ``data-theme`` do elemento ``<main>`` e, com base nisso, altera diretamente as propriedades de estilo CSS de vários elementos para alternar entre os esquemas de cores claro e escuro.