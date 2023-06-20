<script lang="ts">
    export let data;
    let {getCards} = data;
    type Cards = {
        cards?: { 
            name: string,
            imageUrl: string,
            flavor: string,
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
<div class="flex justify-center gap-3">
    <input class="text-onyx h-9" type="text" bind:value={cardName}>
    <button on:click={() => loadCards(cardName)}>Search</button>
</div>
<div class="container mx-auto">
    <button on:click={() => cardIndex = cardIndex+ 1}>Next</button>
    {#if cards && cards.length > 0}
        <div class="mx-auto max-w-max p-8 bg-vanilla text-hookers-green rounded-md border-flame border-4 flex gap-3">
            <img src={cards[cardIndex].imageUrl} alt="">
            <div>
                <h3 class="text-2xl font-bold">{cards[cardIndex].name}</h3>
                <p class="max-w-sm italic">{cards[cardIndex].flavor}</p>
            </div>
        </div>
    {:else}
        <span>Loading....</span>
    {/if}
</div>