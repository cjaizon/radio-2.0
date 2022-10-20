import { fetchRadios } from './fetchRadios.js'


export const loadRadios = async () => {

    const data = await fetchRadios()
    // reduce the whole list getting rid of stations with missing info
    const allRadios = data.reduce((res, radio) => {

        ((radio.codec === "MP3" || "AAC" || "AAC+") && (radio.stationuuid !== null)) && res.push({
            'name': radio.name,
            'countrycode': radio.countrycode,
            'country': radio.country,
            'url': radio.url,
            'codec': radio.codec,
            'favicon': radio.favicon,
            'id': radio.stationuuid,
            // since there are multiple tags and kanguage cods in some station I used a regex to separate them into an array
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


    return { allRadios, allCountriesCodes }
}


