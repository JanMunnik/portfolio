<script lang="ts" context="module">
	import WorkCard from '$lib/components/WorkCard.svelte';
	import graphicItems from '$lib/projects/graphic.json';
</script>

<script lang="ts">
	let projectItems = graphicItems.graphicItems;
</script>

<svelte:head>
	<title>Graphic Design | Jan de Munnik</title>
	<meta
		name="description"
		content="Jan de Munnik is a professional Graphic, UX & UI Designer offering creative and innovative design solutions. Explore my portfolio to see my work and get in touch for collaborations."
	/>
</svelte:head>

<div class="px-fluid-main-x pb-16 pt-8">
	<h1 class="mb-6 text-fluid-heading-3xl font-bold uppercase text-blue-100">Graphic</h1>
	<section class="flex flex-col items-center gap-8">
		{#each projectItems as item}
			<WorkCard
				imageSrc={item.image}
				imageAlt={item.title}
				class="flex h-[25vh] w-full items-end justify-center px-0 py-4"
				href={item.slug}
				buttonStyle="w-1/2"
			>
				{item.title}
			</WorkCard>
		{/each}
	</section>
</div>
