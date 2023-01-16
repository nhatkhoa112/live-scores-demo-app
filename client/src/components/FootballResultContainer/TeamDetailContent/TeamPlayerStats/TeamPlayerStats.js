import React, { useState } from 'react'
import PlayersAll from './PlayersAll/PlayersAll'
import PlayersItem from './PlayersItem/PlayerItem'
import './teamPlayerStats.css'

const tabs = [
  {
    id: 6,
    name: "all"
  },
  {
    id: 1,
    name: "goals"
  },
  {
    id: 2,
    name: "assists"
  },
  {
    id: 3, name: "shots on target "
  },
  {
    id: 4,
    name: "Yelow card "
  },
  {
    id: 5,
    name: "red card "
  }
]



const TeamPlayerStats = ({ team }) => {
  let arrayLeaguesName = []
  let allMatches = []
  team && team?.seasons.reverse()[0].leagues.map((league) => {
    allMatches = allMatches.concat(league.matches)
    arrayLeaguesName.push({ name: league.league.name, _id: league.league._id })
  }
  )
  let playersStat = []
  const [darkMarkShow, setDarkMarkShow] = useState(false)
  const [isTabActive, setIsTabActive] = useState(6)
  const [leagueChoose, setLeagueChoose] = useState(arrayLeaguesName[0])
  const leagues = team.seasons?.reverse()[0].leagues
  const [playersOfLeague, setPlayersOfLeague] = useState(leagues.find((league) => league.league._id === leagueChoose._id).players)
  playersOfLeague.map((player) => {
    const stat = player.seasons?.reverse()[0].leagues.find((league) => league.league === leagueChoose._id)
    playersStat.push({ name: player.name, goals: stat.goals, assists: stat.assists, shootsOnTarget: stat.shootsOnTarget, yellowCard: stat.yellowCard, redCard: stat.redCard, injuryStatus: stat.injuryStatus })
  })

  let playersSorted = {byGoals: [], byAssists:[] , byShootsOnTarget: [], byYellowCard: [], byRedCard: [], playerIdx:0 }



playersSorted.byGoals = [...(playersStat.sort((a, b) => b.goals - a.goals))]
playersSorted.byAssists = [...(playersStat.sort((a, b) => b.assists - a.assists))]
playersSorted.byShootsOnTarget = [...(playersStat.sort((a, b) => b.shootsOnTarget - a.shootsOnTarget))]
playersSorted.byYellowCard = [...(playersStat.sort((a, b) => b.yellowCard - a.yellowCard))]
playersSorted.byRedCard = [...(playersStat.sort((a, b) => b.redCard - a.redCard))]

for (let idx = 0; idx < playersSorted.byGoals.length; idx++) {
  if (idx === 0) {
    playersSorted.byGoals[idx].playerIdx = 1;
  } else {
    if (playersSorted.byGoals[idx].goals < playersSorted.byGoals[idx - 1].goals) {
      playersSorted.byGoals[idx].playerIdx = playersSorted.byGoals[idx - 1].playerIdx + 1
    } else {
      playersSorted.byGoals[idx].playerIdx = playersSorted.byGoals[idx - 1].playerIdx
    }
  }
}


for (let idx = 0; idx < playersSorted.byGoals.length; idx++) {
  if (idx === 0) {
    playersSorted.byGoals[idx].playerIdx = 1;
  } else {
    if (playersSorted.byGoals[idx].goals < playersSorted.byGoals[idx - 1].goals) {
      playersSorted.byGoals[idx].playerIdx = playersSorted.byGoals[idx - 1].playerIdx + 1
    } else {
      playersSorted.byGoals[idx].playerIdx = playersSorted.byGoals[idx - 1].playerIdx
    }
  }
}

for (let idx = 0; idx < playersSorted.byAssists.length; idx++) {
  if (idx === 0) {
    playersSorted.byAssists[idx].playerAssistsIdx = 1;
  } else {
    if (playersSorted.byAssists[idx].assists < playersSorted.byAssists[idx - 1].assists) {
      playersSorted.byAssists[idx].playerAssistsIdx = playersSorted.byAssists[idx - 1].playerAssistsIdx + 1
    } else {
      playersSorted.byAssists[idx].playerAssistsIdx = playersSorted.byAssists[idx - 1].playerAssistsIdx
    }
  }
}

for (let idx = 0; idx < playersSorted.byShootsOnTarget.length; idx++) {
  if (idx === 0) {
    playersSorted.byShootsOnTarget[idx].playerShootsOnTargetIdx = 1;
  } else {
    if (playersSorted.byShootsOnTarget[idx].shootsOnTarget < playersSorted.byShootsOnTarget[idx - 1].shootsOnTarget) {
      playersSorted.byShootsOnTarget[idx].playerShootsOnTargetIdx = playersSorted.byShootsOnTarget[idx - 1].playerShootsOnTargetIdx + 1
    } else {
      playersSorted.byShootsOnTarget[idx].playerShootsOnTargetIdx = playersSorted.byShootsOnTarget[idx - 1].playerShootsOnTargetIdx
    }
  }
}

for (let idx = 0; idx < playersSorted.byYellowCard.length; idx++) {
  if (idx === 0) {
    playersSorted.byYellowCard[idx].playerYellowCardIdx = 1;
  } else {
    if (playersSorted.byYellowCard[idx].yellowCard < playersSorted.byYellowCard[idx - 1].yellowCard) {
      playersSorted.byYellowCard[idx].playerYellowCardIdx = playersSorted.byYellowCard[idx - 1].playerYellowCardIdx + 1
    } else {
      playersSorted.byYellowCard[idx].playerYellowCardIdx = playersSorted.byYellowCard[idx - 1].playerYellowCardIdx
    }
  }
}

for (let idx = 0; idx < playersSorted.byRedCard.length; idx++) {
  if (idx === 0) {
    playersSorted.byRedCard[idx].playerRedCardIdx = 1;
  } else {
    if (playersSorted.byRedCard[idx].redCard < playersSorted.byRedCard[idx - 1].redCard) {
      playersSorted.byRedCard[idx].playerRedCardIdx = playersSorted.byRedCard[idx - 1].playerRedCardIdx + 1
    } else {
      playersSorted.byRedCard[idx].playerRedCardIdx = playersSorted.byRedCard[idx - 1].playerRedCardIdx
    }
  }
}



  return (
    <div className='team-playerStats__container'>
      <div className="players-stat-tabs__container">
        {tabs.map(tab => <div key={tab.id} onClick={() => setIsTabActive(tab.id)} className={isTabActive === tab.id ? "players-stat-tab players-stat-tab__active" : "players-stat-tab"}>{tab.name}</div>)}
      </div>

      {
        arrayLeaguesName?.length > 1 && (
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
                    setPlayersOfLeague(leagues.find((newLeague) => newLeague.league._id === league._id).players)
                  }}>{league.name}</span>
                </div>)}
              </div>}
            </div>
          </div>)
      }




      {
        isTabActive === 6 && <PlayersAll setIsTabActive={setIsTabActive} tabs={tabs} team={team} playersSorted={playersSorted} />
      }

      {
        isTabActive === 1 && <PlayersItem isTabActive={isTabActive} tabs={tabs} team={team} playersGoals={playersSorted.byGoals} />
      }

      {
        isTabActive === 2 && <PlayersItem isTabActive={isTabActive} tabs={tabs} team={team} playersAssists={playersSorted.byAssists} />
      }

      {
        isTabActive === 3 && <PlayersItem isTabActive={isTabActive} tabs={tabs} team={team} playersShootsOnTarget={playersSorted.byShootsOnTarget} />
      }

      {
        isTabActive === 4 && <PlayersItem isTabActive={isTabActive} tabs={tabs} team={team} playersYellowCard={playersSorted.byYellowCard} />
      }

      {
        isTabActive === 5 && <PlayersItem isTabActive={isTabActive} tabs={tabs} team={team} playersRedCard={playersSorted.byRedCard} />
      }


    </div>
  )
}

export default TeamPlayerStats