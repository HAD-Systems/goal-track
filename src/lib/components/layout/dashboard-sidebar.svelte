<script lang="ts">
	import {
	  Menu,
	  MenuItem,
	} from "@rgossiaux/svelte-headlessui";

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
			active ? "bg-gray-100 text-gray-900" : "text-gray-700",
			disabled && "cursor-not-allowed opacity-50"
		);
	}

	export let isOpen = true;
</script>

<aside class="dashboard-sidebar">
	{#if isOpen}
		<h1>Open</h1>
	{:else}
		<h1>Closed</h1>
	{/if}

	<Menu as="div" class="relative">
		<MenuItem as="a" href="/overview" class={resolveClass}>
			Overview
		</MenuItem>
		<MenuItem as="a" href="/history" class={resolveClass}>
			History
		</MenuItem>
	</Menu>
</aside>

<style>
.dashboard-sidebar {
	flex: 0 1 400px;
}
</style>
