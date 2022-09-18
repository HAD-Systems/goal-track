<svelte:window on:resize={closeSidebar} />

<script lang="ts">
	import {
	  Menu,
	  MenuItem,
	} from "@rgossiaux/svelte-headlessui";
  	
	import { onMount } from 'svelte';
	
	let hasTransition = false;
	let isOpen = false;

	onMount(setMounted);

	function setMounted() {
		let duration = getComputedStyle(document.documentElement).getPropertyValue('--js-sidebar-transition'); // get css variable
		duration = duration.substring(0, duration.length - 1); // slice last character off
		setTimeout(() => {
			hasTransition = true;
		}, duration)
	}

	function classNames(...classes: (string | false | null | undefined)[]) {
		return classes.filter(Boolean).join(" ");
	}
	function resolveClass({
		active,
		disabled,
	}: {
		active: boolean;
		disabled: boolean;
	}) {
		return classNames(
			"flex justify-between w-full px-4 py-2 text-sm leading-5 text-left",
			active ? "bg-orange-300 text-gray-900" : "text-gray-700",
			disabled && "cursor-not-allowed opacity-50"
		);
	}

	function closeSidebar() {
		isOpen = false
	}
	function toggleSidebar() {
		isOpen = !isOpen
	}

	export let propIsMiniWindow
</script>
{#if propIsMiniWindow}
	<button class="sidebar-toggle" on:click={toggleSidebar}>toggle menu</button>
{/if}
<aside class="sidebar" class:isMobile={propIsMiniWindow} class:hasTransition={hasTransition} class:isOpen={isOpen}>
	<p>logo</p>
	<Menu as="ul">
		<li>
			<MenuItem as="a" href="/overview" class={resolveClass}>
				Overview
			</MenuItem>
		</li>
		<li>
			<MenuItem as="a" href="/history" class={resolveClass}>
				History
			</MenuItem>
		</li>
	</Menu>
	<button>settings</button>
</aside>

<style>
.sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
	align-items: center;

    max-width: 5rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
	transform: translateX(-100%);
}
.sidebar.hasTransition {
	transition: transform var(--transition-duration) var(--transition-easing);
}
.sidebar.hasTransition:not(.isMobile),
.sidebar.isOpen {
	transform: none;
}

.sidebar-toggle {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
}
</style>
