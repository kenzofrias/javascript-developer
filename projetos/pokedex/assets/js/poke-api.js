

const pokeAPI = {}

pokeAPI.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
} // Pega os detalhes dos pokemons e transforma em JSON

pokeAPI.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url) // Faz a requisição
        .then((response) => response.json()) // Transforma a resposta da requisição em JSON (mostra elas)
        .then((jsonBody) => jsonBody.results) // Pega os resultados (lista de pokemon)
        .then((pokemons)  => pokemons.map((pokemon) => pokeAPI.getPokemonDetail(pokemon))) // Pega os detalhes dos pokemons
        .then((detailRequests) => Promise.all(detailRequests)) //Espera todas as requisições terminarem
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((error) => console.error(error)) // Trata erros
}
