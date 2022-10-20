import { writable } from 'svelte/store'
import { loadRadios } from '../utility/loadRadios.js'

export const station = writable({
  'radio': '',
  'src': '',
})
export const country = writable('BR')
export const radios = writable([])
export const countries = writable([])
export const playing = writable(false)

export const getRadios = async () => {
  const allData = await loadRadios()
  countries.set(allData.allCountriesCodes)

  const setRadios = async () => {

    let chosenCountry
    country.subscribe(value => chosenCountry = value)

    let allRadios
    radios.subscribe(value => allRadios = value)

    const filtered = await allData.allRadios.reduce((res, item) => {
      (item.countrycode === chosenCountry || chosenCountry === 'All') && res.push(item)
      return res
    }, [])

    radios.set(filtered)
  }

  setRadios()
}

getRadios()