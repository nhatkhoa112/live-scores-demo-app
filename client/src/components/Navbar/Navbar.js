import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/images/soccer-ball.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFutbol, faStar, faNewspaper, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { BurgerSideBar } from './BurgerSideBar/BurgerSideBar'
import { BurgerLeftSideBar } from './BurgerLeftSideBar/BurgerLeftSideBar'


const Navbar = () => {
    const [isActive, setIsActive] = useState(0);
    const [isBurgerLeftActive, setIsBurgerLeftActive] = useState(false);
    const [isBurgerActive, setIsBurgerActive] = useState(false);

    const [isMaskShow, setIsMaskShow] = useState(false);

    return (
        <div className='navbar'>
            <div className='navbar-row'>
                <div className='responsive-icon__1023'>
                    <FontAwesomeIcon onClick={() => {
                        setIsMaskShow(!isMaskShow)
                        setIsBurgerLeftActive(!isBurgerLeftActive)
                    }} className='link' icon={faSearch} />
                </div>

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
                <div className='navbar-col col-10 position-fixed'>
                    <div className='navbar-section-right '  >
                        <ul className='nav-items-list '>
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

                </div>
                <div className={isBurgerActive === true ? 'burger-menu burger-menu-active' : 'burger-menu'} onClick={() => {
                    setIsMaskShow(!isMaskShow)
                    setIsBurgerActive(!isBurgerActive)
                }}>
                    <FontAwesomeIcon className='link' icon={faBars} />
                </div>
            </div>

            {/* Mask component */}
            <div onClick={() => {
                setIsMaskShow(false)
                setIsBurgerActive(false)
                setIsBurgerLeftActive(false)
            }
            } className={isMaskShow ? 'burger-sidebar-mask' : 'burger-sidebar-mask hide-mask'}></div>

            {/* BurgerLeftSideBar */}
            <BurgerLeftSideBar isBurgerLeftActive={isBurgerLeftActive} setIsBurgerLeftActive={setIsBurgerLeftActive} setIsMaskShow={setIsMaskShow} />


            {/* BurrgerSidebar */}
            <BurgerSideBar isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} setIsMaskShow={setIsMaskShow} />
        </div>
    )
}

export default Navbar