<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<div class="h-screen">
	<section class="px-fluid-main-x">
		<Button theme="blue" href="/#work">See my work</Button>
		<Button href="/contact">Contact</Button>
	</section>
	<section id="work">
		<ul>
			<li>
				<img src="" alt="my UI work" />
				<Button theme="blue" href="/ui">UI</Button>
			</li>
			<li>
				<img src="" alt="my UX work" />
				<Button href="/ux">UX</Button>
			</li>
			<li>
				<img src="" alt="my graphic design work" />
				<Button href="/graphic">Graphic Design</Button>
			</li>
		</ul>
	</section>
</div>
