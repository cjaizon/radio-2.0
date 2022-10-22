<script>
    import { fade } from 'svelte/transition'
    import { station } from '../../stores/RadioStore'
    import { playPause, setStation, playing } from './Player.svelte'

    export let radio

    const handleClick = (e) => {
        if ($station.src !== e.target.parentElement.value) {
            station.set({
                radio: e.target.innerText,
                src: e.target.parentElement.value,
            })

            setStation($station)
        } else playPause($playing, playing)
    }
</script>

<button
    transition:fade
    value={radio.url}
    on:click={(e) => handleClick(e)}
    class={`
        ${$station.src === radio.url && 'selected-radio'} 
        bg-radio hover:bg-white shadow-radio-shadow
        border border-transparent rounded-lg 
        text-base pointer transition-[border-color_0.25s]
        hover:scale-105 hover:shadow-radio-hover relative z-0
        text-center
    `}
>
    <span
        class="px-2 py-4 rounded-lg bg-radio hover:bg-white block w-[calc(100%-10px) h-[calc(100%-2px)]"
        >{radio.name}</span
    >
</button>

<style>
</style>
