<script lang="ts">
	import { indexQuestion, userQuestionsAnswers } from '$lib/store';

	export let showResults: boolean;
	export let index_: number, question: string, answers: { answer: string; isCorrect: boolean }[];
	answers.sort(() => Math.random() - 0.5);

	let answersIndexes: number[] = Array.from({ length: answers.length }, (_, i) => 0);
	const incrementIndexQuestion = () => {
		$indexQuestion++;
	};

	const selectAnswer = (
		answerItem: { answer: string; isCorrect: boolean },
		answerIndex: number
	) => {
		$userQuestionsAnswers[index_].answers.push(answerItem);
		answersIndexes[answerIndex] = 1;
		console.log($userQuestionsAnswers);
	};
	const unSelectAnswer = (
		answerItem: { answer: string; isCorrect: boolean },
		answerIndex: number
	) => {
		$userQuestionsAnswers[index_].answers = $userQuestionsAnswers[index_].answers.filter(
			(answer) => answer.answer !== answerItem.answer
		);
		answersIndexes[answerIndex] = 0;
		console.log($userQuestionsAnswers);
	};
</script>

{#if showResults}
	<div class="card w-full bg-base-100 shadow-xl">
		<div class="card-body">
			<!-- question -->
			<div class="flex flex-row mb-4 items-center justify-between">
				<h2 class="card-title">
					{index_ + 1}.
					{question}
				</h2>
			</div>
			<!-- answers -->
			{#each answers as answer, answerIndex}
				<button
					class={`btn
			${
				$userQuestionsAnswers[index_].answers.includes(answer)
					? $userQuestionsAnswers[index_].answers.find(
							(answerFound) => answerFound.answer === answer.answer
					  )?.isCorrect
						? 'border-green-500'
						: 'border-red-500'
					: ''
			}
			border-[0.5px]
			
			p-4 h-fit text-lg justify-between items-start font-normal lowercase  text-left`}
				>
					{answer.answer}
					{#if answer.isCorrect}
						<span>
							<img src="/pngs/correct.png" alt="correct answer" class="h-8 w-8" />
						</span>
					{/if}
				</button>
			{/each}
		</div>
	</div>
{:else}
	<div class="card w-full  bg-base-100 shadow-xl">
		<div class="card-body">
			<!-- question -->
			<div class="flex flex-row mb-4 items-center justify-between">
				<h2 class="card-title">
					{index_ + 1}.
					{question}
				</h2>
			</div>
			<!-- answers -->
			{#each answers as answer, answerIndex}
				<button
					on:click={() => {
						if (answersIndexes[answerIndex] == 1) {
							unSelectAnswer(answer, answerIndex);
						} else {
							selectAnswer(answer, answerIndex);
						}
					}}
					class={`btn border-[0.5px] ${
						answersIndexes[answerIndex] == 1 ? 'border-purple-500' : ''
					} p-4 h-fit text-lg justify-between items-start font-normal lowercase  text-left`}
				>
					{answer.answer}
				</button>
			{/each}
			<button
				disabled={!answersIndexes.includes(1)}
				on:click={incrementIndexQuestion}
				class="btn btn-outline btn-primary w-fit self-end mt-4">Next</button
			>
		</div>
	</div>
{/if}
