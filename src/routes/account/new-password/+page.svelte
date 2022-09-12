<script>
  import { fly, fade } from "svelte/transition";
  import BrandHome from "$lib/components/ui/brand-home.svelte";
  let hasError = false;
  let isSuccessVisible = false;
  let submitted = false;

  const errMessage = "All the fields are mandatory";

  function handleSubmit(e) {
    isSuccessVisible = true;

    setTimeout(function () {
      isSuccessVisible = false;
    }, 4000);
  }
</script>

<div
  class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
>
  <div class="w-full max-w-sm space-y-8">
    <div>
      <BrandHome />
      <h2
        class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
      >
        Set your new password
      </h2>
    </div>

    {#if hasError == true}
      <p class="error-alert">{errMessage}</p>
    {:else if isSuccessVisible}
      <p class="error-alert" transition:fade={{ duration: 150 }}>
        Form submitted. Check your email.
      </p>
    {/if}

    <form
      class="mt-8 space-y-6"
      class:submitted
      on:submit|preventDefault={handleSubmit}
    >
      <input type="hidden" name="remember" value="true" />
      <div class="-space-y-px rounded-md shadow-sm">
        <div class="mb-6">
          <label for="password" class="sr-only">New password</label>
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required
            class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
            placeholder="Password"
          />
        </div>
      </div>
      <button
        on:click={() => (submitted = true)}
        class="group relative flex w-full justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      >
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <!-- Heroicon name: mini/lock-closed -->
          <svg
            class="h-5 w-5 text-teal-500 group-hover:text-teal-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        Continue
      </button>
    </form>
  </div>
</div>
