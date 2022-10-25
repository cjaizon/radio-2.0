<script>
    import { fade } from 'svelte/transition'
    import { station } from '../../stores/RadioStore'
    import { playPause, setStation } from './Player.svelte'

    export let radio

    const handleClick = (e) => {
        if ($station.src !== e.target.parentElement.value) {
            station.update((prevState) => {
                let newStation = { ...prevState }
                newStation.radio = radio.name
                newStation.src = radio.url
                newStation.favicon = radio.favicon

                return newStation
            })

            setStation($station, station)
        } else {
            playPause($station, station)
        }
    }
</script>

<button
    transition:fade
    on:click={(e) => handleClick(e)}
    value={radio.url}
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
        class="grid items-center px-2 py-4 rounded-lg bg-radio hover:bg-white w-[calc(100%-10px) h-[calc(100%-2px)]"
        >{radio.name}</span
    >
</button>

<style>
</style>
