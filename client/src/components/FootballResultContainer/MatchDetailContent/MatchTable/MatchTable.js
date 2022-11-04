import React, { useState } from 'react'
import './matchTable.css'
import { teams } from '../../../../utils/table'
import { Link } from 'react-router-dom'
import TableAll from './TableAll/TableAll'



const tabs = [
  { id: 1, title: "all" },
  { id: 2, title: "home" },
  { id: 3, title: "away" }
]



const MatchTable = ({ match, tourId, propsTeam, setIsTabActive, mini }) => {
  const [isTableTabActive, setIsTableTabActive] = useState(1);
  return (
    <div className="match-table__container">

      {!mini && <div className="table-tabs__container">
        {tabs.map(tab => <div key={tab.id} onClick={() => setIsTableTabActive(tab.id)} className={isTableTabActive === tab.id ? "table-tab table-tab__active" : "table-tab"}>{tab.title}</div>)}
      </div>}

      {/* Table All */}
      {
        isTableTabActive === 1 && <TableAll teams={teams} match={match} propsTeam={propsTeam} mini={mini} tourId={tourId} />
      }


      {
        isTableTabActive === 2 && <div className="table-all__container">
          <table width="100%" className="table-all__inner">
            <thead>
              <tr className='league-table__tabs'>
                <th className="league-table__tab">#</th>
                <th className="league-table__tab" >Team</th>
                <th className="league-table__tab table-disable" >
                  <span>P</span>
                  <span className="desc">Played</span>
                </th>
                <th className="league-table__tab">
                  <span>w</span>
                  <span className="desc">Wins</span>
                </th>
                <th className="league-table__tab table-disable" >
                  <span>d</span>
                  <span className="desc">Draws</span>
                </th>
                <th className="league-table__tab table-disable" >
                  <span>l</span>
                  <span className="desc">Looses</span>
                </th>
                <th className="league-table__tab table-disable">
                  <span>f</span>
                  <span className="desc">Goals for</span>
                </th>
                <th className="league-table__tab table-disable" >
                  <span>a</span>
                  <span className="desc">Goals against</span>
                </th>
                <th className="league-table__tab" >
                  <span>gd</span>
                  <span className="desc">Goals difference</span>
                </th>
                <th className="league-table__tab">
                  <span>Pts</span>
                  <span className="desc">Points</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                teams.sort((a, b) => b.goalsDiffHome - a.goalsDiffHome).sort((a, b) => b.pointsHome - a.pointsHome)
                  .map((team, index) =>
                    <tr
                      key={team.teamId}
                      className={
                        ((match && (team.name === match.homeTeam.name || team.name === match.awayTeam.name)) || (propsTeam && team.name === propsTeam.name))
                          ? "leaguge-table__row text-bold" :
                          "leaguge-table__row"}>
                      <th className="league-table__tab text-thin table-team__position">{index + 1}</th>
                      <th className="league-table__tab text-thin table-team__infor" >
                        <Link onClick={() => setIsTabActive(1)} to={`/football/team/${tourId}/${team.teamId}`} className="table-team__flag"><img src={team.flag} alt="" /></Link>
                        <Link onClick={() => setIsTabActive(1)} to={`/football/team/${tourId}/${team.teamId}`} className="table-team__name">{team.name}</Link>
                      </th>
                      <th className="league-table__tab table-disable text-thin" >
                        {team.playedHome}
                      </th>
                      <th className="league-table__tab text-thin" >
                        {team.winsHome}
                      </th>
                      <th className="league-table__tab table-disable  text-thin" >
                        {team.drawsHome}
                      </th>
                      <th className="league-table__tab table-disable text-thin">
                        {team.lossesHome}
                      </th>
                      <th className="league-table__tab table-disable text-thin" >
                        {team.goalsForHome}
                      </th>
                      <th className="league-table__tab table-disable text-thin" >
                        {team.goalsAgainsHome}
                      </th>
                      <th className="league-table__tab text-thin">
                        {team.goalsDiffHome}
                      </th>
                      <th className="league-table__tab text-thin">
                        {team.pointsHome}
                      </th>
                    </tr>)
              }
            </tbody>
          </table>
        </div>
      }

      {
        isTableTabActive === 3 && <div className="table-all__container">
          <table width="100%" className="table-all__inner">
            <thead>
              <tr className='league-table__tabs'>
                <th className="league-table__tab">#</th>
                <th className="league-table__tab" >Team</th>
                <th className="league-table__tab table-disable" >
                  <span>P</span>
                  <span className="desc">Played</span>
                </th>
                <th className="league-table__tab">
                  <span>w</span>
                  <span className="desc">Wins</span>
                </th>
                <th className="league-table__tab table-disable" >
                  <span>d</span>
                  <span className="desc">Draws</span>
                </th>
                <th className="league-table__tab table-disable" >
                  <span>l</span>
                  <span className="desc">Looses</span>
                </th>
                <th className="league-table__tab table-disable">
                  <span>f</span>
                  <span className="desc">Goals for</span>
                </th>
                <th className="league-table__tab table-disable" >
                  <span>a</span>
                  <span className="desc">Goals against</span>
                </th>
                <th className="league-table__tab" >
                  <span>gd</span>
                  <span className="desc">Goals difference</span>
                </th>
                <th className="league-table__tab">
                  <span>Pts</span>
                  <span className="desc">Points</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                teams.sort((a, b) => b.goalsDiffHome - a.goalsDiffHome).sort((a, b) => b.pointsAway - a.pointsAway)
                  .map((team, index) => <tr key={team.teamId}
                    className={
                      ((match && (team.name === match.homeTeam.name || team.name === match.awayTeam.name)) || (propsTeam && team.name === propsTeam.name))
                        ? "leaguge-table__row text-bold" :
                        "leaguge-table__row"}>
                    <th className="league-table__tab text-thin table-team__position">{index + 1}</th>
                    <th className="league-table__tab text-thin table-team__infor" >
                      <Link onClick={() => setIsTabActive(1)} to={`/football/team/${tourId}/${team.teamId}`} className="table-team__flag"><img src={team.flag} alt="" /></Link>
                      <Link onClick={() => setIsTabActive(1)} to={`/football/team/${tourId}/${team.teamId}`} className="table-team__name">{team.name}</Link>
                    </th>
                    <th className="league-table__tab table-disable text-thin" >
                      {team.playedAway}
                    </th>
                    <th className="league-table__tab text-thin" >
                      {team.winsAway}
                    </th>
                    <th className="league-table__tab table-disable  text-thin" >
                      {team.drawsAway}
                    </th>
                    <th className="league-table__tab table-disable text-thin">
                      {team.lossesAway}
                    </th>
                    <th className="league-table__tab table-disable text-thin" >
                      {team.goalsForAway}
                    </th>
                    <th className="league-table__tab table-disable text-thin" >
                      {team.goalsAgainsAway}
                    </th>
                    <th className="league-table__tab text-thin">
                      {team.goalsDiffAway}
                    </th>
                    <th className="league-table__tab text-thin">
                      {team.pointsAway}
                    </th>
                  </tr>)
              }
            </tbody>
          </table>
        </div>
      }
    </div>
  )
}

export default MatchTable