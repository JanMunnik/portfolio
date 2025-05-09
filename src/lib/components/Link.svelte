<script lang="ts">
	export { className as class };
	export let theme: 'yellow' | 'blue' = 'yellow';
	export let href = '';
	export let target: '_blank' | '_self' = '_self';

	let elementState: 'idle' | 'hover' | 'focus' | 'active' = 'idle';
	let className = '';
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<svelte:element
	this={href ? 'a' : 'button'}
	{target}
	{href}
	class="button-element relative z-0 flex h-12 w-4/5 items-center justify-center {className}"
	class:theme-yellow={theme === 'yellow'}
	class:theme-blue={theme === 'blue'}
	on:mousedown={() => (elementState = 'active')}
	on:mouseup={() => (elementState = 'idle')}
	on:mouseenter={() => (elementState = 'hover')}
	on:mouseleave={() => (elementState = 'idle')}
>
	<div class="button-skew absolute left-[5%] top-0 -z-10 h-full w-full -skew-x-12 bg-current"></div>
	<div
		class="button-bg-skew absolute left-[10%] top-0 -z-20 h-full w-full -skew-x-12"
		class:theme-yellow={theme === 'yellow'}
		class:theme-blue={theme === 'blue'}
		class:hover={elementState === 'hover'}
		class:focus={elementState === 'focus'}
		class:active={elementState === 'active'}
	></div>
	<div class="pl-[10%] text-white">
		<slot />
	</div>
</svelte:element>

<style lang="postcss">
	.button-element {
		@apply transition-colors duration-200 ease-in-out;

		&.theme-yellow {
			@apply bg-yellow-400 text-yellow-400;

			&:hover {
				@apply bg-yellow-100 text-yellow-100;
			}

			&:focus {
				@apply bg-yellow-100 text-yellow-100;
			}

			&:active {
				@apply bg-blue-400 text-blue-400;
			}
		}

		&.theme-blue {
			@apply bg-blue-800 text-blue-800;

			&:hover {
				@apply bg-blue-400 text-blue-400;
			}

			&:focus {
				@apply bg-blue-400 text-blue-400;
			}

			&:active {
				@apply bg-yellow-400 text-yellow-400;
			}
		}
	}

	.button-bg-skew {
		@apply transition-colors ease-in-out;

		&.theme-yellow {
			@apply bg-yellow-100 text-yellow-100;

			&.hover {
				@apply bg-yellow-800 text-yellow-800;
			}

			&.focus {
				@apply bg-yellow-800 text-yellow-800;
			}

			&.active {
				@apply bg-blue-400/50 text-blue-400/50;
			}
		}

		&.theme-blue {
			@apply bg-blue-400 text-blue-400;

			&.hover {
				@apply bg-blue-400/50 text-blue-400/50;
			}

			&.focus {
				@apply bg-blue-400/50 text-blue-400/50;
			}

			&.active {
				@apply bg-yellow-400/50 text-yellow-400/50;
			}
		}
	}
</style>
