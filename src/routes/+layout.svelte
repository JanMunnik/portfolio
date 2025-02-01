<script lang="ts" module>
	import Lenis from 'lenis';
	import '../app.css';
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { page } from '$app/stores';

	import Button from '$lib/components/Button.svelte';

	import Logo from '$lib/assets/icons/logo.svg?component';
	import MailIcon from '$lib/assets/icons/mail-icon.svg?component';
	import LinkedInIcon from '$lib/assets/icons/linkedin-icon.svg?component';
	import Link from '$lib/components/Link.svelte';
</script>

<script lang="ts">
	let { children } = $props();
	let menuOpen = $state(false);
	let date = new Date();
	let currentYear = date.getFullYear();
	let footer: HTMLElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		const lenis = new Lenis();
		let linkElement = document.querySelector('.link-component');

		// IF YOU WANNA DO SOMETHING WITH SCROLL UP OR DOWN USE COMMENTED OUT CODE

		// lenis.on('scroll', (e) => {
		// 	if (e.direction === -1) {
		// 		console.log('up');
		// 	} else {
		// 		console.log('down');
		// 	}
		// });

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);

		if (linkElement && footer) {
			gsap.to(linkElement, {
				scrollTrigger: {
					trigger: footer,
					start: 'top bottom',
					end: 'bottom bottom',
					onEnter: () => {
						if (linkElement) {
							gsap.to(linkElement, { opacity: 0, y: 10, duration: 0.5 });
						}
					},
					onLeaveBack: () => {
						if (linkElement) {
							gsap.to(linkElement, { opacity: 1, y: 0, duration: 0.5 });
						}
					}
				}
			});
		}
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
			: 'translate-x-full'} bg-blue-100 px-fluid-main-x py-48 transition-transform duration-300"
	>
		<ul class="flex flex-col gap-8 text-fluid-heading-3xl">
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
					href="/#work">My expertise</a
				>
			</li>
			<li>
				<a
					class="transition-colors hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-100 active:duration-100"
					onclick={() => (menuOpen = false)}
					href="/#contact">Contact</a
				>
			</li>
		</ul>
	</nav>
</header>

<main class="relative overflow-x-hidden pt-[8vh]">
	<Link
		class="link-component !fixed bottom-fluid-main-x right-fluid-main-x z-30 w-[50%] transition-opacity duration-300"
		href={`${$page.url.pathname}#contact`}
	>
		Shoot me a message!
	</Link>

	{@render children()}
</main>

<footer bind:this={footer} class="bg-blue-100 px-fluid-main-x py-8">
	<div class="flex gap-6">
		<h2 class="uppercase">Contact</h2>
		<div class="flex items-center gap-4">
			<a
				class="contact-icon"
				href="https://www.linkedin.com/in/jan-de-munnik-514689182/"
				target="_blank"
			>
				<LinkedInIcon class="h-5" />
			</a>
			<a class="contact-icon" href="mailto:jandemunnik101@gmail.com">
				<MailIcon class="h-5" />
			</a>
		</div>
	</div>

	<form
		id="contact"
		action="https://formspree.io/f/movjwwld"
		method="POST"
		class="mt-6 flex flex-col gap-4"
	>
		<div class="flex flex-col gap-2 text-fluid-m text-black">
			<label class="text-white" for="name">Name</label>
			<input
				class="py-1 pl-2 text-[14px]"
				placeholder="Your name"
				type="name"
				name="name"
				id="name"
				autocomplete="name"
				required
			/>
		</div>
		<div class="flex flex-col gap-2 text-fluid-m text-black">
			<label class="text-white" for="email">E-mail</label>
			<input
				class="py-1 pl-2 text-[14px]"
				placeholder="Type here"
				type="email"
				name="email"
				id="email"
				autocomplete="email"
				required
			/>
		</div>
		<div class="flex flex-col gap-2 text-fluid-m text-black">
			<label class="text-white" for="message">Message</label>
			<textarea
				class="h-[15vh] py-1 pl-2 text-[14px]"
				placeholder="Type here"
				name="message"
				id="message"
				required
			></textarea>
		</div>

		<Button class="mt-6 w-[50%]">Send message</Button>
	</form>

	<p class="mt-10 text-[14px]">
		<span class="block">Hey there!</span>
		What nice to see that you've arrived at my contact form! If you have any questions, comments or just
		want to say start a conversation, feel free to message me here!
	</p>

	<p class="mt-4 text-[14px]">
		You can also find me on LinkedIn through the icon above or send me an email through the mail
		icon above!
	</p>

	<p class="mt-16 text-center text-[12px]">© {currentYear} Jan de Munnik</p>
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

	.contact-icon {
		@apply text-blue-800;

		&:hover {
			@apply text-yellow-400;
		}

		&:focus {
			@apply text-yellow-400;
		}

		&:active {
			@apply text-yellow-100;
		}
	}
</style>
