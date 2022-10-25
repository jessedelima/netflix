const API_KEY = 'b049d559c5278d8c15142ce22bfd7733'
const API_BASE = 'https://api.themoviedb.org/3'

const basicFetch = async(endpoint) => {
    const req = await fetch(`${API_BASE}${ endpoint }`)
    const json = await req.json()
    return json
}

export default{
    getHomeList: async() => {
        return[
            {
                slug:'originals',
                title:'originals do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'trending',
                title:'Recommendados para voce',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'toprated',
                title:'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'action',
                title:'Açao',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'comedy',
                title:'Comedia',
                items: await basicFetch(`/discover/tv?with_network=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'horror',
                title:'Terror',
                items: await basicFetch(`/discover/tv?with_network=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'romance',
                title:'romance',
                items: await basicFetch(`/discover/tv?with_network=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'documentary',
                title:'Documentario',
                items: await basicFetch(`/discover/tv?with_network=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },
    getMovieInfo: async(movieId, type) => {
        let info = {}
        if (movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    break
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    break
                default:
                    info = null
                    break

            }
        }
        return info
    }
}
