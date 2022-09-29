import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/images/soccer-ball.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFutbol, faStar, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import {BurgerSideBar} from './BurgerSideBar/BurgerSideBar'


const Navbar = () => {
    const [isActive, setIsActive] = useState(0);
    const [isBurgerActive, setIsBurgerActive] = useState(false);
    return (
        <div className='navbar'>
            <div className='navbar-row'>
                {/* Logo */}
                <div className='navbar-col col-2'>
                    <Link onClick={() => setIsActive(0)} to='/' className='navbar-logo-banner'>
                        <div className='logo-banner-img'>
                            <img src={logo} alt='' />
                        </div>
                        <div className='logo-banner-text'>
                            LiveScores
                        </div>
                    </Link>
                </div>
                {/* Navbar Items and burrger menu */}
                <div className='navbar-col col-10'>
                    <div className='navbar-section-right'>
                        <ul className='nav-items-list'>
                            <li className='nav-item'>
                                <Link to='/' onClick={() => setIsActive(0)} className={isActive === 0 ? "active" : "link"}>
                                    <div className='icon'>
                                        <FontAwesomeIcon icon={faFutbol} />
                                    </div>
                                    <div className="text">Scores</div>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link onClick={() => setIsActive(1)} to='/favorite' className={isActive === 1 ? "active" : "link"}>
                                    <div className='icon'>
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <div className="text">Favorite</div>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link onClick={() => setIsActive(2)} to='news' className={isActive === 2 ? "active" : "link"}>
                                    <div className='icon'>
                                        <FontAwesomeIcon icon={faNewspaper} />
                                    </div>
                                    <div className="text">News</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={isBurgerActive === true ? 'burger-menu burger-menu-active' : 'burger-menu'} onClick={() => setIsBurgerActive(!isBurgerActive)}>
                        <FontAwesomeIcon className='link' icon={faBars} />
                    </div>
                </div>
            </div>

            {/* BurrgerSidebar */}
            <BurgerSideBar isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
        </div>
    )
}

export default Navbar