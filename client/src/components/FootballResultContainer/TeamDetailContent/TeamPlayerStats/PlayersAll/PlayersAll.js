import React from 'react'
import './playersAll.css'


const PlayersAll = ({ tabs, setIsTabActive, team, playersSorted }) => {
  
  return (
    <div className="players-all__container">
      <div className="players-all__inner">
        {
          tabs.filter(tab => tab.id !== 6).map(tab =>
            <div key={tab.id} className="player-all__tab-content">
              <div className="stat-wrapper">
                <div className="player-all__title">{tab.name}</div>
                <div className="player-all__content">
                  {tab.id === 1 && playersSorted.byGoals.map((player, index) => (index < 5 && <div className="player-all__row" key={player.id}>
                    <div className="player-position">{player.playerIdx}</div>
                    <div className="player-flag"><img src={team.flag} alt="" /></div>
                    <div className="player-infor">
                      <div className="player-infor__name">{player.name}</div>
                      <div className="player-infor__team">{team.name}</div>
                    </div>
                    <div className="player-index">{player.goals}</div>
                  </div>))}
                  {tab.id === 2 && playersSorted.byAssists.map((player, index) => (index < 5 && <div className="player-all__row" key={player.id}>
                    <div className="player-position">{player.playerAssistsIdx}</div>
                    <div className="player-flag"><img src={team.flag} alt="" /></div>
                    <div className="player-infor">
                      <div className="player-infor__name">{player.name}</div>
                      <div className="player-infor__team">{team.name}</div>
                    </div>
                    <div className="player-index">{player.assists}</div>
                  </div>))}
                  {tab.id === 3 && playersSorted.byShootsOnTarget.map((player, index) => (index < 5 && <div className="player-all__row" key={player.id}>
                    <div className="player-position">{player.playerShootsOnTargetIdx}</div>
                    <div className="player-flag"><img src={team.flag} alt="" /></div>
                    <div className="player-infor">
                      <div className="player-infor__name">{player.name}</div>
                      <div className="player-infor__team">{team.name}</div>
                    </div>
                    <div className="player-index">{player.shootsOnTarget}</div>
                  </div>))}
                  {tab.id === 4 && playersSorted.byYellowCard.map((player, index) => (index < 5 && <div className="player-all__row" key={player.id}>
                    <div className="player-position">{player.playerYellowCardIdx}</div>
                    <div className="player-flag"><img src={team.flag} alt="" /></div>
                    <div className="player-infor">
                      <div className="player-infor__name">{player.name}</div>
                      <div className="player-infor__team">{team.name}</div>
                    </div>
                    <div className="player-index">{player.yellowCard}</div>
                  </div>))}
                  {tab.id === 5 && playersSorted.byRedCard.map((player, index) => (index < 5 && <div className="player-all__row" key={player.id}>
                    <div className="player-position">{player.playerRedCardIdx}</div>
                    <div className="player-flag"><img src={team.flag} alt="" /></div>
                    <div className="player-infor">
                      <div className="player-infor__name">{player.name}</div>
                      <div className="player-infor__team">{team.name}</div>
                    </div>
                    <div className="player-index">{player.redCard}</div>
                  </div>))}
                  <button onClick={() => setIsTabActive(tab.id)} className="player-all__button">See All</button>
                </div>
              </div>
            </div>)
        }
      </div>
    </div>
  )
}

export default PlayersAll