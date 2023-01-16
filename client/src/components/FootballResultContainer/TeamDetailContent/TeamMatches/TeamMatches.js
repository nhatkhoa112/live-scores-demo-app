import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './teamMatches.css';
import TournamentResultDay from '../../TournamentResultDay/TournamentResultDay'


const TeamMatches = ({ isMatchesTabActive, setIsMatchesTabActive, team, league }) => {
  const matchesSortedByDay = (matches) => {
    return matches.sort((a, b) => {
      let aDay = new Date(a.day).getDate()
      let bDay = new Date(b.day).getDate()
      let aMonth = new Date(a.day).getMonth()
      let bMonth = new Date(b.day).getMonth()
      let aYear = new Date(a.day).getFullYear()
      let bYear = new Date(b.day).getFullYear()

      if (aYear > bYear) { return -1 }
      else if (aYear < bYear) { return 1 }
      else {
        if (aMonth > bMonth) { return -1 }
        else if (aMonth < bMonth) { return 1 }
        else {
          if (aDay > bDay) { return -1 }
          else if (aDay < bDay) { return 1 }
        }
      }
    })
  }
  const [darkMarkShow, setDarkMarkShow] = useState(false)
  let arrayLeaguesName = []
  let allMatches = []
  team && team?.seasons.reverse()[0].leagues.map((league) => {
    allMatches = allMatches.concat(league.matches)
    arrayLeaguesName.push({ name: league.league.name, _id: league.league._id })
  }
  )
  let matchesSort = matchesSortedByDay(allMatches)
  const matchFixtures = matchesSort?.filter((match) => match.status === "Not yet")
  const matchResults = matchesSort?.filter((match) => match.status !== "Not yet")
  const [matchesFixture, setMatchesFixture] = useState(matchFixtures)
  const [matchesResult, setMatchesResult] = useState(matchResults)


  arrayLeaguesName.unshift({ name: "All Competions" })
  const [leagueChoose, setLeagueChoose] = useState(arrayLeaguesName[0])
  const { leagues } = useSelector((state) => state.league.leagues)



  return (
    <div className='team-matches__container'>
      <div className="tabs-container summary-tabs border-bottom">
        <div className="tab-inner summary-tab__inner">
          <div onClick={() => setIsMatchesTabActive(1)} className={isMatchesTabActive === 1 ? "sumarry-tab summary-tab-active" : "sumarry-tab"}>Fixtures</div>
          <div onClick={() => setIsMatchesTabActive(2)} className={isMatchesTabActive === 2 ? "sumarry-tab summary-tab-active" : "sumarry-tab"}>Results</div>
        </div>
      </div>

      {
        arrayLeaguesName?.length > 2 && (
          <div className="tour-choose">
            <div className="tour__row">
              <span onClick={() => setDarkMarkShow(true)} className="tour__row-icon">
                <i className="fa-regular fa-futbol"></i>
                <i className="fa-sharp fa-solid fa-caret-down"></i>
              </span>
              <span onClick={() => setDarkMarkShow(true)} className="tour__row-text">{leagueChoose.name}</span>
              {darkMarkShow && <div onClick={() => setDarkMarkShow(!darkMarkShow)} className="dark-mask"></div>}
              {darkMarkShow && <div className="tour-dropdown-menu">
                {arrayLeaguesName.map((league, index) => <div key={index} className="tour-choose__row">
                  <span onClick={() => {
                    setDarkMarkShow(false);
                    setLeagueChoose(league);
                    setMatchesFixture(league._id ? matchFixtures.filter((match) => match.league === league._id) : matchFixtures)
                    setMatchesResult(league._id ? matchResults.filter((match) => match.league === league._id) : matchResults)
                  }}>{league.name}</span>
                </div>)}
              </div>}
            </div>
          </div>)
      }



      {
        isMatchesTabActive === 1 && < div className='fixtures__container'>
          {
            matchesFixture?.lenth > 0
              ? <TournamentResultDay matches={matchesFixture} league={league} leagues={leagues} />
              : <div className="match_message">There are no games available</div>

          }
        </div>}


      {isMatchesTabActive === 2 && < div className='fixtures__container'>
        {
          matchesResult?.length > 0
            ? <TournamentResultDay matches={matchesResult} league={league} leagues={leagues} />
            : <div className="match_message">There are no games available</div>
        }
      </div>}

    </div >
  )
}

export default TeamMatches