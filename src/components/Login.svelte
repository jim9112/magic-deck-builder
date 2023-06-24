<script lang="ts">
  import CardLarge from "./global/CardLarge.svelte";
    let email: string;
    let password: string;
    const login = () => {
        console.log(email, password)
    }
</script>
    <CardLarge>
        <form action="" on:submit|preventDefault={login}>
            <div class="flex gap-2">
                <div class="flex flex-col">
                    <label for="email">Email</label>
                    <input bind:value={email} type="email" name="email" id="email">
                </div>
                <div class="flex flex-col">
                    <label for="password">Password</label>
                    <input bind:value={password} type="password" name="password" id="password">
                </div>
            </div>
            <input type="submit" value="Login">
        </form>

    </CardLarge>
