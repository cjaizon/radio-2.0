<script>

    import { country, countries, getRadios} from '../stores/RadioStore'
    
    const handleChange = (e) => {
       country.set(e.target.value)
       getRadios()
    }

    const regionNames = new Intl.DisplayNames(
        ['pt'], {type: 'region'}
    );

</script>


<header class="w-full flex fixed top-0 z-1000 bg-white py-0 px-5 justify-center z-50 overflow-hidden">
    <div class="w-full max-w-6xl h-full px-0 py-2 flex flex-col sm:flex-row text-center justify-between">
        <h1 class="text-2xl ">{ regionNames.of($country)}</h1>
        <div class='mt-auto mb-auto'>
            <label for="country">Escolha um país:</label>
            <select name="country" id="country" on:change={(e) => handleChange(e)}>
                <option value='BR' disabled selected hidden>BR</option>
                <option value='All'>All</option>
                {#each $countries.sort() as country}
                        <option value={country}>{country}</option>
                {/each}

            </select>
        </div>
    </div>
</header>