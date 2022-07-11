<script lang="ts">
	import { appAxios } from '$lib/axios';

	import ModuleCard from '$lib/components/cards/moduleCard.svelte';

	import Carousel from '$lib/components/layout/carousel.svelte';
	import { onMount } from 'svelte';

	let allModules: any[] = [];

	onMount(async () => {
		await appAxios.get('/module/all').then((res) => {
			allModules = res.data;
		});
	});
</script>

<svelte:head>
	<title>ESI QUIZ</title>
</svelte:head>

<Carousel />
<div class="divider text-2xl font-semibold">Modules</div>
<div class="grid my-4 gap-4 grid-cols-12">
	{#each allModules as moduleItem}
		<div class="md:col-span-4 col-span-12">
			<ModuleCard
				title={moduleItem.title}
				id={moduleItem._id}
				image={moduleItem.image}
				description={moduleItem.description}
			/>
		</div>
	{/each}
</div>
