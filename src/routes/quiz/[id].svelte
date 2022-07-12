<script lang="ts">
	import { page } from '$app/stores';
	import { appAxios } from '$lib/axios';
	import { ScoreCard } from '$lib/components';
	import QuestionAnswersCard from '$lib/components/cards/QuestionAnswersCard.svelte';
	import {
		currentQuestions,
		indexQuestion,
		questionWithCorrectAnswers,
		userQuestionsAnswers
	} from '$lib/store';
	import { onMount } from 'svelte';

	const id = $page.params.id;
	const moduleId = id.split('-')[0];
	const quizId = id.split('-')[1];
	let quizItem: any = {};

	onMount(async () => {
		$currentQuestions = [];
		$userQuestionsAnswers = [];
		$indexQuestion = 0;
		await appAxios.get(`/quiz/moduleid${moduleId}/quizId${quizId}`).then((res) => {
			quizItem = res.data;
			$currentQuestions = res.data.questions.sort(() => Math.random() - 0.5);
			$userQuestionsAnswers = $currentQuestions.map((question) => {
				return {
					_id: question._id,
					question: question.question,
					answers: []
				};
			});

			$questionWithCorrectAnswers = $currentQuestions.map((question) => {
				return {
					question: question.question,
					_id: question._id,
					answers: question.answers.filter((answer) => answer.isCorrect)
				};
			});
		});
	});
</script>

<svelte:head>
	<title>{quizItem.title ? quizItem.title : 'Loading...'}</title>
</svelte:head>

<div class="items-center justify-center w-full flex flex-col">
	{#if $currentQuestions}
		<section class="md:w-1/2 w-full">
			{#if $indexQuestion >= $currentQuestions.length && $indexQuestion > 0}
				<ScoreCard {moduleId} />

				{#each $currentQuestions as questionItem, questionItemIndex_}
					<QuestionAnswersCard
						showResults={true}
						index_={questionItemIndex_}
						question={questionItem.question}
						answers={questionItem.answers}
					/>
				{/each}
			{:else}
				{#each $currentQuestions as question, index_}
					{#if index_ == $indexQuestion}
						<QuestionAnswersCard
							showResults={false}
							{index_}
							question={question.question}
							answers={question.answers}
						/>
					{/if}
				{/each}
			{/if}
		</section>
	{/if}
</div>
