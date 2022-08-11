<script lang="ts">
	const PAGES_STEP: number = 5;
	import { dummyData } from '$lib/constants';
	const length: number = dummyData.length;
	var actualIndex: number = 0;
	const totalPaginationCells: number = length / PAGES_STEP;
</script>

<svelte:head>
	<title>Admin Dashboard | Module</title>
</svelte:head>

<header class="my-4">
	<button class="btn"> Add </button>
</header>

<section>
	<div class="overflow-x-auto">
		<table class="table table-compact w-full">
			<thead>
				<tr>
					<th />
					<th>Title</th>
					<th>Image</th>
					<th>Slug</th>
					<th>Description</th>
					<th>Semester</th>
					<th>Quiz Number</th>
					<th>Created At</th>
					<th>Updated At</th>
				</tr>
			</thead>
			<tbody>
				{#each dummyData as dummyDataItem, index_}
					<tr>
						<th>{index_ + 1}</th>
						<td>
							{dummyDataItem.title}
						</td>
						<td>
							{dummyDataItem.image}
						</td>
						<td>
							{dummyDataItem.slug}
						</td>
						<td>{dummyDataItem.description}</td>
						<td>{dummyDataItem.semester}</td>
						<td>{dummyDataItem.quiz_number}</td>
						<td>{dummyDataItem.created_at}</td>
						<td>{dummyDataItem.updated_at}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<div class="items-center mt-4 flex flex-col">
		<div class="btn-group">
			<button class="btn">1</button>
			<button class="btn">2</button>
			<button class="btn btn-disabled">...</button>
			<button class="btn">99</button>
			<button class="btn">100</button>
		</div>
	</div>
</section>
