import { combineReducers } from 'redux';
import countryReducer from './country.reducers'
import leagueReducer from './league.reducers'
import teamReducer from './team.reducers'

export default combineReducers({
    country: countryReducer,
    league: leagueReducer,
    team: teamReducer
});