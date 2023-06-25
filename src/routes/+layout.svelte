<script lang="ts">
  import { authUser } from '$lib/authStore';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
  import '../app.css';
  import Header from '../components/Header.svelte';
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      $authUser = {
        uid: user.uid,
      };
    }
  });
</script>

<div class="flex flex-col min-h-screen bg-hookers-green">
  <Header />
  <main class=" text-vanilla">
    <slot />
  </main>
</div>
