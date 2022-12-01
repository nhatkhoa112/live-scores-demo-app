import * as types from '../constants/favorite.constants'

const initialState = {
    favorites: [],
    loading: false
}


const favoriteReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case types.GET_ALL_FAVORITES_REQUEST:
        case types.ADD_LEAGUE_TO_FAVORITE_REQUEST:
        case types.ADD_MATCH_TO_FAVORITE_REQUEST:
        case types.DELETE_LEAGUE_REQUEST:
        case types.DELETE_LEAGUE_REQUEST:
            return { ...state, loading: true }

        case types.GET_ALL_FAVORITES_FAILURE:
        case types.ADD_LEAGUE_TO_FAVORITE_FAILURE:
        case types.ADD_MATCH_TO_FAVORITE_FAILURE:
        case types.DELETE_LEAGUE_FAILURE:
        case types.DELETE_LEAGUE_FAILURE:
            return { ...state, loading: false }

        case types.GET_ALL_FAVORITES_SUCCESS:
            return { ...state, favorites: payload.favorites, loading: false }
        case types.ADD_LEAGUE_TO_FAVORITE_SUCESS:
            return { ...state, favorites: payload.favorites, loading: false }
        case types.ADD_MATCH_TO_FAVORITE_REQUEST:
            return { ...state, favorites: payload.favorites, loading: false }
        case types.DELETE_LEAGUE_SUCESS:
            return { ...state, favorites: payload.favorites, loading: false }
        case types.DELETE_MATCH_SUCESS:
            return { ...state, favorites: payload.favorites, loading: false }
        default:
            return state;
    }
}

export default favoriteReducer;