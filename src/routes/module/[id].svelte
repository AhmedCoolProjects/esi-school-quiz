<script lang="ts">
	import { page } from '$app/stores';
	import { appAxios } from '$lib/axios';
	import QuestionAnswerCard from '$lib/components/cards/QuestionAnswerCard.svelte';
	import { onMount } from 'svelte';
	const id = $page.params.id;
	let moduleItem: any = {};

	onMount(async () => {
		await appAxios.get(`/module/id${id}`).then((res) => {
			moduleItem = res.data;
		});
	});
</script>

<svelte:head>
	<title>{moduleItem.title ? moduleItem.title : 'Loading...'}</title>
</svelte:head>

<!-- header -->
{#if moduleItem.title}
	<header class="flex mb-3 flex-row items-center">
		<img src={moduleItem.image} alt={moduleItem.title} class="w-56" />
		<div>
			<h1 class="text-3xl mb-3 font-bold">{moduleItem.title}</h1>
			<h1>Module {moduleItem.description}</h1>
		</div>
	</header>
{/if}
<!-- quiz section -->
{#if moduleItem.quiz}
	<section>
		<div class="divider text-2xl font-semibold">Quiz</div>
		<div class="grid my-4 gap-4 grid-cols-12">
			{#each moduleItem.quiz as moduleItemQuiz}
				<div class="md:col-span-4 col-span-12">
					<QuestionAnswerCard
						moduleId={id}
						id={moduleItemQuiz._id}
						questionNumber={moduleItemQuiz.questions.length}
						title={moduleItemQuiz.title}
						description={moduleItemQuiz.description}
					/>
				</div>
			{/each}
		</div>
	</section>
{:else}
	<h1>Loding</h1>
{/if}
