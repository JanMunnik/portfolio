<script lang="ts" module>
	import Lenis from 'lenis';
	import '../app.css';
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	import Logo from '$lib/assets/icons/logo.svg?component';
	import Button from '$lib/components/Button.svelte';
</script>

<script lang="ts">
	let { children } = $props();
	let menuOpen = $state(false);

	onMount(() => {
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
	});
</script>

<header class="fixed z-50 flex w-full justify-center bg-blue-100 px-fluid-main-x py-6">
	<a
		href="/"
		class="hover: left-0 ml-auto mr-auto h-6 w-6 text-grey-400 transition-colors hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-100 active:duration-100"
	>
		<Logo />
	</a>

	<button
		onclick={() => {
			menuOpen = !menuOpen;
			console.log(menuOpen);
		}}
		aria-label="menu-button"
		type="button"
		class="menu-button absolute right-fluid-main-x z-50 ml-auto flex h-6 w-6 flex-col justify-center gap-1.5"
	>
		<span class="hamburger-line {menuOpen ? 'absolute rotate-45' : ' relative rotate-0'}"></span>
		<span
			class="hamburger-line {menuOpen ? 'absolute hidden opacity-0' : 'relative block opacity-100'}"
		></span>
		<span class="hamburger-line {menuOpen ? '-rotate-45' : 'rotate-0'}"></span>
	</button>

	<nav
		class="fixed left-0 top-0 z-40 h-screen w-screen overflow-hidden {menuOpen
			? 'translate-x-0'
			: 'translate-x-full'} bg-blue-100 px-fluid-main-x py-32 transition-transform duration-300"
	>
		<ul class="flex flex-col gap-4 text-fluid-m">
			<li>
				<a
					class="transition-colors hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-100 active:duration-100"
					onclick={() => (menuOpen = false)}
					href="/">Home</a
				>
			</li>
			<li>
				<a
					class="transition-colors hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-100 active:duration-100"
					onclick={() => (menuOpen = false)}
					href="/about">About me</a
				>
			</li>
			<li>
				<a
					class="transition-colors hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-100 active:duration-100"
					onclick={() => (menuOpen = false)}
					href="/ui">UI</a
				>
			</li>
			<li>
				<a
					class="transition-colors hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-100 active:duration-100"
					onclick={() => (menuOpen = false)}
					href="/ux">UX</a
				>
			</li>
			<li>
				<a
					class="transition-colors hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-100 active:duration-100"
					onclick={() => (menuOpen = false)}
					href="/graphic">Graphic design</a
				>
			</li>
			<li>
				<a
					class="transition-colors hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-100 active:duration-100"
					onclick={() => (menuOpen = false)}
					href="/contact">Contact</a
				>
			</li>
		</ul>
	</nav>
</header>

<main class="min-h-screen overflow-x-hidden pt-24">
	{@render children()}
</main>

<footer class="bg-blue-100 px-fluid-main-x py-6">
	<div>
		<h2 class="font-bold uppercase">Contact</h2>
		<div>
			<!-- Icon -->
			<!-- Icon -->
		</div>
	</div>

	<form action="/" method="POST">
		<fieldset class="flex flex-col gap-2 text-fluid-m text-black">
			<label class="text-white" for="email">E-mail</label>
			<input placeholder="Type here" type="email" name="email" id="email" />
		</fieldset>
		<fieldset class="flex flex-col gap-2 text-fluid-m text-black">
			<label class="text-white" for="message">Message</label>
			<textarea placeholder="Type here" name="message" id="message"></textarea>
		</fieldset>

		<Button element="input">Send message</Button>
	</form>
</footer>

<style lang="postcss">
	.menu-button {
		&:hover {
			.hamburger-line {
				@apply bg-yellow-400;
			}
		}

		&:focus {
			.hamburger-line {
				@apply bg-yellow-400;
			}
		}

		&:active {
			.hamburger-line {
				@apply bg-yellow-100;
			}
		}
	}

	.hamburger-line {
		@apply block h-0.5 w-full bg-grey-400 transition-all active:duration-100;
	}
</style>
