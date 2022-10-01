import React, { useState } from 'react'
import './matchResult.css';
import {Link} from 'react-router-dom'



const MatchResult = ({ match, result }) => {
    const [isFavoriteChoose, setIsFavoriteChoose] = useState(false)
    return (
        <div className="match-row" key={match.matchId}>
            <div className="match-link">
                <div className="match-container">
                    <Link to={`/football/${result.countryId}/${result.tourId}/${match.matchId}`} className="status-time">
                        {match.status === 'fulltime' ? "FT" : match.status === 'not yet' ? match.time : 'Live'}
                    </Link>
                    <Link  to={`/football/${result.countryId}/${result.tourId}/${match.matchId}`} onClick={() => console.log("click")} className="match-infor">
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
                    </Link>
                    <div className="favorite-icon">
                        <i onClick={() => setIsFavoriteChoose(!isFavoriteChoose)}
                            className={match.status === 'not yet' && !isFavoriteChoose ?
                                'fa-regular fa-star icon-unhide' :
                                match.status === 'not yet' && isFavoriteChoose ?
                                    "fa-solid fa-star icon-unhide" : 'fa-regular fa-star'}>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MatchResult