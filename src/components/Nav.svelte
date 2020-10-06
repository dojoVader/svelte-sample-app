<script>
	export let pageTitle;
</script>

<style>
	.title {
		border-bottom: 1px solid rgba(255, 62, 0, 0.1);
		font-weight: 300;
		padding: 0.5% 1em;
		margin-left: 265px;
	}

	.title h1 {
		font-size: 1.1em;
		font-weight: 300;
	}
</style>

<div class="title">
	<h1>{pageTitle ? pageTitle : 'No Page'}</h1>
</div>
