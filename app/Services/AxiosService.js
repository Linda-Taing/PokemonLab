export const pokeApi = new axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0',
    timeout: 8000
})

export const sandboxApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/Linda/pokemon',
    timeout: 8000
})