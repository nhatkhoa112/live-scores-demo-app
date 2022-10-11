import React from 'react'
import './tableAll.css'

const TableAll = ({ teams, match, propsTeam, mini }) => {
    return (
        <div className="table-all__container">
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
                        mini && teams.sort((a, b) => b.goalsDiff - a.goalsDiff).sort((a, b) => b.points - a.points)
                            .map((team, index) =>
                                index< 5 && <tr key={team.teamId} className={
                                    ((match && (team.name === match.homeTeam.name || team.name === match.awayTeam.name)) || (propsTeam && team.name === propsTeam.name))
                                        ? "leaguge-table__row text-bold" :
                                        "leaguge-table__row"}>
                                    <th className="league-table__tab text-thin table-team__position">{index + 1}</th>
                                    <th className="league-table__tab text-thin table-team__infor" >
                                        <div className="table-team__flag"><img src={team.flag} alt="" /></div>
                                        <div className="table-team__name">{team.name}</div>
                                    </th>
                                    <th className="league-table__tab table-disable text-thin" >
                                        {team.played}
                                    </th>
                                    <th className="league-table__tab text-thin" >
                                        {team.wins}
                                    </th>
                                    <th className="league-table__tab table-disable  text-thin" >
                                        {team.draws}
                                    </th>
                                    <th className="league-table__tab table-disable text-thin">
                                        {team.losses}
                                    </th>
                                    <th className="league-table__tab table-disable text-thin" >
                                        {team.goalsFor}
                                    </th>
                                    <th className="league-table__tab table-disable text-thin" >
                                        {team.goalsAgains}
                                    </th>
                                    <th className="league-table__tab text-thin">
                                        {team.goalsDiff}
                                    </th>
                                    <th className="league-table__tab text-thin">
                                        {team.points}
                                    </th>
                                </tr>)
                    }

{
                        !mini && teams.sort((a, b) => b.goalsDiff - a.goalsDiff).sort((a, b) => b.points - a.points)
                            .map((team, index) =>
                                <tr key={team.teamId} className={
                                    ((match && (team.name === match.homeTeam.name || team.name === match.awayTeam.name)) || (propsTeam && team.name === propsTeam.name))
                                        ? "leaguge-table__row text-bold" :
                                        "leaguge-table__row"}>
                                    <th className="league-table__tab text-thin table-team__position">{index + 1}</th>
                                    <th className="league-table__tab text-thin table-team__infor" >
                                        <div className="table-team__flag"><img src={team.flag} alt="" /></div>
                                        <div className="table-team__name">{team.name}</div>
                                    </th>
                                    <th className="league-table__tab table-disable text-thin" >
                                        {team.played}
                                    </th>
                                    <th className="league-table__tab text-thin" >
                                        {team.wins}
                                    </th>
                                    <th className="league-table__tab table-disable  text-thin" >
                                        {team.draws}
                                    </th>
                                    <th className="league-table__tab table-disable text-thin">
                                        {team.losses}
                                    </th>
                                    <th className="league-table__tab table-disable text-thin" >
                                        {team.goalsFor}
                                    </th>
                                    <th className="league-table__tab table-disable text-thin" >
                                        {team.goalsAgains}
                                    </th>
                                    <th className="league-table__tab text-thin">
                                        {team.goalsDiff}
                                    </th>
                                    <th className="league-table__tab text-thin">
                                        {team.points}
                                    </th>
                                </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableAll