<script lang="ts">
	export let title: string,
		questionNumber: number,
		moduleId: string,
		id: string,
		description: string;
</script>

<div class="card w-full  bg-base-100 shadow-xl">
	<div class="card-body">
		<div class="flex flex-row items-center justify-between">
			<h2 class="card-title">{title}</h2>
			<span class="badge">{questionNumber} questions</span>
		</div>

		<p>{description}</p>

		<div class="card-actions justify-end">
			<a href={`/quiz/${moduleId}-${id}`}>
				<button class="btn btn-primary">Start Quiz</button>
			</a>
		</div>
	</div>
</div>
