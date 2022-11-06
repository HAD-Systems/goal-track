<script>
  import { assets } from "$app/paths";

  import "../main.css"; // import tailwindcss
  import { onMount } from "svelte";

  // layout
  import DashboardHeader from "$lib/components/layout/dashboard-header.svelte";
  import DashboardSidebar from "$lib/components/layout/dashboard-sidebar.svelte";

  // functionality
  let innerWidth = 0;
  let miniWindow = false;

  onMount(setMiniWindow);

  function setMiniWindow() {
    if (typeof window !== "undefined") {
      innerWidth = window.innerWidth;
      miniWindow = innerWidth < 768;
    }
  }
</script>

<svelte:window on:resize={setMiniWindow} />
<svelte:head>
  <link rel="stylesheet" href="{assets}/styles/main.css" />
</svelte:head>

<div class="dashboard-wrapper">
  <DashboardSidebar propIsMiniWindow={miniWindow} />

  <div class="dashboard-content">
    <DashboardHeader />

    <main class="dashboard-main">
      <div class="container h-full">
        <div class="inner">
          <slot />
          <p>Width: {innerWidth}</p>
          <p>
            Fixed Sidebar:
            {#if miniWindow}
              Closed
            {:else}
              Open
            {/if}
          </p>
        </div>
      </div>
    </main>
  </div>
</div>

<style>
  .dashboard-wrapper {
    display: flex;
    height: 100%;
  }
  .dashboard-content {
    flex: 1;
    position: relative;
    padding-top: var(--dashboard-header-height);
    transition: padding-left var(--transition-duration) var(--transition-easing);
  }
  @media (min-width: 768px) {
    .dashboard-content {
      padding-left: 5rem;
      background-image: linear-gradient(
          rgba(0, 0, 0, 0.02) 2px,
          transparent 2px
        ),
        linear-gradient(90deg, rgba(0, 0, 0, 0.02) 2px, transparent 1px),
        linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
      background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
      background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
    }
  }
</style>
