<script>
    import { fade } from 'svelte/transition'
    import { station } from '../../stores/RadioStore'
    import { setStation } from './Player.svelte'

    export let radio

    const handleClick = (e) => {
        station.set({
            radio: e.target.innerText,
            src: e.target.value,
        })

        setStation($station)
    }
</script>

<button
    transition:fade
    value={radio.url}
    on:click={(e) => handleClick(e)}
    class={`
        ${$station.src === radio.url && 'selected-radio'} 
        bg-radio hover:bg-white shadow-radio-shadow
        border border-transparent rounded-lg px-2 py-4 
        text-base pointer transition-[border-color_0.25s]
        hover:scale-110 hover:shadow-radio-hover relative z-0
    `}
>
    {radio.name}
</button>
