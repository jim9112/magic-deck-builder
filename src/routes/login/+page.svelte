<script lang="ts">
  import Login from "../../components/Login.svelte";
  import Register from "../../components/Register.svelte";
    let login:Boolean = true;
</script>
<h1>Login</h1>
{#if login} 
<Login />
{:else}
<Register />
{/if}
<button on:click={()=>login = !login} type="button">Login</button>