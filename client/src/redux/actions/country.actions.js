import api from '../../utils/api'
import * as types from '../constants/country.constants'


const getAllCountries = () => async (dispatch) => {
    dispatch({ type: types.GET_ALL_COUNTRIES_REQUEST, payload: null })
    try {
        const {data} = await api.get('country')
        dispatch({ type: types.GET_ALL_COUNTRIES_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: types.GET_ALL_COUNTRIES_FAILURE, payload: null })
    }
}

const getCountriesByQuery = (query) => async (dispatch) => {
    dispatch({ type: types.GET_COUNTRIES_BY_QUERY_REQUEST, payload: null })
    try {
        const { data } = await api.get('country')
        dispatch({ type: types.GET_COUNTRIES_BY_QUERY_SUCCESS, payload: { data, query } })
    } catch (error) {
        dispatch({ type: types.GET_COUNTRIES_BY_QUERY_FAILURE, payload: null })
    }
}

const createCountry = (country) => async (dispatch) => {
    dispatch({ type: types.CREATE_COUNTRY_REQUEST, payload: null })
    try {
        const { data } = await api.post('country', country)
        dispatch({ type: types.CREATE_COUNTRY_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: types.CREATE_COUNTRY_FAILURE, payload: null })
    }
}

const getCountryById = (countryId) => async (dispatch) => {
    dispatch({ type: types.GET_COUNTRY_BY_ID_REQUEST, payload: null })
    try {
        const {data} = await api.get(`country/${countryId}`)
        dispatch({ type: types.GET_COUNTRY_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: types.GET_COUNTRY_BY_ID_FAILURE, payload: null })
    }

}

export const countryActions = {
    getAllCountries,
    getCountriesByQuery,
    createCountry,
    getCountryById
}