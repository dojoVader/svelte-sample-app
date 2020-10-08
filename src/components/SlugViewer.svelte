<script>
    import { slide } from "svelte/transition";
    import { quintOut } from "svelte/easing";

    let show = false;
    export let slug = "";

    function handleShow() {
        show = !show;
    }

    function anim(node, { duration }) {
        return {
            duration,
            css: (t) => {
                return `
                  height: ${duration - t}px           
                `;
            },
        };
    }
</script>

<style>
    .oli-btn {
        border: 1px solid #f1f1f1;
        padding: 2px;
        height: auto;
        box-shadow: 0px 0px 1px 2px #fbfbfb;
        text-align: center;
        border-radius: 4px;

        font-size: 13px;
        background: hsl(266deg 54% 60%);
        color: white;
        position: fixed;
    }

    button {
        padding: 7%;
        border: none;
        border: 1px solid #f4b43c;
        background: #f4b43c;
        color: black;
        border-radius: 8px;
        font-size: 0.8em;
        width: 88px;
        box-shadow: 0px 4px 3px -3px #888888;
        cursor: pointer;
    }
</style>

<button on:click={handleShow}>View Slug</button>
<br />
{#if show}
    <div
        class="oli-btn"
        transition:slide={{ delay: 250, duration: 300, easing: quintOut }}>
        {slug}
    </div>
{/if}
