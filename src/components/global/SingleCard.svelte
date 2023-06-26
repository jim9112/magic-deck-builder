<script lang="ts">
  interface CardDetails {
    image_uris: {
      normal: string;
    };
    name: string;
    oracle_text: string;
    flavor_text: string;
  }
  export let card: CardDetails;
</script>

<div
  class="flex flex-col gap-3 p-8 mx-auto mt-8 border-4 rounded-md max-w-max bg-vanilla text-hookers-green border-flame"
>
  <div class="flex gap-4">
    <img class="h-[370px]" src={card.image_uris.normal} alt="" />
    <div class="w-[415px] flex flex-col gap-2">
      <h3 class="text-2xl font-bold text-onyx">{card.name}</h3>
      <p class="max-w-sm">{card.oracle_text}</p>
      {#if card.flavor_text}
        <p class="italic">{card.flavor_text}</p>
      {/if}
    </div>
  </div>
  <slot />
</div>
