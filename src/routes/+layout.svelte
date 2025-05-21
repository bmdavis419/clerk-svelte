<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div>
	<nav>
		<a href="/">Home</a>
		<a href="/nav/first">First</a>
		<a href="/nav/second">Second</a>
	</nav>
	{@render children()}
</div>
