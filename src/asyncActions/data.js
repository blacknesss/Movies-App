import {addData} from '../store/dataReducer';
import {changeLoading} from '../store/customReducer';

const url = `https://api.kinopoisk.dev/v1.4/movie/search?`;
const options = {
    method: 'GET',
    headers: {
        'X-API-KEY': 'N85VFZD-7BK49XJ-N4SVC94-238MPGM'
    }
};


export const fetchData = () => {
    return dispatch => {
        fetch(url, options)
        .then(res => res.json())
        .then(json => {
            dispatch(changeLoading(true))
            return dispatch(addData(json.docs))})
        .catch( (e) => console.log(e)
        )
    }
}
