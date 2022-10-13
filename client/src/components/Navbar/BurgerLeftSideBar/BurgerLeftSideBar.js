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
    const [tournamentQuery, setTournamentQuery] = useState('')
    const [tournamentSelect, setTournamentSelect] = useState('')



    return (
        <div className='burger-left-sidebar'>
            <div className={isBurgerLeftActive ? 'burger-left-sidebar-body ' : 'burger-left-sidebar-body hide-left-sidebar-body'}>
                <div className="sportlist sportlist-border-bottom">
                    {sportList.map((s) =>
                        <Link to="/" key={s.index}
                            className={s.index === isSportItemActive ? 'sportlist-item isActive' : 'sportlist-item'}
                            onClick={() => setIsSportItemActive(s.index)}
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
                            countries.map((country, index) => <div key={index} className="country-row">
                                <span className={country.typeImage === 'flag' ? 'country__logo country__flag' : 'country__logo  country__cup'}><img className='country__image' src={country.image} alt="" /></span>
                                <span className="country__name"><span className="country__text">{country.name}</span></span>
                            </div>)

                        }
                    </div>
                </div>}
            </div>
        </div>)
}
