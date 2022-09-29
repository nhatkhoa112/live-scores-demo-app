import React from 'react'
import FootballResultContainer from '../../../../components/FootballResultContainer/FootballResultContainer'
import TimeNav from '../../../../components/TimeNavigation/TimeNav'
import './scoresShedule.css'


const ScoresShedule = ({isTimeNav, tourId , countryId}) => {

    return (
        <div className="content-center scores-schedule">
            {isTimeNav && <TimeNav />}
            <FootballResultContainer tourId={tourId} countryId={countryId} />
        </div>
    )
}

export default ScoresShedule