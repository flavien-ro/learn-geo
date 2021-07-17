import countryBoundaries from './countryBoundaries';
import displayModal from './displayModal';
import { combineReducers } from 'redux';

//Combine all the sub reducers
const rootReducer = combineReducers({
    CountryReducer: countryBoundaries,
    ModalReducer: displayModal,
})

export default rootReducer;