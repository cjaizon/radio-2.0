<script>
    import {station} from '../../stores/radios'
    import { setStation } from "./Player.svelte"

    export let name
    export let url

    const handleClick = (e) => {
        station.set({
            'radio': name,
            'src': e.target.value
        })
        setStation()
    }

    let radio
    station?.subscribe((value) => radio = value.src)

</script>

<button 
    class={`
        ${radio === url && 'selected'} 
        bg-radio hover:bg-white shadow-radio-shadow border border-transparent rounded-lg px-2 py-4 text-base pointer transition-[border-color_0.25s] hover:scale-110 hover:shadow-radio-hover relative z-0
    `}
    value={url} 
    on:click={(e) => handleClick(e)}
>
    {name}
</button>

<style>
    .selected {
        background: rgb(255, 255, 255);
        transform: scale(1.05);
        box-shadow: 1px 1px 8px rgb(212, 222, 255), -1px -1px 8px rgb(255, 206, 212);
    }
</style>