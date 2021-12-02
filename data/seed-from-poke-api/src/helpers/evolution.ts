const evolution = {
  baby_trigger_item: null,
  chain: {
    evolution_details: [],
    evolves_to: [
      {
        evolution_details: [
          {
            gender: null,
            held_item: null,
            item: null,
            known_move: null,
            known_move_type: null,
            location: null,
            min_affection: null,
            min_beauty: null,
            min_happiness: null,
            min_level: 16,
            needs_overworld_rain: false,
            party_species: null,
            party_type: null,
            relative_physical_stats: null,
            time_of_day: '',
            trade_species: null,
            trigger: { name: 'level-up', url: 'https://pokeapi.co/api/v2/evolution-trigger/1/' },
            turn_upside_down: false,
          },
        ],
        evolves_to: [
          {
            evolution_details: [
              {
                gender: null,
                held_item: null,
                item: null,
                known_move: null,
                known_move_type: null,
                location: null,
                min_affection: null,
                min_beauty: null,
                min_happiness: null,
                min_level: 32,
                needs_overworld_rain: false,
                party_species: null,
                party_type: null,
                relative_physical_stats: null,
                time_of_day: '',
                trade_species: null,
                trigger: { name: 'level-up', url: 'https://pokeapi.co/api/v2/evolution-trigger/1/' },
                turn_upside_down: false,
              },
            ],
            evolves_to: [],
            is_baby: false,
            species: { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon-species/3/' },
          },
        ],
        is_baby: false,
        species: { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon-species/2/' },
      },
    ],
    is_baby: false,
    species: { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-species/1/' },
  },
  id: 1,
}

interface EvolutionResponse {
  chain: {
    evolves_to: EvolvesTo[]
  }
}

interface EvolutionDetails {
  gender: null
  held_item: null
  item: null
  known_move: null
  known_move_type: null
  location: null
  min_affection: null
  min_beauty: null
  min_happiness: null
  min_level: number
  needs_overworld_rain: boolean
  party_species: null
  party_type: null
  relative_physical_stats: null
  /** If empty string, no specific time is needed */
  time_of_day: string
  trade_species: null
  trigger: EvolutionTrigger
  turn_upside_down: boolean
}

export enum EvolutionTriggerName {
  LevelUp ='level-up',
  Trade = 'trade',
  UseItem =  'use-item',
  Shed = 'shed',
  Other = 'other',
}
interface EvolutionTrigger {
  name: EvolutionTriggerName
  url: string
}

interface EvolvesTo {
  evolution_details: EvolutionDetails[]
  evolves_to: EvolvesTo[]
  is_baby: boolean
  species: {
    name: string
    url: string
  }
}
