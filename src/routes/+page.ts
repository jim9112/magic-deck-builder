/** @type {import('./$types').PageLoad} */

export async function load({ fetch, params }) {
  const getCards = async () => {
    const res = await fetch(`https://api.scryfall.com/cards/random`);
    const item = await res.json();
    return item;
  };
  return { getCards };
}