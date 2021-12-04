import fs from 'fs'
import capitalize from 'lodash.capitalize'

const pokemonString = fs.readFileSync('./pokemon.json').toString()
const pokemon = JSON.parse(pokemonString)

const formatName = (name) => {
  const [displayName, ...descriptions] = name.split('-')
  const capitalizedDescriptions = descriptions.reduce((total, current) => total + capitalize(current) + ' ','')
  return `${capitalize(displayName)} ( ${capitalizedDescriptions.trim()} )`
}

pokemon.forEach(thisPokemon => {
  thisPokemon.name = formatName(thisPokemon.name)
})

fs.writeFileSync('./pokemon.json', JSON.stringify(pokemon))