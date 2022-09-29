import React from 'react'
import './matchInfor.css'

const MatchInforContainer = ({match}) => {
    return (
        <div className="tab-content-infor">
            <div className="tab__match-detail-infor">
                <div className="tab-inner">
                    <span> match information</span>
                </div>
            </div>
            <div className="tab__match-infor-content">
                <div className="tab-match-infor-content-inner">
                    <div className="tab-content">
                        <div className="tab-content__icon">
                            <i className="fa-regular fa-calendar-days"></i>
                        </div>
                        <div className="tab-content__text">{match.date}</div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-content__icon">
                            <img src="https://www.livescore.com/ls-web-assets/svgs/common/referee-d0e056d51a19081940f87521c60a495b.svg" alt="" />                               </div>
                        <div className="tab-content__text">{match.referee}</div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-content__icon">
                            <i className="fa-solid fa-location-dot"></i>                                </div>
                        <div className="tab-content__text">{match.stadium}</div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-content__icon">
                            <i className="fa-solid fa-users"></i>                                </div>
                        <div className="tab-content__text">{match.tiket}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MatchInforContainer