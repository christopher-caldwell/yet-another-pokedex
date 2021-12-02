import { getEvolutionIdFromUrl } from '@/data-linking'

describe('Extracting the Evolution ID from the URL', () => {
  test('Single digit ID', () => {
    const url = 'https://pokeapi.co/api/v2/evolution-chain/1/'
    const id = getEvolutionIdFromUrl(url)
    expect(id).toBe(1)
  })
  test('Two digit ID', () => {
    const url = 'https://pokeapi.co/api/v2/evolution-chain/11/'
    const id = getEvolutionIdFromUrl(url)
    expect(id).toBe(11)
  })
  test('Three digit ID', () => {
    const url = 'https://pokeapi.co/api/v2/evolution-chain/112/'
    const id = getEvolutionIdFromUrl(url)
    expect(id).toBe(112)
  })
  test('V1: Three digit ID', () => {
    const url = 'https://pokeapi.co/api/v1/evolution-chain/112/'
    const id = getEvolutionIdFromUrl(url)
    expect(id).toBe(112)
  })
  test('Random insertions ( URL changes form )', () => {
    const url = 'https://pokeapi.co/api/v2/something-else-added/evolution-chain/112/'
    const id = getEvolutionIdFromUrl(url)
    expect(id).toBe(112)
  })
})
