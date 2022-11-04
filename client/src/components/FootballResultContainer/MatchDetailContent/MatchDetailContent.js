import React, { useState } from 'react'
import './matchDetailContent.css'
import { results } from '../../../utils/result';
import soccerField from '../../../assets/images/soccer-field.svg';
import MatchInfor from './MatchInfor/MatchInfor';
import MatchSummary from './MatchSummary/MatchSummary';
import MatchStats from './MatchStats/MatchStats';
import MatchLineUp from './MatchLineUp/MatchLineUp';
import MatchTable from './MatchTable/MatchTable';
import MatchNews from './MatchNews/MatchNews';
import MatchH2H from './H2H/MatchH2H';
import { Link } from 'react-router-dom'
import { teams } from '../../../utils/table'


const tabs = [
    { title: "Info", index: 1 },
    { title: "Summary", index: 2 },
    { title: "Stats", index: 3 },
    { title: "Line-Up", index: 4 },
    { title: "Table", index: 5 },
    { title: "News", index: 6 },
    { title: "H2H", index: 7 },
]


const MatchDetailContent = ({ tourId, countryId, matchId }) => {
    const tour = results.find((result => result.countryId === parseInt(countryId) && result.tourId === parseInt(tourId)));
    const match = tour.matches.find(match => match.matchId === parseInt(matchId))
    const [isStreamingShow, setIsStreamingShow] = useState(false)
    const [isTrackerShow, setIsTrackerShow] = useState(false)
    const [isTabActive, setIsTabActive] = useState(2)
    let homeTeam = teams.find(team => team.name === match.homeTeam.name) || teams[13]
    let awayTeam = teams.find(team => team.name === match.awayTeam.name) || teams[18]
    


    return (
        <div className="content-center match-detail-content">
            <div className="tour-header">
                <div className="tour-infor">
                    <div className="country-flag">
                        <img src={tour.flag} alt="" />
                    </div>
                    <div className="tour-infor">
                        <div className="tour-name">{tour.tournament}</div>
                        <div className="country-name">{tour.country}</div>
                    </div>
                </div>
                <div className="tour-icon-wrapper">
                    <div className="streaming-icon">
                        <i onClick={() => {
                            setIsStreamingShow(!isStreamingShow)
                            setIsTrackerShow(false)
                        }} className={isStreamingShow ? "fa-solid fa-video icon-active" : "fa-solid fa-video"}></i>
                    </div>
                    <div className="tracker-icon">
                        <i onClick={() => {
                            setIsStreamingShow(false)
                            setIsTrackerShow(!isTrackerShow)
                        }} className={isTrackerShow ? "fa-solid fa-film icon-active" : "fa-regular fa-film"}></i>
                    </div>
                </div>
            </div>
            {isStreamingShow && <div className="video-block-wrapped">
                <iframe width="853" height="480" src="https://www.youtube.com/embed/a3jVLGM9gP4" title="EXTENDED HIGHLIGHTS: EVERTON 1-0 WEST HAM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>}
            {isTrackerShow && <div className="tracker-block-wrapped">
                <img src={soccerField} alt="" />
            </div>}
            <div className="match-result">
                <div className="home-team">
                    <Link to={`/football/team/1/${homeTeam.teamId}`} className="match-team-infor">
                        <div className="team-name">{match.homeTeam.name}</div>
                        <div className="team-flag"><img src={match.homeTeam.flag} alt="" /></div>
                    </Link>


                    {
                        match.status !== "not yet" && <div className="team-scores-1">{match.homeTeam.scores}</div>
                    }
                </div>
                <span>VS</span>
                <div className="away-team">

                    <Link to={`/football/team/1/${awayTeam.teamId}`} className="match-team-infor">
                        <div id="flag-team"><img src={match.awayTeam.flag} alt="" /></div>
                        <div id="name-team">{match.awayTeam.name}</div>
                    </Link>

                    {
                        match.status !== "not yet" && <div className="team-scores-1">{match.awayTeam.scores}</div>
                    }
                </div>
            </div>
            <div className="tabs-container">
                <div className='tab-inner overflow-x'>
                    {tabs.map((tab) => <div onClick={() => setIsTabActive(tab.index)} key={tab.index} className={tab.index === isTabActive ? "tab tab-active " : "tab "}>{tab.title}</div>)}
                </div>
            </div>

            {/* Match info */}

            {isTabActive === 1 && <MatchInfor match={match} />}

            {/* Match summary */}

            {isTabActive === 2 && <MatchSummary match={match} />}

            {/* Match stats */}

            {isTabActive === 3 && <MatchStats match={match} />}

            {/* Match line up */}

            {isTabActive === 4 && <MatchLineUp match={match} />}

            {/* Match ttable */}

            {isTabActive === 5 && <MatchTable match={match} tourId={tourId} />}

            {/* Match News */}

            {isTabActive === 6 && <MatchNews match={match} />}

            {/* Match H2H */}

            {isTabActive === 7 && <MatchH2H match={match} />}





        </div>
    )
}

export default MatchDetailContent