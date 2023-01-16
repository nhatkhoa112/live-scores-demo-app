import api from '../../utils/api'
import * as types from '../constants/match.constants'


const getAllMatches = () => async (dispatch) => {
    dispatch({ type: types.GET_ALL_MATCHES_REQUEST, payload: null })
    try {
        const { data } = await api.get('match')
        dispatch({ type: types.GET_ALL_MATCHES_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: types.GET_ALL_MATCHES_FAILURE, payload: null })
    }
}

const getMatches = (limit) => async (dispatch) => {
    dispatch({ type: types.GET_MATCHES_REQUEST, payload: null })
    try {
        const { data } = await api.get(`match/limit?limit=${limit}`)
        dispatch({ type: types.GET_MATCHES_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: types.GET_MATCHES_FAILURE, payload: null })
    }
}


const getMatchById = (matchId) => async (dispatch) => {
    dispatch({ type: types.GET_MATCH_BY_ID_REQUEST, payload: null })
    try {
        const { data } = await api.get(`match/id/${matchId}`)
       
        dispatch({ type: types.GET_MATCH_BY_ID_SUCCESS, payload: data.data })
    } catch (error) {
        dispatch({ type: types.GET_MATCH_BY_ID_FAILURE, payload: null })
    }

}


export const matchActions = {
    getAllMatches,
    getMatchById,
    getMatches
}