import React from 'react';
import MatchResult from '../MatchResult/MatchResult';
import {Link} from 'react-router-dom'
import './tournamentResultDay.css'


const TournamentResultDay = ({result}) => {
    return (
        <div className="tournament-matches-in-day">
            <div className="tour-header" >
                <Link to={`/football/${result.countryId}/${result.tourId}`} className="tour-header-link">
                    <div className="country-flag"><img src={result.flag} alt="" /></div>
                    <div className="tour-infor">
                        <div className="tour-name">{result.tournament}</div>
                        <div className="country-name">{result.country}</div>
                    </div>
                </Link>
                <div className="wrappe-icon" ><i className="fa-solid fa-chevron-right"></i></div>
            </div>
            <div className="tour-matches">
                {result.matches.map((match, index) =>
                    <MatchResult key={index}  match={match} result={result} />
                    )}
            </div>
        </div>
    )
}

export default TournamentResultDay