//const key = 'Paste your api key here'

const requests = {
  requestTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestAction: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=action&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestAdventure: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=adventure&page=1&include_adult=false`,
  requestAnime: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=animation
&page=1&include_adult=false`,
  requestWar: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=war&page=1&include_adult=false`,
};

export default requests;
