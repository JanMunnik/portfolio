<script lang="ts">
	export { className as class };
	export let element: 'a' | 'input' = 'a';
	export let theme: 'yellow' | 'blue' = 'yellow';
	export let href = '';

	let className = '';
</script>

<svelte:element
	this={element}
	type={element === 'input' ? 'submit' : undefined}
	class="button-main relative overflow-hidden px-4 py-2 text-fluid-m font-bold {theme === 'yellow'
		? 'yellow-theme'
		: 'blue-theme'} {className}"
	{href}
>
	<slot />
</svelte:element>

<style lang="postcss">
	.button-main {
		&::before {
			@apply absolute left-4 top-0 -z-10 h-full w-full -skew-x-12 content-[''];
		}

		&::after {
			@apply absolute left-2 top-0 -z-10 h-full w-full -skew-x-12 content-[''];
		}

		&.yellow-theme {
			@apply bg-yellow-400 text-black;

			&::before {
				@apply bg-yellow-100;
			}

			&::after {
				@apply bg-yellow-400;
			}
		}

		&.blue-theme {
			@apply bg-blue-800 text-black;

			&::before {
				@apply bg-blue-400;
			}

			&::after {
				@apply bg-blue-800;
			}
		}
	}
</style>
