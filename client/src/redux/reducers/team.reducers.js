import * as types from '../constants/team.constants'

const initialState = {
    teams: [],
    teamsByLeagueId: [],
    team: {},
    teamPicker: {},
    loading: false
}

const teamReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case types.GET_ALL_TEAMS_REQUEST:
        case types.GET_TEAMS_BY_LEAGUEID_REQUEST:
        case types.CREATE_TEAM_REQUEST:
        case types.GET_TEAM_BY_ID_REQUEST:
            return { ...state, loading: true }

        case types.GET_ALL_TEAMS_FAILURE:
        case types.GET_TEAMS_BY_LEAGUEID_FAILURE:
        case types.CREATE_TEAM_FAILURE:
        case types.GET_TEAM_BY_ID_FAILURE:
            return { ...state, loading: false }

        case types.GET_ALL_TEAMS_SUCCESS:
            return { ...state, leagues: payload.leagues }
        case type.GET_TEAMS_BY_LEAGUEID_SUCCESS:
            let leagueByCountryId = payload.data.filter(league => league.seasons[league.seasons.length - 1].country._id === payload.leagueByCountryId)
            return { ...state, leagueByCountryId: leagueByCountryId, loading: false }
        case types.GET_TEAM_BY_ID_SUCCESS:
            return { ...state, teamPicker: payload.data.team, loading: false }
        default:
            return state;
    }
}

export default teamReducer;