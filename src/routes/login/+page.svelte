<script lang="ts">
  import Login from "../../components/Login.svelte";
  import Register from "../../components/Register.svelte";
    let login:Boolean = true;
</script>
<h1>Login</h1>
<div>
  {#if login} 
  <Login />
  {:else}
  <Register />
  {/if}
</div>
<div class="flex justify-center gap-1 mt-5">
  {#if login}
  <p>Dont have an account yet?</p>
  {:else}
  <p>Already have an account?</p>
  {/if}
  <button on:click={()=>login = !login} type="button">
    {#if login}
  Register Now!
  {:else}
  Log In!
  {/if}
  </button>
</div>