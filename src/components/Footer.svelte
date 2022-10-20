<script>
    import {playing, station} from '../stores/radios'
    import {player, playPause} from './pieces/Player.svelte'

    let isPlaying
    playing.subscribe(value => isPlaying = value)

    let src
    station?.subscribe(value => src = value?.src)

    let radio
    station?.subscribe(value => radio = value?.radio)

    const handleVolume = (e) => {
        player.volume = e.target.value
    }

</script>


<footer class="w-full flex fixed bottom-0 z-1000 bg-white px-5 justify-center overflow-hidden">
    <div class="w-full max-w-6xl h-full py-2 flex justify-between align-middle ">
        <div class="flex justify-middle text-center mx-auto w-full h-full align-middle max-w-max">
            <button disabled={src == ''} class="text-xl mr-5 p-0" on:click={()=> playPause()}>
                <i class={`text-2xl fa ${!isPlaying ? 'fa-play' : 'fa-pause'}`}></i>
            </button>
            <input class="m-0 p-0 text-red-400" min="0" max="1" step="0.1" value={player.volume} type="range" on:change={(e)=> handleVolume(e)}/>
        </div>
        <div class="w-full h-full text-right my-auto text-sm">
            {#if radio}
                <p class="">{radio}</p>
            {/if}
        </div>
    </div>
</footer>