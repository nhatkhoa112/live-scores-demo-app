import React from 'react'
import './tourMatches.css'
import MatchResult from '../../MatchResult/MatchResult';

const tabs = [
  { id: 1, title: "Fixtures" },
  { id: 2, title: "Result" },

]


const TourMatches = ({ result, isMatchesTabActive, setIsMatchesTabActive }) => {
  return (
    <div className="tour-matches__container">
      <div className="tour-tabs__container">
        {tabs.map(tab => <div key={tab.id} onClick={() => setIsMatchesTabActive(tab.id)} className={isMatchesTabActive === tab.id ? "table-tab table-tab__active" : "table-tab"}>{tab.title}</div>)}
      </div>


      {isMatchesTabActive === 1 && result.matches.filter(match => match.status === "not yet").map((match, index) =>
        <MatchResult key={index} match={match} result={result} />
      )}

      {isMatchesTabActive === 2 && result.matches.filter(match => match.status !== "not yet").map((match, index) =>
        <MatchResult key={index} match={match} result={result} />
      )}

    </div>
  )
}

export default TourMatches