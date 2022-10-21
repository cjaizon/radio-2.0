<script>
    import { country, countries, genres, filter } from '../stores/RadioStore'

    const handleChangeCountry = (e) => {
        filter.update((prevState) => {
            let newFilter = { ...prevState }
            newFilter.code = e.target.value
            newFilter.genre = 'All'
            return newFilter
        })
    }
    const handleChangeGenre = (e) => {
        filter.update((prevState) => {
            let newFilter = { ...prevState }
            newFilter.genre = e.target.value
            return newFilter
        })
    }

    const regionNames = new Intl.DisplayNames(['pt'], { type: 'region' })
</script>

<header
    class="w-full flex fixed top-0 z-1000 bg-white py-0 px-5 justify-center z-50 overflow-hidden"
>
    <div
        class="w-full max-w-6xl h-full px-0 py-2 flex flex-col sm:flex-row text-center justify-between"
    >
        <h1 class="text-2xl ">
            {$filter.code === 'All'
                ? 'Todos os países!'
                : regionNames.of($filter.code)}
        </h1>
        <div class="mt-auto mb-auto">
            <label for="country">Escolha um país:</label>
            <select
                name="country"
                id="country"
                on:change={(e) => handleChangeCountry(e)}
            >
                <option value="BR" disabled selected hidden>BR</option>
                <option value="All">All</option>
                {#each $countries.sort() as country}
                    <option value={country}>{country}</option>
                {/each}
            </select>

            {#key $filter.code}
                <label for="genre">Gênero musical:</label>
                <select
                    name="genre"
                    id="genre"
                    on:change={(e) => handleChangeGenre(e)}
                >
                    <option value="All" selected>Todos</option>
                    {#each $genres as genre}
                        <option value={genre}>{genre}</option>
                    {/each}
                </select>
            {/key}
        </div>
    </div>
</header>
