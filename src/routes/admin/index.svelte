<script lang="ts">
	import AdminDashboardCard from '$lib/components/cards/admin/adminDashboardCard.svelte';
	import { adminDashboardCardData } from '$lib/constants';
</script>

<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<section class="grid grid-cols-12 py-4 gap-4 w-full">
	{#each adminDashboardCardData as adminCard}
		<div class="col-span-12 md:col-span-4">
			<AdminDashboardCard {...adminCard} />
		</div>
	{/each}
</section>
