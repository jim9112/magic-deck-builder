<script>
  import { authUser } from '$lib/authStore';
  import { goto } from '$app/navigation';
  import { signOut } from 'firebase/auth';
  import { firebaseAuth } from '$lib/firebase';
  let mobileMenuOpen = false;
  const logOut = () => {
    signOut(firebaseAuth).then(() => {
      $authUser = undefined;
      goto('/login');
    }) 
  }
</script>

<header class="bg-onyx text-persian-orange">
  <nav
    class="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
    aria-label="Global"
  >
    <div class="flex lg:flex-1">
      <a href="/" class="-m-1.5 p-1.5">
        <span class="">The Deck Assistant</span>
      </a>
    </div>
    <div class="{mobileMenuOpen ? 'hidden' : 'flex'} lg:hidden">
      <button
        on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
        type="button"
        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      <a
        href="/card-finder"
        class="text-sm font-semibold leading-6 text-gray-900">Card Finder</a
      >
      <a
        href="/my-cards"
        class="text-sm font-semibold leading-6 text-gray-900">My Cards</a
      >
      <a href="/about" class="text-sm font-semibold leading-6 text-gray-900"
        >About</a
      >
    </div>
    {#if !$authUser?.uid}
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="/login" class="text-sm font-semibold leading-6 text-gray-900"
          >Log in <span aria-hidden="true">&rarr;</span></a
        >
      </div>
    {/if}
    {#if $authUser?.uid}
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <button
          type="button"
          on:click={logOut}
          class="text-sm font-semibold leading-6 text-gray-900"
          >Log Out <span aria-hidden="true">&rarr;</span></button
        >
      </div>
    {/if}
  </nav>
  <!-- Mobile menu, show/hide based on menu open state. -->
  <div
    class="{!mobileMenuOpen && 'hidden'} lg:hidden"
    role="dialog"
    aria-modal="true"
  >
    <!-- Background backdrop, show/hide based on slide-over state. -->
    <div class="fixed inset-0 z-10" />
    <div
      class="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
    >
      <div class="flex items-center justify-between">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="">The Deck Assistant</span>
        </a>
        <button
          on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
          type="button"
          class="-m-2.5 rounded-md p-2.5 text-gray-700"
        >
          <span class="sr-only">Close menu</span>
          <svg
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="flow-root mt-6">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="py-6 space-y-2">
            <a
              href="/card-finder"
              class="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
              >Card Finder</a
            >
            <a
              href="/my-cards"
              class="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
              >My Cards</a
            >
            <a
              href="/about"
              class="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
              >About</a
            >
          </div>
          <div class="py-6">
            <a
              href="/login"
              class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >Log in</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
