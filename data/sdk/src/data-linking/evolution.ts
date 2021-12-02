export const getEvolutionIdFromUrl = (url: string): number => {
  const startIndex = url.search(/\/[0-9]+\//)
  return parseInt(url.slice(startIndex).replace(/\//g, ''))
}
