<script lang="ts">
  import SingleCard from '../components/global/SingleCard.svelte';
  interface CardDetails {
    image_uris: {
      normal: string;
    };
    name: string;
    oracle_text: string;
  }
  export let data;
  let { getCards } = data;
  let card: CardDetails;
  const loadCards = async (userInput = 'avacyn'): Promise<void> => {
    const theCard = await getCards();
    card = theCard;
    console.log(card);
  };
  loadCards();
</script>

<div class="container flex flex-col gap-5 mx-auto my-7">
  <h1 class="text-3xl text-center">The Deck Assistant</h1>
  <p class="text-center">
    Welcome! Sign up to browse Magic the Gatering cards, catalogue your
    collection and build up plan decks to to build and play with.
  </p>
</div>
{#if card}
  <SingleCard {card} />
{/if}
<div class="flex justify-center mt-5">
  <button
    class="h-full px-6 py-3 font-bold rounded-sm bg-persian-orange text-onyx"
    on:click={() => loadCards()}
    type="button">Random Card</button
  >
</div>
