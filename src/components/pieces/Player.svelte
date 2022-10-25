<script context="module">
    export let player = new Audio('')
    player.volume = 0.5

    export const setStation = (station, setStation) => {
        player.src = station.src
        player.load()
        player.play()
        setStation.update((prevState) => {
            let newStation = { ...prevState }
            newStation.playing = true

            return newStation
        })
    }

    export const playPause = (station, setStation) => {
        station.playing ? player.pause() : (player.load(), player.play())

        setStation.update((prevState) => {
            let newStation = { ...prevState }
            newStation.playing = !prevState.playing

            return newStation
        })
    }
</script>
