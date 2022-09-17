<svelte:window on:resize={setMiniWindow} />
<svelte:head>
  <link rel="stylesheet" href="{assets}/styles/main.css" />
</svelte:head>

<script>
  import { assets } from '$app/paths';

  import "../main.css"; // import tailwindcss
  import { onMount } from 'svelte';
  
  // layout
	import DashboardHeader from '$lib/components/layout/dashboard-header.svelte'
	import DashboardSidebar from '$lib/components/layout/dashboard-sidebar.svelte'

  // functionality
  let innerWidth = 0;
  let miniWindow = false;

  onMount(setMiniWindow);
  
  function setMiniWindow() {
    if (typeof window !== 'undefined') {
      innerWidth = window.innerWidth;
      miniWindow = innerWidth < 720;
    }
  }
</script>


<DashboardHeader />

<div class="flex">
  <DashboardSidebar />
  
  <main class="dashboard-main">
    <slot />
  </main>
</div>

Width: {innerWidth}

<style>
  .dashboard-main {
    flex: 1;
  }
</style>
