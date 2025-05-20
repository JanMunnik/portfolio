<script lang="ts" context="module">
	import { page } from '$app/state';
	import WorkCard from '$lib/components/WorkCard.svelte';
	import graphicItems from '$lib/projects/graphic.json';
	import type { Project } from '$lib/types/ProjectType';
</script>

<script lang="ts">
	const projects: Project[] = page.data.projects;
</script>

<svelte:head>
	<title>UX | Jan de Munnik</title>
	<meta
		name="description"
		content="Jan de Munnik is a professional Graphic, UX & UI Designer offering creative and innovative design solutions. Explore my portfolio to see my work and get in touch for collaborations."
	/>
</svelte:head>

<div class="min-h-screen px-fluid-main-x pb-16 pt-8 xl:pt-32 3xl:pt-48">
	<h1 class="mb-6 text-fluid-heading-3xl font-bold uppercase text-blue-100">UX</h1>
	<section class="grid grid-cols-1 items-center gap-8 l:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
		{#each projects as project}
			<WorkCard
				imageSrc={project.image?.asset._ref}
				imageAlt={project.title}
				class="flex h-[25vh] w-full items-end justify-center px-0 py-4"
				href={project.slug.current}
				buttonStyle="w-1/2"
			>
				{project.title}
			</WorkCard>
		{/each}
	</section>
</div>
