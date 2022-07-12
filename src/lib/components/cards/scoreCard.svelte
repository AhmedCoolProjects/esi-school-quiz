<script lang="ts">
	import { indexQuestion, questionWithCorrectAnswers, userQuestionsAnswers } from '$lib/store';

	export let moduleId: string;
	const refreshPage = () => {
		window.location.reload();
		indexQuestion.set(0);
	};
	let score = 0;
	let listUserAnswers: any[] = [];
	$userQuestionsAnswers.forEach((userQuestion) => {
		listUserAnswers.push(
			new Set(
				userQuestion.answers.map((answer) => {
					return answer.answer;
				})
			)
		);
	});
	let correctAnswers: any[] = [];
	$questionWithCorrectAnswers.forEach((question) => {
		correctAnswers.push(
			new Set(
				question.answers.map((answer) => {
					return answer.answer;
				})
			)
		);
	});
	for (let i = 0; i < listUserAnswers.length; i++) {
		if (correctAnswers[i].size === listUserAnswers[i].size) {
			if (Array.from(correctAnswers[i]).every((x) => listUserAnswers[i].has(x))) {
				score++;
			}
		}
	}
	let percentage = Math.round((score / correctAnswers.length) * 100);
</script>

<div class="stat space-y-3">
	<div class="stat-figure text-secondary">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="inline-block w-8 h-8 stroke-current"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M13 10V3L4 14h7v7l9-11h-7z"
			/></svg
		>
	</div>
	<div class="stat-title">Your Score</div>
	<div class="stat-value text-secondary">
		{percentage}
		%
	</div>
	<div class="stat-desc">
		{score}
		/{$userQuestionsAnswers.length}
	</div>
</div>
<div class="flex w-full mb-3 flex-row justify-between">
	<a href={`/module/${moduleId}`}>
		<button class="btn bg-transparent border-0">
			<img class="w-10 h-10" src="/pngs/back.png" alt="refresh" />
		</button></a
	>
	<button on:click={refreshPage} class="btn bg-transparent border-0">
		<img class="w-10 h-10" src="/pngs/refresh.png" alt="refresh" />
	</button>
</div>
