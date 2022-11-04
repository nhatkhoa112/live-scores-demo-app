import React, { useState } from 'react';
import MatchResult from '../MatchResult/MatchResult';
import { Link } from 'react-router-dom'
import './tournamentResultDay.css'
import TourOverview from './TourOverview/TourOverview';
import TourMatches from './TourMatches/TourMatches';
import MatchTable from '../MatchDetailContent/MatchTable/MatchTable';

const tabs = [
    {
        id: 1,
        title: "Overview",
    },
    {
        id: 2,
        title: 'Matches'
    },
    {
        id: 3,
        title: "Table"
    }
]

const TournamentResultDay = ({ result, overview, tourId  }) => {
    const [isTabActive, setIsTabActive] = useState(1)
    const [isMatchesTabActive, setIsMatchesTabActive] = useState(1)
    const [isFavotite, setIsFavorite] = useState(false)
    return (
        <div className="tournament-matches-in-day">

            <div className="tour-header" >
                <div className="tour-header-link">
                    <Link to={`/football/${result.countryId}/${result.tourId}`} className="country-flag"><img src={result.flag} alt="" /></Link>
                    <Link to={`/football/${result.countryId}/${result.tourId}`} className="tour-infor">
                        <div className="tour-name">{result.tournament}</div>
                        <div className="country-name">{result.country}</div>
                    </Link>
                </div>
                <div className="wrappe-icon" ><i onClick={() => setIsFavorite(!isFavotite)} className={isFavotite ? "fa-regular fa-star icon-unhide icon__active" : "fa-regular fa-star icon-unhide"}></i></div>
            </div>

            {
                overview && <div className="tour-results-tabs__container">
                    {tabs.map(tab => <div onClick={() => setIsTabActive(tab.id)} key={tab.id} className={isTabActive === tab.id ? "tour-results-tab tour-results-tab__active" : "tour-results-tab"}>{tab.title}</div>)}
                </div>
            }



            {overview && isTabActive === 1 && <TourOverview result={result} setIsTabActive={setIsTabActive} setIsMatchesTabActive={setIsMatchesTabActive} />}

            {overview && isTabActive === 2 && <TourMatches result={result} setIsMatchesTabActive={setIsMatchesTabActive} isMatchesTabActive={isMatchesTabActive}  />}

            {overview && isTabActive === 3 && <MatchTable  tourId={tourId} />}



            {!overview && <div className="tour-matches">
                {result.matches.map((match, index) =>
                    <MatchResult key={index} match={match} result={result} />
                )}
            </div>}
        </div>
    )
}

export default TournamentResultDay