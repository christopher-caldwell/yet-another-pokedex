export const pokemonImageUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

export const generatePokemonImageUrl = (pokemonId: number): string => pokemonImageUrl + pokemonId + '.png '
