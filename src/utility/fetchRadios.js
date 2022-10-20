// a simple fetch helper
const url = 'https://nl1.api.radio-browser.info/json/stations/search?limit=10000&hidebroken=true&order=votes&reverse=true'


export const fetchRadios = async () => {

    const res = await fetch(url)
    const data = await res.json()

    return data
}

