const initialState = {
    isLoading: false,
}

const LOAD = 'LOAD';

export const customReducer = (state = initialState, action) => {
    switch (action.type){
        case LOAD:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}


export const changeLoading = (payload) => ({type: LOAD, payload})