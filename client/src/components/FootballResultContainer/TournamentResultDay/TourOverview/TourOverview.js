import React from 'react'
import './tourOverview.css'
import MatchResult from '../../MatchResult/MatchResult';
import MatchTable from '../../MatchDetailContent/MatchTable/MatchTable';


const TourOverview = ({ result, setIsMatchesTabActive, setIsTabActive }) => {
    return (
        <div className="tour-matches">
            <div className="tour-match__header">
                <span className="tour-match__header-title">Fixtures</span>
                <span onClick={() => {
                    setIsMatchesTabActive(1);
                    setIsTabActive(2)
                }} className="tour-match__header-icon">
                    <i className="fa-solid fa-chevron-right"></i>

                </span>
            </div>
            {result.matches.filter(match => match.status === "not yet").map((match, index) =>
                index < 5 && <MatchResult key={index} match={match} result={result} />
            )}
            <div className="tour-match__header">
                <span className="tour-match__header-title">Results</span>
                <span onClick={() => {
                    setIsMatchesTabActive(2);
                    setIsTabActive(2)
                }} className="tour-match__header-icon">
                    <i className="fa-solid fa-chevron-right"></i>

                </span>

            </div>
            {result.matches.filter(match => match.status !== "not yet").map((match, index) =>
                index < 5 && <MatchResult key={index} match={match} result={result} />
            )}

            <div className="tour-match__header">
                <span className="tour-match__header-title">Table</span>
                <span onClick={() => {
                    setIsTabActive(3)
                }} className="tour-match__header-icon">
                    <i className="fa-solid fa-chevron-right"></i>

                </span>

            </div>
            <MatchTable mini={true} tourId={result.tourId} />
        </div>
    )
}

export default TourOverview