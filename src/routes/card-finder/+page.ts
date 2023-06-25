/** @type {import('./$types').PageLoad} */

import { firebaseApp } from '$lib/firebase';

export async function load({ fetch, params }) {
  const getCards = async (cardName = 'avacyn') => {
    const res = await fetch(
      `https://api.magicthegathering.io/v1/cards?name=${cardName}`
    );
    const item = await res.json();
    return item;
  };
  return { getCards };
}
