import api from '../../utils/api'
import * as types from '../constants/team.constants'


const getAllTeams = () => async (dispatch) => {
    dispatch ({type: types.GET_ALL_TEAMS_REQUEST, payload : null})
    try {
        const {data} = await api.get('team')
        dispatch({type: types.GET_ALL_TEAMS_SUCCESS, payload: data})
    } catch (error) {
        dispatch ({type: types.GET_ALL_TEAMS_FAILURE, payload : null})

    }
}

const getTeamsByLeagueId = (leagueId) => async (dispatch) => {
    dispatch ({type: types.GET_TEAMS_BY_LEAGUEID_REQUEST, payload: null})
    try {
        const {data} = await api.get('team')
    dispatch({type: types.GET_TEAMS_BY_LEAGUEID_SUCCESS, payload: {data: data, leagueId }})
    } catch (error) {
        dispatch({type: types.GET_TEAMS_BY_LEAGUEID_FAILURE, payload: null})
    }
}



const getTeamById = (teamId) => async (dispatch) => {
    dispatch({ type: types.GET_TEAM_BY_ID_REQUEST, payload: null })
    try {
        const data = await api.get(`team/${teamId}`)
        dispatch({ type: types.GET_TEAM_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: types.GET_TEAM_BY_ID_FAILURE, payload: null })
    } 
}


export const teamActions = {
    getAllTeams,
    getTeamsByLeagueId,
    getTeamById
}