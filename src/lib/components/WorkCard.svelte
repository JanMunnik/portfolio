<script lang="ts" context="module">
	import Link from './Link.svelte';
</script>

<script lang="ts">
	export { className as class };
	export let imageSrc = '';
	export let imageAlt = '';
	export let href = '';

	let className = '';
</script>

<article class="relative flex items-end bg-white px-fluid-main-x py-8 shadow-lg {className}">
	<img class="absolute left-0 top-0 h-full w-full object-cover" src={imageSrc} alt={imageAlt} />
	<Link {href} theme="blue" class="block w-full text-center font-semibold">
		<slot />
	</Link>
</article>
