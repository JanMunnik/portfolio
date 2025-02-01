<script lang="ts" context="module">
	import Link from '$lib/components/Link.svelte';
	import WorkCard from '$lib/components/WorkCard.svelte';
	import { register } from 'swiper/element';

	register();
</script>

<script lang="ts">
</script>

<svelte:head>
	<title>Jan de Munnik | Graphic, UX & UI Designer</title>
	<meta
		name="description"
		content="Jan de Munnik is a professional Graphic, UX & UI Designer offering creative and innovative design solutions. Explore my portfolio to see my work and get in touch for collaborations."
	/>
</svelte:head>

<div>
	<section class="relative flex h-[25vh] w-full flex-col justify-between px-fluid-main-x pb-4 pt-8">
		<img
			class="absolute left-0 top-0 h-full w-full object-cover"
			src="/images/profilePic.png"
			alt="Jan de Munnik (Me) At work."
		/>
		<div class="absolute left-0 top-0 h-full w-full bg-white/30"></div>

		<h1 class="z-10 text-fluid-heading-3xl font-bold text-blue-100">Hey, I'm Jan!</h1>

		<div class="flex w-full justify-between gap-8 text-[14px]">
			<Link class="w-full" theme="blue" href="/#work">See my work</Link>
			<Link class="w-full" href="/#contact">Contact</Link>
		</div>
	</section>

	<section class="bg-blue-100 px-fluid-main-x py-6">
		<ul class="flex justify-between text-center text-[12px]">
			<li class="xl:list-inside xl:list-disc">Graphic Design</li>
			<li class="font-bold xl:hidden">·</li>
			<li class="xl:list-inside xl:list-disc">UX Design</li>
			<li class="font-bold xl:hidden">·</li>
			<li class="xl:list-inside xl:list-disc">UI Design</li>
		</ul>
	</section>

	<section
		id="work"
		class="swiper-section flex flex-nowrap justify-center gap-10 overflow-x-scroll py-12"
	>
		<swiper-container
			class="mySwiper w-[125vw]"
			slides-per-view="2"
			space-between="60"
			centered-slides="true"
			initial-slide="1"
		>
			<swiper-slide>
				<WorkCard
					class="h-[40vh] w-full shrink-0"
					imageSrc="/images/profilePic.png"
					href="/graphic"
					imageAlt="Graphic Design">Graphic Design</WorkCard
				>
			</swiper-slide>

			<swiper-slide>
				<WorkCard
					class="h-[40vh] w-full shrink-0"
					imageSrc="/images/profilePic.png"
					imageAlt="UX Design"
					href="/ux">UX</WorkCard
				>
			</swiper-slide>

			<swiper-slide>
				<WorkCard
					class="h-[40vh] w-full shrink-0"
					imageSrc="/images/profilePic.png"
					imageAlt="UI Design"
					href="/ui">UI</WorkCard
				>
			</swiper-slide>
		</swiper-container>
	</section>
</div>

<style lang="postcss">
	.swiper-section {
		&::-webkit-scrollbar {
			display: none;
		}
	}
</style>
