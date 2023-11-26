const url = `https://api.kinopoisk.dev/v1.4/movie/search?page=2&limit=8`;
    const options = {
            method: 'GET',
            headers: {
                'X-API-KEY': 'C2MHFSY-PRCMA67-KE7WXXV-S195PRK'
            }
        };

const ur = `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=9`;
    const option = {
            method: 'GET',
            headers: {
                'X-API-KEY': 'C2MHFSY-PRCMA67-KE7WXXV-S195PRK'
            }
        };

export const fetchWishList = () => {
    return fetch(url,options)
    .then(res => res.json())
};

export const fetchPopularMovies = () => {
    return fetch(ur,option)
    .then(res => res.json())
};

