<script>
    let show = false;
    export let slug = "";

    function handleShow(){
        show = !show;
    }
</script>

<button on:click={handleShow}>View Slug</button>
<br/>
{#if show}<code>{slug}</code>{/if}
