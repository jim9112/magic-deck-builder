<script lang="ts">
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
  };
  loadCards();
</script>

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
    <div
      class="flex flex-col gap-3 p-8 mx-auto mt-8 border-4 rounded-md max-w-max bg-vanilla text-hookers-green border-flame"
    >
      <div class="flex gap-4">
        {#if cards[cardIndex]?.image_uris?.normal}
          <img
            class="h-[370px]"
            src={cards[cardIndex].image_uris.normal}
            alt=""
          />
        {/if}
        <div class="w-[415px]">
          <h3 class="text-2xl font-bold text-onyx">{cards[cardIndex].name}</h3>
          <p class="max-w-sm">{cards[cardIndex].oracle_text}</p>
          <p class="max-w-sm italic">{cards[cardIndex].flavor_text}</p>
        </div>
      </div>
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
    </div>
  {:else}
    <span>Loading....</span>
  {/if}
</div>
