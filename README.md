# Software Engineer Test

### Como utilizar

O projeto utiliza o gerenciador de pacotes `NPM`. Instale os pacotes com o comando `npm i` para prosseguir com a construção.

Para executar o projeto, use `npm start`.

## Tarefas
O teste consiste em utilizar React para uma simples aplicação que exibe o valor de ações através de chamadas de API. Crie uma tela apenas com um input de texto que receberá um símbolo de ação (ex: aapl para Apple, fb para Facebook, twtr para Twitter) e retornará o último valor de ação da empresa, assim como outras informações relevantes. Sinta-se livre para utilizar quaisquer dependências que você desejar no npm e auxiliar no desenvolvimento da aplicação.

1. Utilizar componentes React para montar a interface e Redux para controlar o estado;
2. Você pode utilizar a API gratuita do [IEX](https://iextrading.com/developer/) para obter os dados necessários;
3. A documentação da API sugerida pode ser acessada [aqui](https://iextrading.com/developer/docs/#stocks);
4. As informações de ações para cada símbolo são encontradas [aqui](https://iextrading.com/developer/docs/#quote) (Estamos interessados apenas no `latestPrice`)
5. A mesma API também retorna [as informações mais relevantes da empresa](https://iextrading.com/developer/docs/#company)
6. Plotar um gráfico com [a evolução do valor das ações](https://iextrading.com/developer/docs/#chart) (PS: utilizamos o pacote [Recharts](http://recharts.org))

## Desafios Extras
Se você gostaria de fazer um pouco mais, sugerimos os seguintes desafios:

1. Componentes reutilizáveis: que tal montar a interface usando seus próprios componentes de apresentação? Uma ideia: criar componentes genéricos de UI que poderiam ser utilizados em outros projetos. É o que fazemos internamente com nossos projetos! Adoramos o [`styled-components`](https://styled-components.com);
2. Atualizações: a API é atualizada quase em tempo real e poderia atualizar as informações de acordo (conforme faz o [Yahoo! Finance](https://finance.yahoo.com/quote/AAPL?p=AAPL&.tsrc=fin-srch))
3. Animação à la [Bloomberg](https://www.bloomberg.com): exibir em formato de marquee o valor e variação percentual do valor das ações

## Requisitos de tecnologia
* [x] React para _view;
* [x] Redux para_  framework_ de estado;

### Pontos de sucesso
Itens que foram concluídos:

Pré-requisitos:
* [x] Crie uma tela apenas com um input de texto que receberá um símbolo de ação e retornará o último valor de ação da empresa;
* [x] Obter dados extras da empresa;
* [x] Utilizar componentes React para montar a interface e Redux para controlar o estado;
* [x] Plotar um gráfico com a evolução do valor das ações. Foi Utilizado o pacote [Recharts].

Extra:
* [x] Componentes reutilizáveis com Styled-Components;
* [ ] Atualizações: a API é atualizada quase em tempo real;
* [ ] Exibir em formato de marquee o valor e variação percentual do valor das ações.
