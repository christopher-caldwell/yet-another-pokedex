import { writeFileSync } from 'fs'

import { generateTypes } from './utils'

const writeTypes = async () => {
  const types = await generateTypes()
  writeFileSync('./types.json', JSON.stringify(types))
}

writeTypes()
