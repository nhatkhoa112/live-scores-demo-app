import React from 'react'
import FootballResultContainer from '../../../../components/FootballResultContainer/FootballResultContainer'
import TimeNav from '../../../../components/TimeNavigation/TimeNav'
import './scoresShedule.css'


const ScoresShedule = ({isTimeNav, leagueId , countryId}) => {

    return (
        <div className="content-center scores-schedule">
            {isTimeNav && <TimeNav />}
            <FootballResultContainer leagueId={leagueId} countryId={countryId}  />
        </div>
    )
}

export default ScoresShedule