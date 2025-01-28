
import client from './sanityclient';

// Query for fetching Food data
export async function getFoodData() {
  const query = `*[_type == "food"]{
    _id,
    name,
    description,
    price,
    "imageurl": image.asset->url
  }`;
  const data = await client.fetch(query);
  return data;
}

// Query for fetching Chef data
export async function getChefData() {
  const query = '*[_type == "chef"]'; // Query for all chefs
  const data = await client.fetch(query);
  return data;
}
