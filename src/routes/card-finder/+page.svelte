<script lang="ts">
  export let data;
  let { getCards } = data;
  type Cards = {
    cards?: {
      name: string;
      imageUrl: string;
      flavor: string;
    }[];
  };
  let cardName: string;
  let cardIndex: number = 0;
  let cards: Cards['cards'] = [];
  const loadCards = async (userInput = 'avacyn'): Promise<void> => {
    const theCards = await getCards(userInput);
    cards = theCards.cards.filter((card: { imageUrl: any; flavor: any; }) => card.imageUrl && card.flavor);
    console.log(cards);
  };
  loadCards();
</script>

<h1>Card Finder</h1>
<div class="flex justify-center gap-3">
  <form action="" on:submit|preventDefault={()=>loadCards(cardName)}>
    <label for="cardName">Card Name</label>
    <input class="text-onyx h-9" type="text" name="cardName" bind:value={cardName} />
    <input type="submit" value="Search">
  </form>
</div>
<div class="container mx-auto">
  <button on:click={() => (cardIndex = cardIndex + 1)}>Next</button>
  {#if cards && cards.length > 0}
    <div
      class="flex gap-3 p-8 mx-auto border-4 rounded-md max-w-max bg-vanilla text-hookers-green border-flame"
    >
      <img src={cards[cardIndex].imageUrl} alt="" />
      <div>
        <h3 class="text-2xl font-bold">{cards[cardIndex].name}</h3>
        <p class="max-w-sm italic">{cards[cardIndex].flavor}</p>
      </div>
    </div>
  {:else}
    <span>Loading....</span>
  {/if}
</div>
