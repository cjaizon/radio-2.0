<script>
    import Body from './components/Body.svelte'
    import Footer from './components/Footer.svelte'
    import Header from './components/Header.svelte'
    import { station } from './stores/RadioStore'
</script>

<svelte:head>
    <link
        rel="icon"
        type="image/svg"
        href={$station?.favicon ? $station?.favicon : ''}
    />
</svelte:head>

<Header />
<Body />
<Footer />
