<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
</script>
<div class="min-h-screen flex flex-col bg-hookers-green">
    <Header />
    <main class=" text-vanilla">
        <slot />
    </main>
</div>