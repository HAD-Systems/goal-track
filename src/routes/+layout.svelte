<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/components/_Button.svelte';

	import {
		mdiMenu,
		mdiWindowClose,
		mdiWeatherSunny,
		mdiWeatherNight,
		mdiCogOutline
	} from '@mdi/js';

	let darkTheme: boolean | undefined = undefined;
	let menuOpen: boolean | undefined = undefined;
	let miniWindow = false;
	let settingsOpen: boolean | undefined = undefined;

	let active = 'Overview';

	function setActive(value: string) {
		active = value;
	}

	function setMiniWindow() {
		if (typeof window !== 'undefined') {
			miniWindow = window.innerWidth < 720;
		}
	}

	onMount(setMiniWindow);

	onMount(() => {
		darkTheme = window.matchMedia('(prefers-color-scheme: dark)');
	});
</script>

<svelte:window on:resize={setMiniWindow} />

<svelte:head>
	<!-- SMUI Styles -->
	{#if darkTheme === undefined}
		<link rel="stylesheet" href="./smui.css" media="(prefers-color-scheme: light)" />
		<link rel="stylesheet" href="./smui-dark.css" media="screen and (prefers-color-scheme: dark)" />
	{:else if darkTheme}
		<link rel="stylesheet" href="./smui.css" />
		<link rel="stylesheet" href="./smui-dark.css" media="screen" />
	{:else}
		<link rel="stylesheet" href="./smui.css" />
	{/if}
</svelte:head>

<div class="page {miniWindow ? 'is-mobile' : ''}">
	<div class="main">
		{#if miniWindow}
			<div class="nav-main-toggle">
				<Button on:click={() => (menuOpen = !menuOpen)}>
					<span class="icon">
						<svg viewBox="0 0 24 24">
							<path fill="currentColor" d={menuOpen ? mdiWindowClose : mdiMenu} />
						</svg>
					</span>
				</Button>
			</div>
		{/if}
		<aside class="sidebar {menuOpen ? 'is-open' : ''}">
			<div class="sidebar-start">
				<span class="icon size-400">
					<svg viewBox="0 0 24 24">
						<path
							d="M0.41,13.41L6,19L7.41,17.58L1.83,12M22.24,5.58L11.66,16.17L7.5,12L6.07,13.41L11.66,19L23.66,7M18,7L16.59,5.58L10.24,11.93L11.66,13.34L18,7Z"
						/>
					</svg>
				</span>
			</div>

			<div class="sidebar-main">
				<Button
					href="javascript:void(0)"
					on:click={() => setActive('Overview')}
					activated={active === 'Overview'}
				>
					Overview
				</Button>
				<Button
					href="javascript:void(0)"
					on:click={() => setActive('History')}
					activated={active === 'History'}
				>
					History
				</Button>
			</div>

			<div class="sidebar-end">
				<Button on:click={() => (settingsOpen = !settingsOpen)}>
					<span class="icon">
						<svg viewBox="0 0 24 24">
							<path fill="currentColor" d={mdiCogOutline} />
						</svg>
					</span>
				</Button>
				<Button aria-label="Toggle Dark Mode" on:click={() => (darkTheme = !darkTheme)}>
					<span class="icon">
						<svg viewBox="0 0 24 24">
							<path fill="currentColor" d={darkTheme ? mdiWeatherSunny : mdiWeatherNight} />
						</svg>
					</span>
				</Button>
			</div>
		</aside>

		<main class="view">
			<slot />
		</main>
	</div>

	<div class="footer">mon, septempeb 5th, 2022</div>
</div>

<style>
	.page {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.page:not(.is-mobile) .view,
	.page:not(.is-mobile) .footer {
		margin-left: 80px;
	}
	.view,
	.footer {
		transition: 0.3s margin-left cubic-bezier(0.4, 0, 0, 1);
	}
	.nav-main-toggle {
		position: relative;
		z-index: 10;
	}
	.sidebar {
		background-color: var(--sidebar-bg);
		max-width: 80px;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		z-index: 5;
		transition: 0.3s transform cubic-bezier(0.4, 0, 0, 1);
	}
	.page.is-mobile .sidebar {
		max-width: 80vw;
	}
	.page.is-mobile .sidebar:not(.is-open) {
		transform: translateX(-100%);
	}
	.sidebar-main {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
</style>
