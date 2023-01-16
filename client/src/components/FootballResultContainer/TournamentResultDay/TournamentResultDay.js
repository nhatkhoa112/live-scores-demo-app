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

const TournamentResultDay = ({ league, overview, leagueId, matches, country, leagues }) => {
    const [isTabActive, setIsTabActive] = useState(1)
    const [isMatchesTabActive, setIsMatchesTabActive] = useState(1)
    const [isFavotite, setIsFavorite] = useState(false)

    let seasonLeague
    if (!matches && league.seasons !== undefined) {
        seasonLeague = league.seasons[league.seasons.length - 1]
    }


    let matchesLeague = league && league.seasons && league.seasons.reverse()[0].matches


    return (

        <div className="tournament-matches-in-day">

            {!leagues && !matches && seasonLeague && <div className="tour-header" >
                <div className="tour-header-link">
                    <Link to={`/football/${seasonLeague.country._id}/${leagueId}`} className="country-flag"><img src={seasonLeague.country.imageUrl} alt="" /></Link>
                    <Link to={`/football/${seasonLeague.country._id}/${leagueId}`} className="tour-infor">
                        <div className="tour-name">{league.name}</div>
                        <div className="country-name">{seasonLeague.country.name}</div>
                    </Link>
                </div>
                <div className="wrappe-icon" ><i onClick={() => setIsFavorite(!isFavotite)} className={isFavotite ? "fa-regular fa-star icon-unhide icon__active" : "fa-regular fa-star icon-unhide"}></i></div>
            </div>}

            {
                overview && <div className="tour-results-tabs__container">
                    {tabs.map((tab, index) => league.isTab ? (index < 3 && <div onClick={() => setIsTabActive(tab.id)} key={tab.id} className={isTabActive === tab.id ? "tour-results-tab tour-results-tab__active" : "tour-results-tab"}>{tab.title}</div>)
                        : (index < 2 && <div onClick={() => setIsTabActive(tab.id)} key={tab.id} className={isTabActive === tab.id ? "tour-results-tab tour-results-tab__active" : "tour-results-tab"}>{tab.title}</div>))}
                </div>
            }



            {overview && isTabActive === 1 && <TourOverview league={league} setIsTabActive={setIsTabActive} setIsMatchesTabActive={setIsMatchesTabActive} />}

            {overview && isTabActive === 2 && <TourMatches country={country} league={league} matches={matchesLeague} setIsMatchesTabActive={setIsMatchesTabActive} isMatchesTabActive={isMatchesTabActive} />}

            {overview && isTabActive === 3 && <MatchTable league={league} leagueId={league._id} />}
 





            {!leagues && matches && matches.length > 0 && <>
                {
                    matches.map((match, index) => {
                        const country = match && match.league.seasons?.reverse()[0].country
                        const leagueIndex = match && match.league
                        const prevMatch = index > 0 && matches[index - 1]
                        const prevLeague = prevMatch && prevMatch.league

                        return (
                            <div key={index}>
                                {
                                    leagueIndex._id !== prevLeague._id &&
                                    (<div className="tour-header">
                                        <div className="tour-header-link">
                                            <Link to={`/football/${country._id}/${leagueId}`} className="country-flag"><img src={country.imageUrl} alt="" /></Link>
                                            <Link to={`/football/${country._id}/${leagueId}`} className="tour-infor">
                                                <div className="tour-name">{match.league.name}</div>
                                                <div className="country-name">{country.name}</div>
                                            </Link>
                                        </div>
                                        <div className="wrappe-icon" ><i onClick={() => setIsFavorite(!isFavotite)} className={isFavotite ? "fa-regular fa-star icon-unhide icon__active" : "fa-regular fa-star icon-unhide"}></i></div>
                                    </div>)
                                }

                                <div className="tour-matches">
                                    <MatchResult match={match} country={country} league={league} />
                                </div>
                            </div>)

                    })
                }
            </>
            }

            {leagues && matches && matches.length > 0 && <>
                {
                    matches.map((match, index) => {
                        const leagueOfMatch = leagues?.find((league) => league._id === match.league)
                        const country = leagueOfMatch.seasons?.reverse()[0].country
                        const leagueIndex = match && match.league
                        const prevMatch = index > 0 && matches[index - 1]
                        const prevLeague = prevMatch && prevMatch.league
                        return (
                            <div key={index}>
                                {
                                    (leagueIndex._id !== prevLeague._id) ||  (leagueIndex !== prevLeague)  &&
                                    (<div className="tour-header">
                                        <div className="tour-header-link">
                                            <Link to={`/football/${country._id}/${leagueId}`} className="country-flag"><img src={country.imageUrl} alt="" /></Link>
                                            <Link to={`/football/${country._id}/${leagueId}`} className="tour-infor">
                                                <div className="tour-name">{match.league.name}</div>
                                                <div className="country-name">{country.name}</div>
                                            </Link>
                                        </div>
                                        <div className="wrappe-icon" ><i onClick={() => setIsFavorite(!isFavotite)} className={isFavotite ? "fa-regular fa-star icon-unhide icon__active" : "fa-regular fa-star icon-unhide"}></i></div>
                                    </div>)
                                }

                                <div className="tour-matches">
                                    <MatchResult match={match} country={country} league={league} />
                                </div>
                            </div>)

                    })
                }
            </>
            }



        </div>
    )
}

export default TournamentResultDay