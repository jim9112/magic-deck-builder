/** @type {import('./$types').PageLoad} */


export async function load({ fetch, params }) {
  const getCards = async (cardName = 'avacyn') => {
    const res = await fetch(
      `https://api.scryfall.com/cards/search?q=${cardName}`
    );
    const item = await res.json();
    return item;
  };
  return { getCards };
}
