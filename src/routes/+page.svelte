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
	<section
		class="relative flex h-[30vh] w-full flex-col justify-between px-fluid-main-x pb-4 pt-8 l:pt-12 xl:h-[50vh] xl:pt-16 2xl:pt-20 3xl:pt-24"
	>
		<img
			class="absolute left-0 top-0 h-full w-full object-cover"
			src="/images/profile.webp"
			alt="Jan de Munnik (Me) At work."
		/>
		<div class="absolute left-0 top-0 h-full w-full bg-white/30"></div>

		<h1 class="z-10 text-fluid-heading-3xl font-bold text-blue-100">Hey, I'm Jan!</h1>

		<div
			class="flex w-full justify-between gap-8 text-[14px] xl:w-[50%] xl:gap-12 2xl:gap-14 3xl:gap-16"
		>
			<Link class="w-full 2xl:w-[80%] 3xl:w-[70%]" theme="blue" href="/#work">See my work</Link>
			<Link class="w-full 2xl:w-[80%] 3xl:w-[70%]" href="/#contact">Contact</Link>
		</div>
	</section>

	<section class="bg-blue-100 px-fluid-main-x py-6">
		<ul
			class="flex justify-between text-center text-[0.75rem] l:py-2 l:text-[0.875rem] xl:py-4 xl:text-[1rem] 2xl:py-6 2xl:text-[1.25rem] 3xl:py-8 3xl:text-[1.5rem]"
		>
			<li class="xl:list-inside xl:list-disc">Graphic Design</li>
			<li class="font-bold xl:hidden">·</li>
			<li class="xl:list-inside xl:list-disc">UX Design</li>
			<li class="font-bold xl:hidden">·</li>
			<li class="xl:list-inside xl:list-disc">UI Design</li>
		</ul>
	</section>

	<section
		id="work"
		class="swiper-section flex flex-nowrap justify-center gap-10 overflow-x-scroll py-12 xl:min-h-screen"
	>
		<swiper-container
			class="mySwiper w-[125vw] xl:w-screen"
			slides-per-view="2"
			space-between="60"
			centered-slides="true"
			initial-slide="1"
		>
			<swiper-slide>
				<WorkCard
					class="h-[40vh] w-full shrink-0 xl:h-full"
					imageSrc="https://images.unsplash.com/photo-1626785774573-4b799315345d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
					href="/graphic"
					imageAlt="Graphic Design">Graphic Design</WorkCard
				>
			</swiper-slide>

			<swiper-slide>
				<WorkCard
					class="h-[40vh] w-full shrink-0 xl:h-full"
					imageSrc="https://miro.medium.com/v2/resize:fit:1400/1*JWStOGfx3DvZDDphuMNvgQ.jpeg"
					imageAlt="UX Design"
					href="/ux">UX</WorkCard
				>
			</swiper-slide>

			<swiper-slide>
				<WorkCard
					class="h-[40vh] w-full shrink-0 xl:h-full"
					imageSrc="https://view.subpage.app/app/company/C532b8873cc5442e2b1f2265b77a7d7dc/domain/MTiT0jFlGh/page/M6K4TirmGh/glossary/M36e5669dfd4b52477c65571a1479acd81676987587657/file/Mb4de6e716cf9eb420a1f39b7a0b320481707989448555.jpeg"
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
