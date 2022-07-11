<script lang="ts">
	import { page } from '$app/stores';
	import { appAxios } from '$lib/axios';
	import { onMount } from 'svelte';
	const id = $page.params.id;
	const moduleId = id.split('-')[0];
	const quizId = id.split('-')[1];
	let quizItem: any = {};

	onMount(async () => {
		await appAxios.get(`/quiz/moduleid${moduleId}/quizId${quizId}`).then((res) => {
			quizItem = res.data;
		});
	});
</script>

<svelte:head>
	<title>{quizItem.title ? quizItem.title : 'Loading...'}</title>
</svelte:head>

{#if quizItem.questions}
	<section>
		{#each quizItem.questions as question}
			<h1>
				{question.question}
			</h1>
			{#each question.answers as answer}
				<h1>
					{answer.answer}
					{answer.isCorrect}
				</h1>
			{/each}
		{/each}
	</section>
{/if}
