<script>

    import {radios} from '../stores/radios'
    import { Card, Player} from './pieces'

    let allRadios
    radios.subscribe(value => allRadios = value)

</script>

<main class='w-full flex pb-10 pt-16 sm:pt-10 pr-2 justify-center overflow-hidden h-[100vh]'>
    <Player />
    <div class="scroll w-[100vw] overflow-y-auto overflow-x-hidden pr-3 pl-7">
        <div class="container grid grid-cols-body gap-3.5 max-w-6xl mx-auto my-6">
            {#if allRadios}
            {#each allRadios as station}
                <Card
                    url={station?.url}
                    name={station?.name} 
                />
            {/each}
        {/if}
        </div>
    </div>
</main>

<style>

    /* scroll bar */
    /* width */
    ::-webkit-scrollbar {
        width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        margin: 20px 0;
        border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgb(221, 221, 221);
        box-shadow: inset 1px 1px 3px rgb(136, 164, 255), inset -1px -1px 3px rgb(255, 152, 250), 1px 1px 3px rgb(204, 216, 255), -1px -1px 3px rgb(255, 187, 195);
        border-radius: 10px;
    }
</style>