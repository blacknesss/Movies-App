
const initialState = []
const DATA = 'DATA';

export const dataReducer = (state = initialState, action) => {
    switch (action.type){
        case DATA:
            return [...state, ...action.payload]
        default:
            return state
    }
}

export const addData = (payload) => ({type: DATA, payload})