import { writable } from 'svelte/store'
import { loadRadios } from '../utility/loadRadios.js'

export const station = writable({
  'radio': '',
  'src': '',
})
export const country = writable('BR')
export const filter = writable({
  'code': 'BR',
  'genre': 'All'
})
export const radios = writable([])
export const countries = writable([])
export const genres = writable([])
export const playing = writable(false)


const getRadios = async () => {
  const allData = await loadRadios()
  countries.set(allData.allCountriesCodes)
  radios.set(allData.allRadios)
}

getRadios()