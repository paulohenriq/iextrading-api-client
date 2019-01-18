import { combineReducers } from 'redux'
import searchReducer from '../Search/searchReducer'
import alertReducer from './alertReducer'

const rootReducer = combineReducers({
    search: searchReducer,
    alert: alertReducer
})

export default rootReducer