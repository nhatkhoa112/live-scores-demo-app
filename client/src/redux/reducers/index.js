import { combineReducers } from 'redux';
import countryReducer from './country.reducers'
import leagueReducer from './league.reducers'


export default combineReducers({
    country: countryReducer,
    league: leagueReducer,
});