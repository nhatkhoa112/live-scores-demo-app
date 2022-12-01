import api from '../../utils/api'
import * as types from '../constants/favorite.constants'

const getAllFavorites = () => async (dispatch) => {
    dispatch({type: types.GET_ALL_FAVORITES_REQUEST, payload: null})
    try {
        const data = await api.get('favorite')
        dispatch({type: types.GET_ALL_FAVORITES_SUCCESS, payload: data})
    } catch (error) {
    dispatch({type: types.GET_ALL_FAVORITES_FAILURE, payload: null})
    }
}

const addMatch = (matchId) => async(dispatch) => {
    dispatch({type: types.ADD_MATCH_TO_FAVORITE_REQUEST, payload: null})
    try {
        const data = await api.post(`favorite/match/${matchId}`)
        dispatch({type: types.ADD_MATCH_TO_FAVORITE_SUCESS, payload: data})
    } catch (error) {
    dispatch({type: types.ADD_MATCH_TO_FAVORITE_FAILURE, payload: null})
    }
}


const addLeague = (leagueId) => async(dispatch) => {
    dispatch({type: types.ADD_LEAGUE_TO_FAVORITE_REQUEST, payload: null})
    try {
        const data = await api.post(`favorite/league/${leagueId}`)
        dispatch({type: types.ADD_LEAGUE_TO_FAVORITE_SUCESS, payload: data})
    } catch (error) {
    dispatch({type: types.ADD_LEAGUE_TO_FAVORITE_FAILURE, payload: null})
    }
}

const deleteMatch = (matchId) => async(dispatch) => {
    dispatch({type: types.ADD_MATCH_TO_FAVORITE_REQUEST, payload: null})
    try {
        const data = await api.delete(`favorite/match/${matchId}`)
        dispatch({type: types.ADD_MATCH_TO_FAVORITE_SUCESS, payload: data})
    } catch (error) {
    dispatch({type: types.ADD_MATCH_TO_FAVORITE_FAILURE, payload: null})
    }
}


const deleteLeague = (leagueId) => async(dispatch) => {
    dispatch({type: types.ADD_LEAGUE_TO_FAVORITE_REQUEST, payload: null})
    try {
        const data = await api.delete(`favorite/league/${leagueId}`)
        dispatch({type: types.ADD_LEAGUE_TO_FAVORITE_SUCESS, payload: data})
    } catch (error) {
    dispatch({type: types.ADD_LEAGUE_TO_FAVORITE_FAILURE, payload: null})
    }
}



export const favoriteActions = {
    getAllFavorites,
    addMatch,
    addLeague,
    deleteMatch,
    deleteLeague
}