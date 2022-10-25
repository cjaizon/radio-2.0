<script>
    import { station } from '../stores/RadioStore'
    import { player, playPause } from './pieces/Player.svelte'
</script>

<footer
    class="w-full flex fixed bottom-0 z-1000 bg-white px-5 justify-center overflow-hidden"
>
    <div
        class="w-full max-w-6xl h-full py-2 flex justify-between align-middle "
    >
        <div
            class="flex justify-middle text-center mx-auto w-full h-full align-middle max-w-max"
        >
            <button
                disabled={$station.src == ''}
                class="text-xl mr-5 p-0 "
                on:click={() => playPause($station, station)}
            >
                <i
                    class={`text-2xl fa ${
                        !$station.playing ? 'fa-play' : 'fa-pause'
                    }`}
                />
            </button>
            {#if player}
                <input
                    class="w-20"
                    min="0"
                    max="1"
                    step="0.1"
                    bind:value={player.volume}
                    type="range"
                />
            {/if}
        </div>
        <div class="w-full h-full text-right my-auto text-sm">
            {#if $station.radio}
                <p class="">{$station.radio}</p>
            {/if}
        </div>
    </div>
</footer>
