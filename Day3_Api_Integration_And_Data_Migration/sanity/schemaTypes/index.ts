import food from './food'
import chef from './chef'
import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ food, chef],
}
