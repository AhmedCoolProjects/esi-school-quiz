<script lang="ts">
	import { CarouselDataItems } from '$lib/constants';
	var currentIndex: number = 0;
	function updateIndex(index: number) {
		if (index < 0) currentIndex = CarouselDataItems.length - 1;
		else if (index >= CarouselDataItems.length) currentIndex = 0;
		else currentIndex = index;
	}
	setInterval(() => {
		updateIndex(currentIndex + 1);
	}, 2500);
</script>

<div class="w-full relative overflow-hidden my-5">
	<!-- left button -->
	<button
		on:click={() => updateIndex(currentIndex - 1)}
		class="absolute top-1/2	-translate-y-1/2 left-3 z-10"
	>
		<img
			class="opacity-40 hover:opacity-100 w-10 h-10"
			src="svgs/left-arrow.svg"
			alt="left arrow"
		/>
	</button>
	<!-- right button -->
	<button
		on:click={() => updateIndex(currentIndex + 1)}
		class="absolute top-1/2	-translate-y-1/2 right-3 z-10"
	>
		<img
			class="w-10 h-10 opacity-40 hover:opacity-100"
			src="svgs/right-arrow.svg"
			alt="left arrow"
		/>
	</button>

	<!-- inner -->
	<div
		class="whitespace-nowrap"
		style={`transform: translateX(-${currentIndex * 100}%) ;
    transition: transform 0.5s ease-in-out;`}
	>
		{#each CarouselDataItems as item}
			<div
				class="w-full
  inline-flex items-center justify-around h-[250px] md:h-[450px]
  flex-row 
  "
			>
				<div class="relative w-1/2 ml-8 whitespace-normal ">
					<h1 class="text-md sm:text-3xl font-semibold mb-6">{item.title}</h1>
					<h1 class="pl-3 text-xs sm:text-base">{item.description}</h1>
				</div>
				<img class="w-1/3" src={item.image} alt={item.title} />
			</div>
		{/each}
	</div>
</div>
