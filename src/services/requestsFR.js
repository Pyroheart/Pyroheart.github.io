const API_KEY = "93b00ef8434690086bd09a7992c41e0c";

const requestsFR = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=fr-FR`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=fr-FR`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=fr-FR`,
    fetchTVShows:`tv/popular?api_key=${API_KEY}&language=fr-FR&page=1`,

    fetchComedy:`discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchAction:`discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchDocumentaries:`discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchHorror:`discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchAnimation:`discover/movie?api_key=${API_KEY}&with_genres=16`,
    
}

export default requestsFR;