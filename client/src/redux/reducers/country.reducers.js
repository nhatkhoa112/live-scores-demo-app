import * as types from '../constants/country.constants'

const initialState = {
    countries: [],
    countriesByQuery: [],
    countryPicker: {},
    country: {},
    loading: false
}


const countryReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case types.GET_ALL_COUNTRIES_REQUEST:
        case types.GET_COUNTRIES_BY_QUERY_REQUEST:
        case types.CREATE_COUNTRY_REQUEST:
        case types.GET_COUNTRY_BY_ID_REQUEST:
            return { ...state, loading: true }

        case types.GET_ALL_COUNTRIES_FAILURE:
        case types.GET_COUNTRIES_BY_QUERY_FAILURE:
        case types.CREATE_COUNTRY_FAILURE:
        case types.GET_COUNTRY_BY_ID_FAILURE:
            return { ...state, loading: false }

        case types.GET_ALL_COUNTRIES_SUCCESS:
            return { ...state, countries: payload.countries, loading: false }
        case types.CREATE_COUNTRY_SUCCESS:
            return { ...state, country: payload.country, loading: false }
        case type.GET_COUNTRIES_BY_QUERY_SUCCESS:
            let countriesByQuery = payload.countries.filter(country => country.name.toLowerCase().includes(query.toLowerCase()))
            return { ...state, countriesByQuery: countriesByQuery, loading: false }
        case types.GET_COUNTRY_BY_ID_REQUEST:
            return { ...state, countryPicker: payload.country, loading: false }
        default:
            return state;
    }
}

export default countryReducer;