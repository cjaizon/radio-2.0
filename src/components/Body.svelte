<script>
    import { radios, filter, genres } from '../stores/RadioStore'
    import  Card  from './pieces/Card.svelte'

    let filterdRadio = []

    $: {
        $filter.code !== 'All'
            ? (filterdRadio = $radios.filter(
                  (radio) => radio.countrycode === $filter.code
              ))
            : (filterdRadio = [...$radios])

        const filteredGenres = filterdRadio.reduce((res, radio) => {
            if (radio.tags) {
                for (const tag of radio.tags) {
                    !res.includes(tag) && res.push(tag)
                }
            }
            return res
        }, [])

        genres.set(filteredGenres)

        $filter.genre !== 'All' &&
            (filterdRadio = filterdRadio.filter((radio) =>
                radio.tags?.includes($filter.genre)
            ))
    }
</script>

<main
    class="w-full flex pb-10 pt-16 sm:pt-10 pr-2 justify-center overflow-hidden h-[100vh]"
>
    <div class="scroll w-[100vw] overflow-y-scroll overflow-x-hidden pr-3 pl-7">
        <div
            class="container grid grid-cols-body gap-3.5 max-w-6xl mx-auto my-6"
        >
            {#if filterdRadio}
                {#each filterdRadio as radio (radio.id)}
                    <Card {radio} />
                {/each}
            {/if}
        </div>
    </div>
</main>

<style>
    /* scroll bar */
    /* width */
    ::-webkit-scrollbar {
        width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        margin: 1.25rem 0;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: transparent;
        box-shadow: inset 1px 1px 3px rgb(136, 164, 255),
            inset -1px -1px 3px rgb(255, 152, 250),
            1px 1px 2px rgb(204, 216, 255), -1px -1px 2px rgb(255, 187, 195);
        border-radius: 10px;
    }
</style>
