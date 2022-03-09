import React, { Component } from 'react'
import "../styles/Pokedex.css"

export default class Pokedex extends Component {
    constructor() {
        super();
        this.state = {
            filterPokemons: [],
            searched: "",
        }
    }


    // ESPAÇO DE TRABALHO --> Vamos usar o ciclo de vida novamente para setar uma única vez o que chega nós pelos props do filterPokemons


    getPokemon = (pokemon) => {
        // Aqui deve-se definir os dados em uma função retornada como prop
    }


    /*
    Aqui deve-se incluir as funções para os eventos de entrada (input) e botão 

    handleFilter = (event) => {
        Filtrar os pokemons de acordo com o que chega pelo evento event.target.value      
    Você pode usar um console.log para ver o que ele retorna
    }



    handleClean = (event) => {
        Deve-se evitar que a página seja renderizada novamente
        Deve-se definir todos os pokemons novamente e limpar o input
    }

    */


    render() {
        const { filterPokemons } = this.state;
        return (
            <div className="pokeContainer">
                <h3>POKEDEX</h3>
                <form className="pokeSearch">
                    {/* AREA DE TRABALHO PARA CRIAR DOIS EVENTOS, um para o input e outro para o botão */}
                    <input type="text" placeholder="Filtrar os pokemones" value={this.state.searched} />
                    <button>Limpar</button>
                </form>
                <div className="pokeList">
                    {filterPokemons.map(pokemon => (
                        <p key={pokemon.name} onClick={() => this.getPokemon(pokemon)} className="pokeOption">{pokemon.name}</p>
                    ))}
                </div>
            </div>
        )
    }
}

