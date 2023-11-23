const url = `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=8`;
    const options = {
            method: 'GET',
            headers: {
                'X-API-KEY': 'RV930XR-C9NMA9B-HH3QNEC-DM43ZJT'
            }
        };


export const fetchWishList = () => {
    return fetch(url,options)
    .then(res => res.json())
};