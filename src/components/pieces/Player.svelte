<script context="module">
    
	export let player = new Audio('')
	player.volume = 0.5

	export const setStation = (station, setPlaying) => {
        player.src = station.src
		player.load()
        player.play()
        setPlaying.set(true)
	}

	export const playPause = (isPlaying, setPlaying) => {
		isPlaying ? player.pause() : player.play();
		setPlaying.set(!isPlaying)
	}

</script> 

