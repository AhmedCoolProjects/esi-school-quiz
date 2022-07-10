<script>
	import Footer from '$lib/components/layout/footer.svelte';
	import Navbar from '$lib/components/layout/navbar.svelte';
	import '../app.css';
</script>

<Navbar />
<div class="px-6">
	<slot />
</div>
<Footer />
