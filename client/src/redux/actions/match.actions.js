import api from '../../utils/api'
import * as types from '../constants/match.constants'


const getAllMatches = () => async (dispatch) => {
    dispatch ({type: types.GET_ALL_MATCHES_REQUEST, payload : null})
    try {
        const {data} = await api.get('match')
        dispatch({type: types.GET_ALL_MATCHES_SUCCESS, payload: data})
    } catch (error) {
        dispatch ({type: types.GET_ALL_MATCHES_FAILURE, payload : null})
    }
}

const getMatchById = (matchId) => async (dispatch) => {
    dispatch({ type: types.GET_MATCH_BY_ID_REQUEST, payload: null })
    try {
        const data = await api.get(`match/${matchId}`)
        dispatch({ type: types.GET_MATCH_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: types.GET_MATCH_BY_ID_FAILURE, payload: null })
    }

}


export const countryActions = {
    getAllMatches,
    getMatchById
}