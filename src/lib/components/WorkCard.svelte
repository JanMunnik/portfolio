<script lang="ts" context="module">
	import Link from './Link.svelte';
</script>

<script lang="ts">
	export { className as class };
	export let imageSrc = '';
	export let imageAlt = '';
	export let href = '';
	export let buttonStyle = '';
	export let buttonTheme: 'blue' | 'yellow' = 'blue';

	let className = '';
</script>

<article class="relative flex items-end bg-white px-fluid-main-x py-8 shadow-lg {className}">
	{#if imageSrc}
		<img class="absolute left-0 top-0 h-full w-full object-cover" src={imageSrc} alt={imageAlt} />
	{/if}
	<Link
		{href}
		theme={buttonTheme}
		class="z-10 block w-full text-center font-semibold {buttonStyle}"
	>
		<slot />
	</Link>
</article>

<style lang="postcss">
	article::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgb(5 0 219 / 22%);
	}
</style>
