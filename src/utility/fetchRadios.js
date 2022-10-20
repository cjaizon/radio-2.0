// a simple fetch helper
const url = import.meta.env.VITE_API_URL

export const fetchRadios = async () => {

    const res = await fetch(url)
    const data = await res.json()

    return data
}

