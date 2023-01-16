import React from 'react'
import './playersItem.css'

const PlayerItem = ({ playersGoals, playersAssists, playersShootsOnTarget, playersYellowCard, playersRedCard, tabs, isTabActive, team }) => {
    console.log(playersGoals)
    return (

        <div className="players-all__container">
            <div className="players-all__inner">
                {
                    tabs.filter(tab => tab.id !== 6).map(tab =>
                        tab.id === isTabActive && < div key = { tab.id } className = "player-all__tab-content" >
                        <div className="stat-wrapper">
                            <div className="player-all__title">{tab.name}</div>
                            <div className="player-all__content">
                                {tab.id === isTabActive && (playersGoals || playersAssists || playersShootsOnTarget || playersYellowCard || playersRedCard ).map((player, index) => ( <div className="player-all__row" key={index}>
                                    {tab.id === 1 && <div className="player-position">{player.playerIdx}</div>}
                                    {tab.id === 2 && <div className="player-position">{player.playerAssistsIdx}</div>}
                                    {tab.id === 3 && <div className="player-position">{player.playerShootsOnTargetIdx}</div>}
                                    {tab.id === 4 && <div className="player-position">{player.playerYellowCardIdx}</div>}
                                    {tab.id === 5 && <div className="player-position">{player.playerRedCardIdx}</div>}
                                    <div className="player-flag"><img src={team.flagUrl} alt="" /></div>
                                    <div className="player-infor">
                                        <div className="player-infor__name">{player.name}</div>
                                        <div className="player-infor__team">{team.name}</div>
                                    </div>
                                    {tab.id === 1 &&<div className="player-index">{player.goals}</div>}
                                    {tab.id === 2 &&<div className="player-index">{player.assists}</div>}
                                    {tab.id === 3 &&<div className="player-index">{player.shootsOnTarget}</div>}
                                    {tab.id === 4 &&<div className="player-index">{player.yellowCard}</div>}
                                    {tab.id === 5 &&<div className="player-index">{player.redCard}</div>}
                                </div>))}
                            </div>
                        </div>
                        </div>
            )
                }
        </div>
        </div >
    )

}

export default PlayerItem