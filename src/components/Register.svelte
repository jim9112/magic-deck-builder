<script lang="ts">
  import { authUser } from '$lib/authStore';
  import CardLarge from './global/CardLarge.svelte';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import { firebaseAuth } from '$lib/firebase';
  let email: string;
  let password: string;
  let confirmPassword: string;

  let passwordsMatch: boolean | undefined = undefined;
  const register = () => {
    if (password === confirmPassword) {
      passwordsMatch = true;
      createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
          $authUser = {
            uid: userCredential.user.uid,
          };
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    } else {
      passwordsMatch = false;
    }
  };
</script>

<CardLarge>
  <form action="" on:submit|preventDefault={register}>
    {#if passwordsMatch === false}
      <span class="text-flame">Passwords do not match!!</span>
    {/if}
    <div class="flex gap-4">
      <div class="flex flex-col">
        <label for="email">Email</label>
        <input bind:value={email} type="email" name="email" id="email" />
      </div>
      <div class="flex">
        <div class="flex flex-col">
          <label for="password">Password</label>
          <input
            bind:value={password}
            type="password"
            name="password"
            id="password"
          />
        </div>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="flex flex-col">
        <label for="confirmPassword">Confirm Password</label>
        <input
          bind:value={confirmPassword}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
        />
      </div>
      <input type="submit" value="Sign Up" />
    </div>
  </form>
</CardLarge>
