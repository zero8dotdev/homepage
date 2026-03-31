<script lang="ts">
	interface LegendItem {
		label: string;
		color: string;
	}

	interface Props {
		items: LegendItem[];
	}

	let { items }: Props = $props();
</script>

<div class="xcard-legend">
	{#each items as item}
		<span class="xcard-legend-item">
			<span class="xcard-dot" style="background:{item.color}"></span>
			{item.label}
		</span>
	{/each}
</div>
