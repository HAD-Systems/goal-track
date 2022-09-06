<script lang="ts">
	import { mdiPlus } from '@mdi/js';

	import Button from '$lib/components/_Button.svelte';

	import List, { Item, Text } from '@smui/list';

	function addTask() {
		alert('add task');
	}
	function editTask() {
		alert('edit task');
	}
	function addGoal() {
		alert('add goal');
	}
	function editGoal() {
		alert('edit goal');
	}
</script>

<div class="view-inner">
	<div class="view-inner-item today">
		<p class="section-title">
			today's tasks
			<Button on:click={addTask}>
				<span class="icon size-400">
					<svg viewBox="0 0 24 24">
						<path fill="currentColor" d={mdiPlus} />
					</svg>
				</span>
			</Button>
		</p>
		<List>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Make video</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Send 5 proposals on Upwork</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Go for a run</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Call grandma</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Make video</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Send 5 proposals on Upwork</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Go for a run</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Call grandma</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Make video</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Send 5 proposals on Upwork</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Go for a run</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Call grandma</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Make video</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Send 5 proposals on Upwork</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Go for a run</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Call grandma</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Make video</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Send 5 proposals on Upwork</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Go for a run</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Call grandma</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Make video</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Send 5 proposals on Upwork</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Go for a run</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Call grandma</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Make video</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Send 5 proposals on Upwork</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Go for a run</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editTask}>
				<Text>Call grandma</Text>
			</Item>
		</List>
	</div>

	<div class="view-inner-item goals">
		<p class="section-title">
			goals
			<Button on:click={addGoal}>
				<span class="icon size-400">
					<svg viewBox="0 0 24 24">
						<path fill="currentColor" d={mdiPlus} />
					</svg>
				</span>
			</Button>
		</p>
		<List>
			<Item href="javascript:void(0)" on:click={editGoal}>
				<Text>1000 Youtube subscribers</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={editGoal}>
				<Text>$2000 a month freelancing income</Text>
			</Item>
		</List>
	</div>
</div>

<style>
	.view-inner {
		display: flex;
		padding: 0 2em;
	}
	.view-inner-item {
		flex: 1;
	}

	.section-title {
		font-size: 2rem;
		display: flex;
		align-items: center;
	}
</style>
