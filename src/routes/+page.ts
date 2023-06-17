/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const getCards = async () => {
        const res = await fetch(`https://api.magicthegathering.io/v1/cards`);
        const item = await res.json();
        return item;
    }

  return { getCards };
}
