<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let {getCards} = data;
    const displayCards = async() => {
        const cards = await getCards();
        console.log(cards);
    }
    displayCards();
</script>



<h1 class="text-3xl">Magic Deck Builder</h1>
