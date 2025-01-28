import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:"skTl8p6MYNYDt5DKwTYbgGtQaO1sQoLKg1EQ5KWi8Tv2hDkMwU67lfN01RdkjroKbMwAwbKFzzdTCIFMmMeY65bu0kEtIlVbO6hqtipNWPosAlsn8o7HxqigazTutGCHQWtny5FJ6S2MLYtu9zjZ4ZGQugUqNtz5vdZ9amSOK9M9URpWbyIP"

})
