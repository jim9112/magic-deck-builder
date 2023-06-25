<script lang="ts">
  import SingleCard from "../components/global/SingleCard.svelte";
     interface CardDetails {
        image_uris: {
            normal: string,
        },
        name: string;
        oracle_text: string;
    }
    export let data;
    let { getCards } = data;
    let card: CardDetails;
    const loadCards = async (userInput = 'avacyn'): Promise<void> => {
    const theCard = await getCards();
    card= theCard;
    console.log(card)
  };
  loadCards();
</script>
<h1 class="text-3xl">Magic Deck Builder</h1>
{#if card}
<SingleCard card={card} />
{/if}