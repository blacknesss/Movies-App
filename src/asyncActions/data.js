import {addData} from '../store/dataReducer';
import {changeLoading} from '../store/customReducer';

const url = `https://api.kinopoisk.dev/v1.4/movie/search?`;
const options = {
    method: 'GET',
    headers: {
        'X-API-KEY': 'K0SQHHX-CND4NBG-JNZ25MN-G7E3MDX'
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
