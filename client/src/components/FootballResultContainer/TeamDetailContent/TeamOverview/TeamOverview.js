import React from 'react'
import './teamOverview.css'

let awayTeam = {
  flag: "https://lsm-static-prod.livescore.com/high/enet/10260.png",
  name: "Manchester United"
}


const TeamOverview = ({ team }) => {
  console.log(team)
  return (
    <div className='team-overview__container'>
      <div className="team-overview__scoreboard">
        Next Match
      </div>
      <div className="team-overview__next">
        <div className="team-overview__next-inner">
          <div className="next__home">
            <div className="next__home-flag"><img src={team.flag} alt="" /></div>
            <div className="next__home-name">{team.name}</div>
          </div>
          <div className="next__infor">
            <div className="next__infor-time">
              <span className="infor__time">20 : 30</span>
              <span className="infor__day">15 October 2022</span>
            </div>
            <span className="next__vs">VS</span>
            <div className="next__infor-place">Goodison Park</div>
          </div>
          <div className="next__away">
            <div className="next__away-flag"><img src={awayTeam.flag} alt="" /></div>
            <div className="next__away-name">{awayTeam.name}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamOverview