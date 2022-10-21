<script>
    import { fade } from 'svelte/transition'
    import { station, playing } from '../../stores/RadioStore'
    import { setStation } from './Player.svelte'

    export let radio

    const handleClick = (e) => {
        station.set({
            radio: radio.name,
            src: e.target.value,
        })
        setStation($station, playing)
    }
</script>

<button
    transition:fade
    class={`
        ${$station.src === radio.url && 'selected'} 
        bg-radio hover:bg-white shadow-radio-shadow border border-transparent rounded-lg px-2 py-4 text-base pointer transition-[border-color_0.25s] hover:scale-110 hover:shadow-radio-hover relative z-0
    `}
    value={radio.url}
    on:click={(e) => handleClick(e)}
>
    {radio.name}
</button>

<style>
    .selected {
        background: rgb(255, 255, 255);
        transform: scale(1.05);
        box-shadow: 1px 1px 8px rgb(212, 222, 255),
            -1px -1px 8px rgb(255, 206, 212);
    }
</style>
