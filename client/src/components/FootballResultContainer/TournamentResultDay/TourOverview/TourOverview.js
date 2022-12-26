import React from 'react'
import './tourOverview.css'
import MatchResult from '../../MatchResult/MatchResult';
import MatchTable from '../../MatchDetailContent/MatchTable/MatchTable';


const TourOverview = ({ league, setIsMatchesTabActive, setIsTabActive }) => {
    const matches = league && league.seasons && league.seasons.reverse()[0].matches
    const matchesFixtures = matches && matches.filter(match => match.status === "Not yet")
    const matchesResult = matches && matches.filter(match => match.status === "FT")

    console.log({
        msg: "hello"
        , matchesResult
    })

    return (
        <div className="tour-matches">
            { matchesFixtures?.length !== 0 && (<div className="tour-match__header">
                <span className="tour-match__header-title">Fixtures</span>
                <span onClick={() => {
                    setIsMatchesTabActive(1);
                    setIsTabActive(2)
                }} className="tour-match__header-icon">
                    <i className="fa-solid fa-chevron-right"></i>
                </span>
            </div>)}
            { matchesFixtures?.reverse().map((match, index) =>
                index < 5 && <MatchResult key={index} match={match} league={league} />
            )}
            {matchesResult?.length !== 0  && (<div className="tour-match__header">
                <span className="tour-match__header-title">Results</span>
                <span onClick={() => {
                    setIsMatchesTabActive(2);
                    setIsTabActive(2)
                }} className="tour-match__header-icon">
                    <i className="fa-solid fa-chevron-right"></i>
                </span>

            </div>)}
            {matchesResult?.reverse().map((match, index) =>
                index < 5 && <MatchResult key={index} match={match} league={league} />
            )}

            <div className="tour-match__header">
                <span className="tour-match__header-title">Table</span>
                <span onClick={() => {
                    setIsTabActive(3)
                }} className="tour-match__header-icon">
                    <i className="fa-solid fa-chevron-right"></i>
                </span>
            </div>
            <MatchTable mini={true} leagueId={league._id} league={league} />
        </div>
    )
}

export default TourOverview