import React, { useState, useEffect } from 'react'
import './tournamentsContainer.css'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import {countryActions} from '../../../../redux/actions'

const TournamentsContainer = ({countryId,leagueId}) => {
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.country.countries)
    const [tournamentQuery, setTournamentQuery] = useState('')
    const [countrySelect, setCountrySelect] = useState('')

    useEffect(() => {
        dispatch(countryActions.getAllCountries())
    }, [dispatch])

    useEffect(() => {
        if(countryId){
            let newCountrySelect = countries.find((country) => country._id === countryId);   
            if(newCountrySelect && Object.keys(newCountrySelect).length !== 0)  {setCountrySelect(newCountrySelect)}
        }
    },[countryId, countries])


    
    return (
        <div className="content-left tournaments">
            {Object.keys(countrySelect).length === 0 &&
                (<div className="content-title">
                    <div className="icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="search-form">
                        <input
                            value={tournamentQuery}
                            onChange={(e) => setTournamentQuery(e.target.value)}
                            placeholder='Search...'
                            type="text" id="tournament-name" />
                        {tournamentQuery && <i className="fa-solid fa-xmark" onClick={(e) => setTournamentQuery('')}></i>}
                    </div>
                </div>)}

            {/* Tournament by country */}
            {Object.keys(countrySelect).length !== 0 &&
                (<div className="content-title">
                    <div className="icon">
                        <i onClick={() => {
                            setCountrySelect({});
                            setTournamentQuery("")
                        }
                        } className="fa-solid fa-xmark"></i>
                    </div>
                    <div className="tourname">
                        <div className="text">
                            {countrySelect.name}
                        </div>
                    </div>
                </div>)}



            {/* Tournament */}
            {
                Object.keys(countrySelect).length === 0 && (<div className="tournament-list">
                    {tournamentQuery === "" && countries.map((country) =>
                     {   
                        return( <li onClick={(e) => setCountrySelect(country)} className="tournament-item" key={country._id}>
                            <span className={country.typeImage === 'flag' ? 'logo flag' : 'logo cup'}><img className='image' src={country.imageUrl} alt="" /></span>
                            <span className="name"><span className="text">{country.name}</span></span>
                        </li>)}
                        
                        )
                    }
                    {tournamentQuery !== "" && countries.filter((country) => country.name.toLowerCase().includes(tournamentQuery)).map((country) =>
                        <li key={country.countryId} onClick={() => setCountrySelect(country)} className="tournament-item" >
                            <span className={country.typeImage === 'flag' ? 'logo flag' : 'logo cup'}><img className='image' src={country.imageUrl} alt="" /></span>
                            <span className="name"><span className="text">{country.name}</span></span>
                        </li>)
                    }
                </div>)
            }

            {
                Object.keys(countrySelect).length !== 0 && (<div className="tournament-by-country-list">
                    {
                        countrySelect.leagues.map((league) => {
                            return(<Link  to={`/football/${countrySelect._id}/${league._id}`}  className={(leagueId === league._id && countrySelect._id === countryId)  ? "tournament-item active-effect" : "tournament-item" }  key={league._id}>
                                    <span className={countrySelect.typeImage === 'flag' ? 'logo flag' : 'logo cup'}><img className='image' src={countrySelect.imageUrl} alt="" /></span>
                                    <span className="name"><span className="text">{league.name}</span></span>
                                </Link>
                            )
                        })
                    }

                </div>)
            }

        </div>
    )
}

export default TournamentsContainer