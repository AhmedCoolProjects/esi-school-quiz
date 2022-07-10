<script>
	import ModuleCard from '$lib/components/cards/moduleCard.svelte';

	import Carousel from '$lib/components/layout/carousel.svelte';
</script>

<Carousel />
<div class="divider text-2xl font-semibold">Modules</div>
<div class="grid my-4 gap-4 grid-cols-12">
	{#each [1, 2, 3, 4] as i}
		<div class="md:col-span-4 col-span-12">
			<ModuleCard />
		</div>
	{/each}
</div>
