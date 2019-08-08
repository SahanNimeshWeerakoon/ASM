import { combineReducers } from 'redux'

const dummyReducer = (initialState=[], action) => {
    switch(action.type) {
        case 'FETCH_DUMMY':
            return action.payload
        default :
            return initialState
    }
}

export default combineReducers({
    dummy: dummyReducer
})