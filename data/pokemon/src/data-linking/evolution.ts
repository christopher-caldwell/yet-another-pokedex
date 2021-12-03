import { EvolutionChain } from 'pokedex-promise-v2'

export const getEvolutionIdFromUrl = (url: string): number => {
  const startIndex = url.search(/\/[0-9]+\//)
  return parseInt(url.slice(startIndex).replace(/\//g, ''))
}

export enum EvolutionTriggerName {
  LevelUp = 'level-up',
  Trade = 'trade',
  UseItem = 'use-item',
  Shed = 'shed',
  Other = 'other',
}
export interface EvolutionEvent {
  event: EvolutionTriggerName
  level?: number
  pokemonName: string
}
export const getLogicalEvolution = (evolutionChain: EvolutionChain) => {
  const evolutions: EvolutionEvent[] = []
  evolutionChain.chain.evolves_to.forEach(evolvesTo => {
    evolutions.push({
      event: evolvesTo.evolution_details[0].trigger.name as EvolutionTriggerName,
      level: evolvesTo.evolution_details[0].min_level,
      pokemonName: evolvesTo.species.name,
    })
  })
  return evolutions
}
