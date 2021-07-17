import countryBorders from './countryBorders';
import {combineReducers} from 'redux';

//Combine all the sub reducers
const rootReducer = combineReducers({
    CountryReducer: countryBorders,
})

export default rootReducer