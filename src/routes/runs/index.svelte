<script context="module">
    export function preload() {
        return this.fetch(`runs.json`)
            .then((r) => r.json())
            .then((runs) => {
                return { runs };
            });
    }
</script>

<style>
    tr{
        border: 1px solid #b8b8e6;
    }
    thead tr{
        border: 1px solid #b8b8e6;
    }

    td{
        padding:2%;
    }

    tbody tr {
        height: 100px;
    }
</style>

<script>
    import RunsTable from "../../components/RunsTable.svelte";
import SlugViewer from "../../components/SlugViewer.svelte";
import Slug from "../blog/[slug].svelte";
    export let runs;
</script>

<svelte:head>
    <title>Runs</title>
</svelte:head>
<h1>Runs History</h1>
<hr />


<RunsTable>
    <thead slot="header">
        <tr>
            {#each runs.header as header}
                <th>{header.title}</th>
            {/each}
        </tr>
    </thead>
    <tbody slot="footer">
        {#each runs.rows as row}
            <tr>
                <td width="20%">{row.packageName}</td>
                <td width="10%">{row.admin}</td>
                <td width="20%">{row.startDate}</td>
                <td width="20%">{row.status}</td>
                <td width="20%" colspan="2" >
                    <SlugViewer slug={row.slug} />
                   
                </td>
      
            </tr>
        {/each}
    </tbody>
</RunsTable>
