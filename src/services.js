const url = `https://api.kinopoisk.dev/v1.4/movie/search?page=2&limit=8`;
    const options = {
            method: 'GET',
            headers: {
                'X-API-KEY': 'N85VFZD-7BK49XJ-N4SVC94-238MPGM'
            }
        };

const ur = `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=9`;
    const option = {
            method: 'GET',
            headers: {
                'X-API-KEY': 'N85VFZD-7BK49XJ-N4SVC94-238MPGM'
            }
        };

export const fetchWishList = () => {
    return (dispatch) => {
        fetch(url,options)
            .then(res => res.json())
            .then(json =>{
                dispatch({
                    type: 'load',
                    payload: json.docs.map(item =>({
                        ...item,
                        isEnter: false
                    }))
                })
            })
    };
}

export const fetchPopularMovies = () => {
    return fetch(ur,option)
    .then(res => res.json())
};