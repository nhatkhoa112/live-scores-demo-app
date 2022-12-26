import * as types from '../constants/match.constants'
import * as fTypes from '../constants/favorite.constants'

const initialState = {
    matches: [],
    match: {},
    matchPicker: {},
    loading: false
}

const matchReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case types.GET_ALL_MATCHES_REQUEST:
        case types.GET_MATCHES_REQUEST:
        case types.CREATE_MATCH_REQUEST:
        case types.GET_MATCH_BY_ID_REQUEST:
        case fTypes.ADD_MATCH_TO_FAVORITE_REQUEST:
        case fTypes.DELETE_MATCH_REQUEST:
            return { ...state, loading: true }

        case types.GET_ALL_MATCHES_FAILURE:
        case types.GET_MATCHES_FAILURE:
        case types.CREATE_MATCH_FAILURE:
        case types.GET_MATCH_BY_ID_FAILURE:
        case fTypes.DELETE_MATCH_FAILURE:
        case fTypes.ADD_MATCH_TO_FAVORITE_FAILURE:
            return { ...state, loading: false }

        case types.GET_ALL_MATCHES_SUCCESS:
            return { ...state, matches: payload.matches, loading: false }
        case types.GET_MATCHES_SUCCESS:
            return { ...state, matches: payload.matches, loading: false }
        case types.GET_MATCH_BY_ID_SUCCESS:
            return { ...state, matchPicker: payload.match, loading: false }
        case fTypes.ADD_MATCH_TO_FAVORITE_REQUEST:
            return { ...state, matches: payload.matches, loading: false }
        case fTypes.DELETE_MATCH_REQUEST:
            return { ...state, matches: payload.matches, loading: false }
        default:
            return state;

    }
}

export default matchReducer;