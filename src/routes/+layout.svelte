<script lang="ts" module>
	import Lenis from 'lenis';
	import '../app.css';
	import gsap from 'gsap';
</script>

<script lang="ts">
	let { children } = $props();

	const lenis = new Lenis();

	// IF YOU WANNA DO SOMETHING WITH SCROLL UP OR DOWN USE COMMENTED OUT CODE

	// lenis.on('scroll', (e) => {
	// 	console.log(e);
	// });

	lenis.on('scroll', ScrollTrigger.update);

	gsap.ticker.add((time) => {
		lenis.raf(time * 1000);
	});

	gsap.ticker.lagSmoothing(0);
</script>

<header></header>

<main class="min-h-screen overflow-x-hidden">
	{@render children()}
</main>

<footer></footer>
