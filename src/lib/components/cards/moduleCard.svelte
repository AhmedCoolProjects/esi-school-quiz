<script lang="ts">
	export let title: string, description: string, id: string;
</script>

<div class="card card-compact w-full bg-base-100 shadow-xl">
	<figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" class="w-full" /></figure>
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p>{description}</p>
		<div class="card-actions justify-end">
			<a href="/module/{id}">
				<button class="btn btn-primary">Check Quiz</button>
			</a>
		</div>
	</div>
</div>
