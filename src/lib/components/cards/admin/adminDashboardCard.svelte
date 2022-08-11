<script lang="ts">
	export let title: string, description: string, image: string, link: string;
</script>

<div class="card flex-row card-compact h-full w-full bg-base-100 shadow-xl">
	<figure><img src={image} alt={title} class="w-28" /></figure>
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p>{description}</p>
		<div class="card-actions justify-end">
			<a href={link}>
				<button class="btn btn-primary"> View </button>
			</a>
		</div>
	</div>
</div>
