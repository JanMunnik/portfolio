<script lang="ts" module>
	import { PortableText } from '@portabletext/svelte';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import type { Project } from '$lib/types/ProjectType';
</script>

<script lang="ts">
	const project: Project = page.data.project;
	let fullImage = $state(false);
	let headerImage: HTMLImageElement;

		$effect(() => {
		if(fullImage) {
			document.addEventListener('keydown', (e) => {
				if (e.key === 'Escape') {
					fullImage = false;
				}
			});
			gsap.to(headerImage, {
				height: 'auto',
				duration: 0.5,
				ease: 'power2.inOut',
			});
		} else {
			gsap.to(headerImage, {
				height: '40vh',
				duration: 0.5,
				ease: 'power2.inOut'
			});
		}
	})
	
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
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
	});
</script>

<svelte:head>
	<title>{project.title} | Jan de Munnik</title>
	<meta
		name="description"
		content="Jan de Munnik is a professional Graphic, UX & UI Designer offering creative and innovative design solutions. Explore my portfolio to see my work and get in touch for collaborations."
	/>
</svelte:head>

<div class="px-fluid-main-x pb-16 pt-8">
	<section class="animate-text">
		<button class="w-full" onclick={() => {
					fullImage = !fullImage
				}}>
			<img
			bind:this={headerImage}
				src={project?.image?.asset._ref}
				alt={project.title}
				class="mb-4 h-[40vh] w-full object-cover"
				
			/>
		</button>
		<h1 class="mb-8 text-fluid-heading-3xl font-bold uppercase text-white">{project.title}</h1>

		<div
			class="portableText text-blue-100 prose-headings:mb-4 prose-headings:mt-8 prose-headings:text-2xl prose-headings:font-bold"
		>
			<PortableText value={project.body} components={{}} />
		</div>
	</section>
</div>
