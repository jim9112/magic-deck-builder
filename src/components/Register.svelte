<script lang="ts">
  import CardLarge from "./global/CardLarge.svelte";
    let email: string;
    let userName: string;
    let password: string;
    let confirmPassword: string;

    const register = () => {
        console.log('registered')
    }
</script>
<CardLarge>
    <form action="" on:submit|preventDefault={register}>
        <div class="flex gap-4">
            <div class="flex flex-col">
                <label for="email">Email</label>
                <input bind:value={email} type="email" name="email" id="email">
            </div>
            <div class="flex flex-col">
                <label for="userName">User Name</label>
                <input bind:value={userName} type="text" name="userName" id="userName">
            </div>
        </div>
        <div class="flex gap-4">
            <div class="flex">
                <div class="flex flex-col">
                    <label for="password">Password</label>
                    <input bind:value={password} type="password" name="password" id="password">
                </div>
            </div>
            <div class="flex flex-col">
                <label for="confirmPassword">Confirm Password</label>
                <input bind:value={confirmPassword} type="password" name="confirmPassword" id="confirmPassword">
            </div>
        </div>
        <input type="submit" value="Sign Up">
    </form>
</CardLarge>
