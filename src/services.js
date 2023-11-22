const url = `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=8`;
    const options = {
            method: 'GET',
            headers: {
                'X-API-KEY': 'NN3P3ZY-CG8MQ0V-MT1ZE3X-DKX4WSN'
            }
        };


export const fetchWishList = () => {
    return fetch(url,options)
    .then(res => res.json())
};