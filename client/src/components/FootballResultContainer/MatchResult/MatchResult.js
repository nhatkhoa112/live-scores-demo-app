import React, { useState  } from 'react'
import './matchResult.css';
import { Link } from 'react-router-dom'

const MatchResult = ({ match, country, league }) => {
    const getDayMatch = (day) => {
        let dayArray = day.split(" ")
        return dayArray[1] + " " + dayArray[2]
    }
    const getTimeMatch = (day) => {
        let dayArray = day.split(" ")
        let timeArray = dayArray[4].split(":")
        return timeArray[0] + " " + timeArray[1]
    }

    const countryLeague = league && league.seasons &&  league.seasons.reverse()[0].country
    

    const [isFavoriteChoose, setIsFavoriteChoose] = useState(false)
    return (
        <div className="match-row" key={match.matchId}>
            <div className="match-link">
                <div className="match-container">
                    <div  className="status-time">
                        <span className="text-center">{
                            getDayMatch(match.day)
                        }</span>
                        <span>{match.status === 'FT' ? "FT" : match.status === 'Not yet' ? getTimeMatch(match.day) : 'Live'}</span>
                    </div>
                 <Link to={`/football/${country ? country._id : countryLeague._id}/${match.league._id}/${match._id}`}  className="match-infor">
                        <div className="home-team">
                            <div className="team-infor">
                                <span className="team-flag"><img src={match.homeTeam.team.flagUrl} alt="" /></span>
                                <span className="team-name">{match.homeTeam.team.name}</span>
                            </div>
                            <span className='team-scores'>{match.status !== 'Not yet' ? match.homeTeam.score : ''}</span>
                        </div>
                        <div className="away-team">  <div className="team-infor">
                            <span className="team-flag"><img src={match.awayTeam.team.flagUrl} alt="" /></span>
                            <span className="team-name">{match.awayTeam.team.name}</span>
                        </div>
                            <span className='team-scores'>{match.status !== 'Not yet' ? match.awayTeam.score : ''}</span>
                        </div>
                    </Link> 
                    <div className="favorite-icon">
                        <i onClick={() => setIsFavoriteChoose(!isFavoriteChoose)}
                            className={match.status === 'Not yet' && !isFavoriteChoose ?
                                'fa-regular fa-star icon-unhide' :
                                match.status === 'Not yet' && isFavoriteChoose ?
                                    "fa-solid fa-star icon-unhide" : 'fa-regular fa-star'}>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MatchResult