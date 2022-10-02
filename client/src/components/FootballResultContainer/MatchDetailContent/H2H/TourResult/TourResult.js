import React from 'react';
import { Link } from 'react-router-dom'
import './tourResult.css'
import MatchResultH2H from './MatchResult/MatchResultH2H';


const TourResult = ({ result }) => {
    return (
        <div className="tournament-matchs-in-day">
            {
                result && <div className="tour-header" >
                    <div className="tour-header-link">
                        <div className="country-flag"><img src={result.flag} alt="" /></div>
                        <div className="tour-infor">
                            <div className="tour-name">{result.name}</div>
                            <div className="country-name">{result.country}</div>
                        </div>
                    </div>
                    <div className="wrappe-icon" ><i className="fa-solid fa-chevron-right"></i></div>
                </div>
            }

           { result && <div className="tour-matchs">
                {result.matchs.map((match, index) =>
                    <MatchResultH2H key={index} match={match} result={result} />
                )}
            </div>}
        </div>
    )
}

export default TourResult