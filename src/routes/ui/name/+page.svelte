<script lang="ts" context="module">
	import uiItems from '$lib/projects/ui.json';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
</script>

<script lang="ts">
	gsap.registerPlugin(ScrollTrigger);
	$: slug = $page.url.pathname;
	let currentProject:
		| { title: string; slug: string; image: string; description: string }
		| undefined;

	onMount(() => {
		let text = document.querySelectorAll('.animate-text');
		console.log('text', text);
		gsap.from(text, {
			scrollTrigger: {
				trigger: text,
				start: 'top 80%',
				end: 'bottom 20%',
				toggleActions: 'play none none none'
			},
			opacity: 0,
			y: 50,
			duration: 1
		});

		let projectItems = uiItems.uiItems;

		currentProject = projectItems.find((item) => slug.includes(item.slug));
	});
</script>

<svelte:head>
	<title>{currentProject?.title} | Jan de Munnik</title>
	<meta
		name="description"
		content="Jan de Munnik is a professional Graphic, UX & UI Designer offering creative and innovative design solutions. Explore my portfolio to see my work and get in touch for collaborations."
	/>
</svelte:head>

<div class="px-fluid-main-x pb-16 pt-8">
	<div class="animate-text">
		<img
			src={currentProject?.image}
			alt={currentProject?.title}
			class="mb-4 h-[40vh] w-full object-cover"
		/>
		<h1 class="text-fluid-heading-3xl font-bold text-black">{currentProject?.title}</h1>
		<p>{@html currentProject?.description}</p>
	</div>
</div>
