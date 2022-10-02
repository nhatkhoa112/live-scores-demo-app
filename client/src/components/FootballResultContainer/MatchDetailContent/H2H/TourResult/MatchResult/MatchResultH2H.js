import React, { useState } from 'react'
import './matchResultH2H.css';
import {Link} from 'react-router-dom'



const MatchResultH2H = ({ match, result }) => {
    const [isFavoriteChoose, setIsFavoriteChoose] = useState(false);
    return (
        <div className="match-row" key={match.matchId}>
            <div className="match-link">
                <div className="match-container">
                    <div className="status-time-1   ">
                        {match.date}
                    </div>
                    <div className="match-infor">
                        <div className="home-team">
                            <div className="team-infor">
                                <span className="team-flag"><img src={match.homeTeam.flag} alt="" /></span>
                                <span className="team-name">{match.homeTeam.name}</span>
                            </div>
                            <span className='team-scores'>{match.status !== 'not yet' ? match.homeTeam.scores : ''}</span>
                        </div>
                        <div className="away-team">  <div className="team-infor">
                            <span className="team-flag"><img src={match.awayTeam.flag} alt="" /></span>
                            <span className="team-name">{match.awayTeam.name}</span>
                        </div>
                            <span className='team-scores'>{match.status !== 'not yet' ? match.awayTeam.scores : ''}</span>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default MatchResultH2H