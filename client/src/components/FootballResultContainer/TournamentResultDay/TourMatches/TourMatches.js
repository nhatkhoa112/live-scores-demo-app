import React from 'react'
import './tourMatches.css'
import MatchResult from '../../MatchResult/MatchResult';

const tabs = [
  { id: 1, title: "Fixtures" },
  { id: 2, title: "Result" },

]



const TourMatches = ({ matches, isMatchesTabActive, setIsMatchesTabActive, league, country }) => {

  const fixturesMatches = matches && matches.reverse().filter(match => match.status === "Not yet")
  const resultsMatches = matches && matches.reverse().filter(match => match.status !== "Not yet")

  return (
    <div className="tour-matches__container">
      <div className="tour-tabs__container">
        {tabs.map(tab => <div key={tab.id} onClick={() => setIsMatchesTabActive(tab.id)} className={isMatchesTabActive === tab.id ? "table-tab table-tab__active" : "table-tab"}>{tab.title}</div>)}
      </div>


      {(isMatchesTabActive === 1 && fixturesMatches?.length > 0 ) ? fixturesMatches?.map((match, index) =>
        <MatchResult key={index} match={match} league={league} />)
        : isMatchesTabActive === 1 && <div className="match_message">There are no games available</div>
      }



      {(isMatchesTabActive === 2 && resultsMatches?.length > 0) ? resultsMatches?.map((match, index) =>
        <MatchResult key={index} match={match} league={league} />)
        : isMatchesTabActive === 2 &&  <div className="match_message">There are no games available</div>
        }

    </div>
  )
}

export default TourMatches