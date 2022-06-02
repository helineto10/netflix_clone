const API_KEY = '48391d92f67db19d03797c088e399f8c'
const API_BASE = "https://api.themoviedb.org/3"

const categories = [
    {
        name: "trending",
        title: "Em alta",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
        isLarge: true
    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`,
        isLarge: false
    },
    {
        name: "topRated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
        isLarge: false
    },
    {
        name: "comedy",
        title: "Comédias",
        path: `/discover/tv?api_key=${API_KEY}&language=pt-BR&with_genres=35`,
        isLarge: false
    },
    {
        name: "romances",
        title: "Romances",
        path: `/discover/tv?api_key=${API_KEY}&language=pt-BR&with_genres=10749`,
        isLarge: false
    },
    {
        name: "documentaries",
        title: "Documentários",
        path: `/discover/tv?api_key=${API_KEY}&language=pt-BR&with_genres=99`,
        isLarge: false
    },
]

export const getMovies = async (path) => {
    try{
        let url = `${API_BASE}${path}`;
        const response = await fetch(url);
        return response.json();

    }catch(err){
        console.error("Error getMovies ", err)
    }
}

export default categories;