<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
    let {getCards} = data;
    type Cards = {
        cards?: { 
            name: string,
            imageUrl: string
        }[]
    }
    let cardName: string;
    let cardIndex: number = 0;
    let cards: Cards["cards"] = [];
    const loadCards = async (userInput = 'avacyn'):Promise<void> => {
        const theCards = await getCards(userInput);
        cards = theCards.cards
        console.log(cards);
    } 
    loadCards();
</script>


<h1>Card Finder</h1>
<input class="text-onyx" type="text" bind:value={cardName}>
<button on:click={() => loadCards(cardName)}>Search</button>
<div class="container">
    <button on:click={() => cardIndex = cardIndex+ 1}>Next</button>
    <div class="mx-auto max-w-max p-8 bg-vanilla text-hookers-green">
        {#if cards && cards.length > 0}
        <img src={cards[cardIndex].imageUrl} alt="">
        <h3>{cards[cardIndex].name}</h3>
        {:else}
        <span>Loading....</span>
        {/if}
    </div>
</div>