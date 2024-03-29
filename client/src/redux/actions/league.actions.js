import api from '../../utils/api'
import * as types from '../constants/league.constants'


const getAllLeague = () => async (dispatch) => {
    dispatch ({type: types.GET_ALL_LEAGUES_REQUEST, payload : null})
    try {
        const {data} = await api.get('league')
        dispatch({type: types.GET_ALL_LEAGUES_SUCCESS, payload: data})
    } catch (error) {
        dispatch ({type: types.GET_ALL_LEAGUES_FAILURE, payload : null})

    }
}

const getLeagueByCountryId = (countryId) => async (dispatch) => {
    dispatch ({type: types.GET_LEAGUES_BY_COUNTRYID_REQUEST, payload: null})
    try {
        const {data} = await api.get('league')
        dispatch({type: types.GET_LEAGUES_BY_COUNTRYID_SUCCESS, payload: {data, countryId }})
    } catch (error) {
        dispatch({type: types.GET_LEAGUES_BY_COUNTRYID_FAILURE, payload: null})
    }
}


const getLeagueById = (leagueId) => async (dispatch) => {
    dispatch({ type: types.GET_LEAGUE_BY_ID_REQUEST, payload: null })
    try {
        const {data} = await api.get(`league/${leagueId}`)
        dispatch({ type: types.GET_LEAGUE_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: types.GET_LEAGUE_BY_ID_FAILURE, payload: null })
    }

}


export const leagueActions = {
    getAllLeague,
    getLeagueByCountryId,
    getLeagueById
}