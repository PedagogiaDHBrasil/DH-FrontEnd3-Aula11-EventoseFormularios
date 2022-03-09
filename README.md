# Pokedex V 2.0

Se você achou a pokedex divertida, parabéns! vamos usá-la novamente.

Continuaremos a usar o pokémon `json`
Veremos uma estrutura ligeiramente diferente e, desta vez, eles funcionarão nos arquivos `App.jsx` e `Pokedex.jsx`.

## Atividade
App.jsx:
- O projeto tem um `json` mas deve-se usar o ciclo de vida para chamá-lo e trazer os primeiros 50 pokemons.
- Você receberá os estados necessários para trabalhar, dependerá de você como irá modificar os valores. 

Pokedex.jsx:
- Deve-se fazer uma função que filtre os pokemons e outra função para resetar a lista. Deve-se usar eventos.
- Eles já terão um estado para se guiar..
- Eles também devem obter os dados do pokemon

### Ajuda e dicas
- A princípio você verá apenas um pokemon na pokedex sem a lista, com uma entrada e um botão que não funcionam. Recomenda-se que ao trabalhar com dados que podem ou não chegar, utilize um loader
- Ao gerenciar apis, é difícil saber como os dados chegam até nós, verifique o que está chegando e o que necessitam
- Os únicos dados que o pokemon deve ter são: nome, id e seus tipos
- Os únicos dados que os pokemons devem ter são: nome e sua respectiva url


### Pasos para executar o projeto

Por primeiro: `npm install`
Em seguida: `npm start`

### Versões do NPM y NODE
Caso o projeto falhe em `npm install`, atualize para as versões:
`NPM 7.19.1` ou superior
`NODE 16.5.0` ou superior.
