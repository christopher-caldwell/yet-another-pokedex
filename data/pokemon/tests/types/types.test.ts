import { getNoEffectTypes, pruneAvoidTypes, findDuplicateTypes, pruneFightWithTypes } from '@/data-linking/types'

describe('Type Effectiveness: Flying and Fire', () => {
  test('Most Effective Types', () => {
    const result = findDuplicateTypes(['bug', 'bug', 'dark', 'electric', 'flying'])
    expect(result[0]).toBe('bug')
    expect(result).toHaveLength(1)
  })

  test('Super Effective', () => {
    const result = pruneFightWithTypes(['fire', 'flying'])
    expect(result.includes('water')).toBe(true)
    expect(result.includes('electric')).toBe(true)
    expect(result).toHaveLength(2)
  })

  test('Not Very Effective', () => {
    const result = pruneAvoidTypes(['fire', 'flying'])
    expect(result.includes('fire')).toBe(true)
    expect(result.includes('fighting')).toBe(true)
    expect(result.includes('steel')).toBe(true)
    expect(result.includes('fairy')).toBe(true)
    expect(result.includes('bug')).toBe(true)
    expect(result.includes('grass')).toBe(true)
    expect(result).toHaveLength(6)
  })

  test('No Effect', () => {
    const result = getNoEffectTypes(['fire', 'flying'])
    expect(result.includes('ground')).toBe(true)
    expect(result).toHaveLength(1)
  })
})
