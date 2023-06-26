<script lang="ts">
import SingleCard from "../../components/global/SingleCard.svelte";

  export let data;
  let { getCards } = data;
  interface CardDetails {
    image_uris: {
      normal: string;
    };
    name: string;
    oracle_text: string;
    flavor_text: string;
  }
  let cardName: string;
  let cardIndex: number = 0;
  let cards: CardDetails[] = [];
  const loadCards = async (userInput = 'avacyn'): Promise<void> => {
    const theCards = await getCards(userInput);
    cards = theCards.data.filter(
      (card: CardDetails) => card?.image_uris?.normal && card.flavor_text
    );
    console.log(cards);
    cardIndex = 0;
  };
  loadCards();
</script>

<!-- To do: add in loading state along with a message for errors/no cards returned -->

<h1>Card Finder</h1>
<div class="flex justify-center gap-3">
  <form action="" on:submit|preventDefault={() => loadCards(cardName)}>
    <label for="cardName">Card Name</label>
    <input
      class="px-2 rounded-sm text-onyx h-9 bg-vanilla placeholder:text-onyx placeholder:italic"
      type="text"
      placeholder="Avacyn"
      name="cardName"
      bind:value={cardName}
    />
    <input
      class="h-full px-6 font-bold rounded-sm bg-persian-orange text-onyx"
      type="submit"
      value="Search"
    />
  </form>
</div>
<div class="container mx-auto">
  {#if cards && cards.length > 0}
  <SingleCard card={cards[cardIndex]}>
     <div class="flex justify-between font-bold text-onyx">
        <div>
          {#if cardIndex > 0}
            <button on:click={() => (cardIndex = cardIndex - 1)}
              >Previous</button
            >
          {/if}
        </div>
        <div>
          {#if cardIndex < cards.length - 1}
            <button on:click={() => (cardIndex = cardIndex + 1)}>Next</button>
          {/if}
        </div>
      </div>
  </SingleCard>
  {:else}
    <span>Loading....</span>
  {/if}
</div>
