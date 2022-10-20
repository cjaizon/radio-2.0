<script context="module">
    
    import { playing, station} from '../../stores/radios'
    
	let src
    station?.subscribe(value => src = value.src)

    let isPlaying
    playing.subscribe(value => isPlaying = value)

	export let player = new Audio(src)

	export const setStation = () => {
        player.src = src
		player.load()
        player.play()
        playing.set(true)
	}

	export const playPause = () => {
		isPlaying ? player.pause() : player.play();
		playing.set(!isPlaying)
	}

</script> 

<!-- <audio bind:this={player} /> -->

