import * as types from '../constants/match.constants'

const initialState = {
    matches: [],
    match: {},
    matchPicker: {},
    loading: false
}

const teamReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case types.GET_ALL_MATCHES_REQUEST:
        case types.CREATE_MATCH_REQUEST:
        case types.GET_MATCH_BY_ID_REQUEST:
            return { ...state, loading: true }

        case types.GET_ALL_MATCHES_FAILURE:
        case types.CREATE_MATCH_FAILURE:
        case types.GET_MATCH_BY_ID_FAILURE:
            return { ...state, loading: false }

        case types.GET_ALL_MATCHES_SUCCESS:
            return { ...state, matches: payload.matches, loading: false }
        case types.GET_MATCH_BY_ID_SUCCESS:
            return {...state, matchPicker: payload.data.match, loading: false}

        default:
            return state;

    }
}

export default teamReducer;