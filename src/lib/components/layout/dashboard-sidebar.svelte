<svelte:window on:resize={closeSidebar} />

<script lang="ts">
	import { MenuIcon, CogIcon } from "@rgossiaux/svelte-heroicons/outline";

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
<div class="sidebar-toggle-wrapper">
	<div class="container">
		<button class="sidebar-toggle" on:click={toggleSidebar}>
			<MenuIcon class="h-6 w-6" aria-hidden="true" />
		</button>
	</div>
</div>
{/if}

<div class="sidebar-overlay" class:isOpen={isOpen} on:click={closeSidebar}></div>

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
	<button>
		modal
		<CogIcon class="h-6 w-6" aria-hidden="true" />
	</button>
</aside>

<style>
.sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
	align-items: center;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
	transform: translateX(-100%);
}
@media (max-width: 499px) and (min-width: 500px) {
	.sidebar {
		max-width: 75%;
	}
}
@media (max-width: 767px) {
	.sidebar {
		max-width: 320px;
	}
}
@media (min-width: 768px) {
	.sidebar {
		max-width: 5rem;
	}
}

.sidebar.hasTransition {
	transition: transform var(--transition-duration) var(--transition-easing);
}
.sidebar.hasTransition:not(.isMobile),
.sidebar.isOpen {
	transform: none;
}

.sidebar-toggle-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
	height: var(--dashboard-header-height);
	display: flex;
	align-items: center;
}
.sidebar-toggle {
	display: flex;
	align-items: center;
}
.sidebar-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	background-color: var(--sidebar-overlay-background);
	opacity: 0;
	pointer-events: none;
	transition: opacity var(--transition-duration) var(--transition-easing);
}
.sidebar-overlay.isOpen {
	opacity: 0.75;
	pointer-events: auto;
}
</style>
