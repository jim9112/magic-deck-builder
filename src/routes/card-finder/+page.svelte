<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
    let {getCards} = data;
    type Cards = {
        card?: {
            name: String,
            imageUrl: string,
        }
    }
    let cards: Cards = {}
    const loadCards = async () => {
        const theCards = await getCards();
        cards = {...theCards}
        console.log(cards);
    } 
    loadCards();
</script>


<h1>Card Finder</h1>


<div class="conatainer">
    <div class="mx-auto max-w-max p-8 bg-vanilla text-hookers-green">
        {#if cards.card}
        <img src={cards.card.imageUrl} alt="">
        <h3>{cards.card.name && cards.card.name}</h3>
        {:else}
        <span>Loading....</span>
        {/if}
    </div>
</div>