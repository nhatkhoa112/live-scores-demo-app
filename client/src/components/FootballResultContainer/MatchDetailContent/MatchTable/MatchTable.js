import React, { useState } from 'react'
import './matchTable.css'
import { Link } from 'react-router-dom'
import TableAll from './TableAll/TableAll'



const tabs = [
  { id: 1, title: "all" },
  { id: 2, title: "home" },
  { id: 3, title: "away" }
]



const MatchTable = ({ match, leagueId, propsTeam, setIsTabActive, mini, league }) => {
  const [isTableTabActive, setIsTableTabActive] = useState(1);

  const teams = league && league.seasons?.reverse()[0].teams



  return (
    <div className="match-table__container">

      {!mini && <div className="table-tabs__container">
        {tabs.map((tab, index) => teams && teams.length < 10 ? index < 1 && <div key={tab.id} onClick={() => setIsTableTabActive(tab.id)} className={isTableTabActive === tab.id ? "table-tab table-tab__active" : "table-tab"}>{tab.title}</div> :
          <div key={index} onClick={() => setIsTableTabActive(tab.id)} className={isTableTabActive === tab.id ? "table-tab table-tab__active" : "table-tab"}>{tab.title}</div>)}
      </div>}

      {/* Table All */}
      {
        isTableTabActive === 1 && <TableAll league={league} teams={teams} match={match} propsTeam={propsTeam} mini={mini} leagueId={leagueId} />
      }


      {
        teams && teams.length > 10 && isTableTabActive === 2 && <div className="table-all__container">
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
                teams?.sort((a, b) => {
                  return b.seasons.reverse()[0].leagues[0].goalsDiffHome - a.seasons.reverse()[0].leagues[0].goalsDiffHome
                }).sort((a, b) => b.seasons.reverse()[0].leagues[0].pointsHome - a.seasons.reverse()[0].leagues[0].pointsHome)
                  .map((team, index) => {
                    const teamLeague = team.seasons?.reverse()[0].leagues.find((newLeague) => newLeague.league === league._id)
                    return (<tr
                      key={index}
                      className={
                        ((match && (team.name === match.homeTeam.name || team.name === match.awayTeam.name)) || (propsTeam && team.name === propsTeam.name))
                          ? "leaguge-table__row text-bold" :
                          "leaguge-table__row"}>
                      <th className="league-table__tab text-thin table-team__position">{index + 1}</th>
                      <th className="league-table__tab text-thin table-team__infor" >
                        <Link onClick={() => setIsTabActive(1)} to={`/football/team/${leagueId}/${team.teamId}`} className="table-team__flag"><img src={team.flagUrl} alt="" /></Link>
                        <Link onClick={() => setIsTabActive(1)} to={`/football/team/${leagueId}/${team.teamId}`} className="table-team__name">{team.name}</Link>
                      </th>
                      <th className="league-table__tab table-disable text-thin" >
                        {teamLeague && teamLeague.playedHome}
                      </th>
                      <th className="league-table__tab text-thin" >
                        {teamLeague && teamLeague.winsHome}
                      </th>
                      <th className="league-table__tab table-disable  text-thin" >
                        {teamLeague && teamLeague.drawsHome}
                      </th>
                      <th className="league-table__tab table-disable text-thin">
                        {teamLeague && teamLeague.loosesHome}
                      </th>
                      <th className="league-table__tab table-disable text-thin" >
                        {teamLeague && teamLeague.goalsForHome}
                      </th>
                      <th className="league-table__tab table-disable text-thin" >
                        {teamLeague && teamLeague.goalsAgainstHome}
                      </th>
                      <th className="league-table__tab text-thin">
                        {teamLeague && teamLeague.goalsDiffHome}
                      </th>
                      <th className="league-table__tab text-thin">
                        {teamLeague && teamLeague.pointsHome}
                      </th>
                    </tr>)
                  }
                  )
              }
            </tbody>
          </table>
        </div>
      }

      {
        teams && teams.length > 10 && isTableTabActive === 3 && <div className="table-all__container">
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
                teams && teams?.sort((a, b) => {
                  return b.seasons.reverse()[0].leagues[0].goalsDiffAway - a.seasons.reverse()[0].leagues[0].goalsDiffAway
                }).sort((a, b) => b.seasons.reverse()[0].leagues[0].pointsAway - a.seasons.reverse()[0].leagues[0].pointsAway)
                  .map((team, index) => {
                    const teamLeague = team.seasons?.reverse()[0].leagues.find((newLeague) => newLeague.league === league._id)
                    return (<tr key={index}
                      className={
                        ((match && (team.name === match.homeTeam.name || team.name === match.awayTeam.name)) || (propsTeam && team.name === propsTeam.name))
                          ? "leaguge-table__row text-bold" :
                          "leaguge-table__row"}>
                      <th className="league-table__tab text-thin table-team__position">{index + 1}</th>
                      <th className="league-table__tab text-thin table-team__infor" >
                        <Link onClick={() => setIsTabActive(1)} to={`/football/team/${leagueId}/${team.teamId}`} className="table-team__flag"><img src={team.flagUrl} alt="" /></Link>
                        <Link onClick={() => setIsTabActive(1)} to={`/football/team/${leagueId}/${team.teamId}`} className="table-team__name">{team.name}</Link>
                      </th>
                      <th className="league-table__tab table-disable text-thin" >
                        {teamLeague && teamLeague.playedHome}
                      </th>
                      <th className="league-table__tab text-thin" >
                        {teamLeague && teamLeague.winsHome}
                      </th>
                      <th className="league-table__tab table-disable  text-thin" >
                        {teamLeague && teamLeague.drawsHome}
                      </th>
                      <th className="league-table__tab table-disable text-thin">
                        {teamLeague && teamLeague.loosesHome}
                      </th>
                      <th className="league-table__tab table-disable text-thin" >
                        {teamLeague && teamLeague.goalsForHome}
                      </th>
                      <th className="league-table__tab table-disable text-thin" >
                        {teamLeague && teamLeague.goalsAgainstHome}
                      </th>
                      <th className="league-table__tab text-thin">
                        {teamLeague && teamLeague.goalsDiffHome}
                      </th>
                      <th className="league-table__tab text-thin">
                        {teamLeague && teamLeague.pointsHome}
                      </th>
                    </tr>)
                  }
                  )
              }
            </tbody>
          </table>
        </div>
      }
    </div>
  )
}

export default MatchTable