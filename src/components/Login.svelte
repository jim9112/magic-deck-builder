<script>
  import CardLarge from "./global/CardLarge.svelte";

</script>
    <CardLarge>
        <form action="">
            <div class="flex gap-2">
                <div class="flex flex-col">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email">
                </div>
                <div class="flex flex-col">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password">
                </div>
            </div>
            <input type="submit" value="Login">
        </form>

    </CardLarge>
