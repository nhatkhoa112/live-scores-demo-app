import React, { useState } from 'react'
import './burgerLeftSideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { countries } from '../../../utils/footballDb'


const sportList = [
    { name: "Football", index: 0 },
    { name: "BaseBall", index: 1 },
    { name: "BasketBall", index: 2 },
    { name: "Tennis", index: 3 }
]



export const BurgerLeftSideBar = ({ isBurgerLeftActive, setIsBurgerLeftActive, setIsMaskShow }) => {
    const [isSportItemActive, setIsSportItemActive] = useState(0)
    const [tournamentSelect, setTournamentSelect] = useState('')

    console.log(tournamentSelect)



    return (
        <div className='burger-left-sidebar'>
            <div className={isBurgerLeftActive ? 'burger-left-sidebar-body ' : 'burger-left-sidebar-body hide-left-sidebar-body'}>
                <div className="sportlist sportlist-border-bottom">
                    {sportList.map((s) =>
                        <Link to="/" key={s.index}
                            className={s.index === isSportItemActive ? 'sportlist-item isActive' : 'sportlist-item'}
                            onClick={() => { 
                                setIsSportItemActive(s.index) 
                                setTournamentSelect("")
                            }}
                        >
                            {s.name}
                        </Link>
                    )}
                    <div className="burger-close-icon">
                        <FontAwesomeIcon icon={faXmark} onClick={() => {
                            setIsBurgerLeftActive(false)
                            setIsMaskShow(false)
                        }} />
                    </div>
                </div>

                {isSportItemActive === 0 && <div className="tour-lists">
                    <div className="tour-lists__inner">
                        {
                            Object.keys(tournamentSelect).length === 0 && countries.map((country, index) => <div key={index} className="country-row">
                                <span className={country.typeImage === 'flag' ? 'country__logo country__flag' : 'country__logo  country__cup'}><img className='country__image' src={country.image} alt="" /></span>
                                <span onClick={() => {
                                    setTournamentSelect(country)
                                }} className="country__name"><span className="country__text">{country.name}</span></span>
                            </div>)

                        }

                        {
                            Object.keys(tournamentSelect).length !== 0 && (<div className="tournament-by-country-list">
                                {
                                    tournamentSelect.content.map((tournament) => {
                                        return (<Link to={`/football/${tournamentSelect.countryId}/${tournament.id}`} onClick={() => {
                                            setIsBurgerLeftActive(false)
                                            setIsMaskShow(false)
                                            setTournamentSelect("")
                                        }} className="tournament-item" key={tournament.id}>
                                            <span className={tournamentSelect.typeImage === 'flag' ? 'logo flag' : 'logo cup'}><img className='image' src={tournamentSelect.image} alt="" /></span>
                                            <span className="name"><span className="text">{tournament.tourName}</span></span>
                                        </Link>
                                        )
                                    })
                                }

                            </div>)
                        }
                    </div>
                </div>}
            </div>
        </div>)
}
