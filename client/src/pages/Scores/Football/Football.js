import React from 'react'
import './football.css'
import TournamentsContainer from './ContentLeftTournament/TournamentsContainer'
import FlashNews from './ContentRightFlashNews/FlashNews'
import ScoresShedule from './ContentCenter/ScoresShedule'


const Football = ({isTimeNav}) => {
    return (
        <div className="football-layout-container">
            <TournamentsContainer />
            <ScoresShedule  isTimeNav={isTimeNav} />
            <FlashNews />
        </div>
    )
}

export default Football