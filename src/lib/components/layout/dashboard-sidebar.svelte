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
			active ? "bg-orange-300 text-gray-900" : "text-gray-700",
			disabled && "cursor-not-allowed opacity-50"
		);
	}
</script>

<aside class="sidebar">
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
</aside>

<style>
.sidebar {
	flex: 0 1 5rem;
}
</style>
