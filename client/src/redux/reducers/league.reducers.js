import * as types from '../constants/league.constants'

const initialState = {
    leagues: [],
    leagueByCountryId: [],
    league: {},
    loading: false
}

const leagueReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case types.GET_ALL_LEAGUES_REQUEST:
        case types.GET_LEAGUES_BY_COUNTRYID_REQUEST:
        case types.CREATE_LEAGUE_REQUEST:
        case types.GET_LEAGUE_BY_ID_REQUEST:
            return { ...state, loading: true }

        case types.GET_ALL_LEAGUES_FAILURE:
        case types.GET_LEAGUES_BY_COUNTRYID_FAILURE:
        case types.CREATE_LEAGUE_FAILURE:
        case types.GET_LEAGUE_BY_ID_FAILURE:
            return { ...state, loading: false }

        case types.GET_ALL_LEAGUES_SUCCESS:
            return { ...state, leagues: payload }
        case type.GET_LEAGUES_BY_COUNTRYID_SUCCESS:
            let leagueByCountryId = payload.countries.filter(league =>  league.seasons[league.seasons.length - 1].country._id === payload.countryId)
            return { ...state, leagueByCountryId: leagueByCountryId, loading: false }
        case types.GET_LEAGUE_BY_ID_SUCCESS:
            return {...state, league: payload.data.league, loading: false}

        default:
            return state;

    }
}

export default leagueReducer;