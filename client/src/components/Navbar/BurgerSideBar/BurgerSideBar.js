import React from 'react'
import './burgerSideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faRectangleAd, faMobileScreen, faLock } from '@fortawesome/free-solid-svg-icons'
import { faSun, faPlusSquare, faCircleQuestion, faAddressBook, } from '@fortawesome/free-regular-svg-icons'
import logo from '../../../assets/images/soccer-ball.svg'

const sidebarItems = [
    { title: "Settings", icon: faSun },
    { title: "What's New?", icon: faPlusSquare },
    { title: "FAQ", icon: faCircleQuestion },
    { title: "Contact", icon: faAddressBook },
    { title: "Advertise", icon: faRectangleAd },
    { title: "Mobile", icon: faMobileScreen },
    { title: "Privacy Notice", icon: faLock }
]

export const BurgerSideBar = ({ isBurgerActive, setIsBurgerActive }) => {


    return (
        <div className='burger-sidebar'>
            <div onClick={() => setIsBurgerActive(false)} className={isBurgerActive ? 'burger-sidebar-mask' : 'burger-sidebar-mask hide-mask'}></div>
            <div className={isBurgerActive ? 'burger-sidebar-body ' : 'burger-sidebar-body hide-sidebar-body'}>
                <div className="burger-sidebar-content">
                    <div className="logo-icon">
                        <FontAwesomeIcon icon={faXmark} onClick={() => setIsBurgerActive(false)} />
                        <div className='sidebar-col'>
                            <div className='sidebar-logo-banner'>
                                <div className='sidebar-logo-img'>
                                    <img src={logo} alt='' />
                                </div>
                                <div className='sidebar-banner-text'>
                                    LiveScores
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-content-text">
                        <ul className="sidebar-content-items-list">
                            {
                                sidebarItems.map((item, index) =>
                                    <li className="sidebar-content-item" key={index} onClick={() => {
                                        setIsBurgerActive(false)
                                    }}>
                                        <FontAwesomeIcon icon={item.icon} />
                                        <span className="text">{item.title}</span>
                                    </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>)
}
