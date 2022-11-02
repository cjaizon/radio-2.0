const url = import.meta.env.VITE_API_URL

export const loadRadios = async () => {

    try {
        const res = await fetch(url)
        const data = await res.json()

        // reduce the whole list getting rid of stations with missing info
        const allRadios = data.reduce((res, radio) => {

            ((radio.codec === "MP3" || "AAC" || "AAC+") && (radio.stationuuid !== null) && (radio.favicon !== null)) && res.push({
                'name': radio.name,
                'countrycode': radio.countrycode,
                'country': radio.country,
                'url': radio.url,
                'codec': radio.codec,
                'favicon': radio.favicon,
                'id': radio.stationuuid,
                // since there are multiple tags and language cods in some station I used a regex to separate them into an array
                'tags': radio.tags.match(/[^,\s]+/g),
                'language': radio.languagecodes.match(/[^,\s]+/g)
            })

            return res
        }, [])

        // get a list with only the countries for filtering and menus
        const allCountriesCodes = allRadios.reduce((res, radio) => {

            (radio.countrycode !== "" && !res.includes(radio.countrycode)) && res.push(radio.countrycode)

            return res
        }, [])

        // get a list with only the genres for filtering and menus
        const allGenres = allRadios.reduce((res, radio) => {
            if (radio.tags) {
                for (const tag of radio.tags) {
                    !res.includes(tag) && res.push(tag)
                }
            }
            return res
        }, [])

        return { allRadios, allCountriesCodes, allGenres }

    } catch (err) {
        console.log(err)
    }
}


