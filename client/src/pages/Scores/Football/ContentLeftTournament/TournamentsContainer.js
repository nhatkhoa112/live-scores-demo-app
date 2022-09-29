import React, { useState, useEffect } from 'react'
import { countries } from '../footballDb';
import './tournamentsContainer.css'
import { Link } from 'react-router-dom'

const TournamentsContainer = ({countryId,tourId}) => {
    const [tournamentQuery, setTournamentQuery] = useState('')
    const [tournamentSelect, setTournamentSelect] = useState('')


    useEffect(() => {
        if(countryId){
            let newTournamentSelect = countries.find((country) => country.countryId === parseInt(countryId));   
            if(Object.keys(newTournamentSelect).length !== 0 ) {setTournamentSelect(newTournamentSelect)}
        }
    },[countryId])
    
    return (
        <div className="content-left tournaments">
            {/* Tournament */}
            {Object.keys(tournamentSelect).length === 0 &&
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
            {Object.keys(tournamentSelect).length !== 0 &&
                (<div className="content-title">
                    <div className="icon">
                        <i onClick={() => {
                            setTournamentSelect({});
                            setTournamentQuery("")
                        }
                        } className="fa-solid fa-xmark"></i>
                    </div>
                    <div className="tourname">
                        <div className="text">
                            {tournamentSelect.name}
                        </div>
                    </div>
                </div>)}


            {/* Tournament */}
            {
                Object.keys(tournamentSelect).length === 0 && (<div className="tournament-list">
                    {tournamentQuery === "" && countries.map((country) =>
                     {   
                        return( <li onClick={(e) => setTournamentSelect(country)} className="tournament-item" key={country.countryId}>
                            <span className={country.typeImage === 'flag' ? 'logo flag' : 'logo cup'}><img className='image' src={country.image} alt="" /></span>
                            <span className="name"><span className="text">{country.name}</span></span>
                        </li>)}
                        
                        )
                    }
                    {tournamentQuery !== "" && countries.filter((country) => country.name.toLowerCase().includes(tournamentQuery)).map((country) =>
                        <li key={country.countryId} onClick={() => setTournamentSelect(country)} className="tournament-item" >
                            <span className={country.typeImage === 'flag' ? 'logo flag' : 'logo cup'}><img className='image' src={country.image} alt="" /></span>
                            <span className="name"><span className="text">{country.name}</span></span>
                        </li>)
                    }
                </div>)
            }

            {
                Object.keys(tournamentSelect).length !== 0 && (<div className="tournament-by-country-list">
                    {
                        tournamentSelect.content.map((tournament) => {
                            return(<Link  to={`/football/${tournamentSelect.countryId}/${tournament.id}`} className={(parseInt(tourId) === tournament.id && tournamentSelect.countryId === parseInt(countryId))  ? "tournament-item active-effect" : "tournament-item" } key={tournament.id}>
                                    <span className={tournamentSelect.typeImage === 'flag' ? 'logo flag' : 'logo cup'}><img className='image' src={tournamentSelect.image} alt="" /></span>
                                    <span className="name"><span className="text">{tournament.tourName}</span></span>
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