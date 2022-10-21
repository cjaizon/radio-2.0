<script context="module">
    import { writable } from 'svelte/store'

    export const playing = writable(false)

    export let player = new Audio('')
    player.volume = 0.5

    export const setStation = (station) => {
        player.src = station.src
        player.load()
        player.play()
        playing.set(true)
    }

    export const playPause = (isPlaying, playing) => {
        isPlaying ? player.pause() : player.play()
        playing.set(!isPlaying)
    }
</script>
