import React from 'react'
import './tableAll.css'
import { Link } from 'react-router-dom'

const TableAll = ({ teams, match, propsTeam, mini, tourId, league }) => {
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
                        mini ?
                            (teams?.sort((a, b) => {

                                return b.seasons.reverse()[0].leagues[0].goalsDiff - a.seasons.reverse()[0].leagues[0].goalsDiff
                            }).sort((a, b) => b.seasons.reverse()[0].leagues[0].points - a.seasons.reverse()[0].leagues[0].points)
                                .map((team, index) => {
                                    const teamLeague = team.seasons?.reverse()[0].leagues.find((newLeague) => newLeague.league === league._id)
                                    return ((index < 5 || index > 16) && <tr key={team._id} className={
                                        ((match && (team.name === match.homeTeam.name || team.name === match.awayTeam.name)) || (propsTeam && team.name === propsTeam.name))
                                            ? "leaguge-table__row text-bold" :
                                            "leaguge-table__row"}>
                                        <th className={index < league.seasons[0].promotion ? "league-table__tab text-thin table-team__position c1-tour" : index === 4 ? "league-table__tab text-thin table-team__position europaleague-tour" : index > 16 ? "league-table__tab text-thin table-team__position relegation" : "league-table__tab text-thin table-team__position"}>
                                            <span className="league-table__tab-index">{index + 1}</span>
                                            {
                                                index < league.seasons[0].championLeagueTeams && <span className="league-table__tab-tag">Champions League</span>
                                            }
                                            {
                                                index < league.seasons[0].championLeagueTeams + league.seasons[0].euroPaLeagueTeams && <span className="league-table__tab-tag">Europa League</span>
                                            }
                                            {
                                                index < league.seasons[0].championLeagueTeams + league.seasons[0].euroPaLeagueTeams + league.seasons[0].promotion && <span className="league-table__tab-tag">Promotion</span>
                                            }
                                            {
                                                index > 16 && <span className="league-table__tab-tag">Relegation</span>
                                            }
                                        </th>                                    <th className="league-table__tab text-thin table-team__infor" >
                                            <div className="table-team__flag"><img src={team.flagUrl} alt="" /></div>
                                            <Link to={`/football/team/${tourId}/${team.teamId}`} className="table-team__name">{team.name}</Link>
                                        </th>
                                        <th className="league-table__tab table-disable text-thin" >
                                            {teamLeague.played}
                                        </th>
                                        <th className="league-table__tab text-thin" >
                                            {teamLeague.wins}
                                        </th>
                                        <th className="league-table__tab table-disable  text-thin" >
                                            {teamLeague.draws}
                                        </th>
                                        <th className="league-table__tab table-disable text-thin">
                                            {teamLeague.looses}
                                        </th>
                                        <th className="league-table__tab table-disable text-thin" >
                                            {teamLeague.goalsFor}
                                        </th>
                                        <th className="league-table__tab table-disable text-thin" >
                                            {teamLeague.goalsAgainst}
                                        </th>
                                        <th className="league-table__tab text-thin">
                                            {teamLeague.goalsDiff}
                                        </th>
                                        <th className="league-table__tab text-thin">
                                            {teamLeague.points}
                                        </th>
                                    </tr>)
                                }

                                )) : ""
                    }
                    {
                        !mini && teams?.sort((a, b) => b.goalsDiff - a.goalsDiff).sort((a, b) => b.points - a.points)
                            .map((team, index) => {
                                const teamLeague = team.seasons?.reverse()[0].leagues.find((newLeague) => newLeague.league === league._id)
                                return (<tr key={team._id} className={
                                    ((match && (team.name === match.homeTeam.name || team.name === match.awayTeam.name)) || (propsTeam && team.name === propsTeam.name))
                                        ? "leaguge-table__row text-bold" :
                                        "leaguge-table__row"}>
                                    <th className={index < league.seasons[0].championLeagueTeams ?
                                        "league-table__tab text-thin table-team__position c1-tour"
                                        : index < league.seasons[0].championLeagueTeams + league.seasons[0].euroPaLeagueTeams
                                            ? "league-table__tab text-thin table-team__position europaleague-tour"
                                            : index < league.seasons[0].championLeagueTeams + league.seasons[0].euroPaLeagueTeams + league.seasons[0].promotion
                                                ? "league-table__tab text-thin table-team__position promotion"
                                                : index > teams.length - league.seasons[0].relegation ? "league-table__tab text-thin table-team__position promotion" : "league-table__tab text-thin table-team__position"}>
                                        <span className="league-table__tab-index">{index + 1}</span>
                                        {
                                            index < league.seasons[0].championLeagueTeams && <span className="league-table__tab-tag">Champions League</span>
                                        }
                                        {
                                            index < league.seasons[0].championLeagueTeams + league.seasons[0].euroPaLeagueTeams && <span className="league-table__tab-tag">Europa League</span>
                                        }
                                        {
                                            index < league.seasons[0].championLeagueTeams + league.seasons[0].euroPaLeagueTeams + league.seasons[0].promotion && <span className="league-table__tab-tag">Promotion</span>
                                        }
                                        {
                                            (index > teams.length - league.seasons[0].championLeagueTeams) && <span className="league-table__tab-tag">Relegation</span>
                                        }
                                    </th>
                                    <th className="league-table__tab text-thin table-team__infor" >
                                        <div className="table-team__flag"><img src={team.flagUrl} alt="" /></div>
                                        <Link to={`/football/team/${tourId}/${team.teamId}`} className="table-team__name">{team.name}</Link>
                                    </th>
                                    <th className="league-table__tab table-disable text-thin" >
                                        {teamLeague.played}
                                    </th>
                                    <th className="league-table__tab text-thin" >
                                        {teamLeague.wins}
                                    </th>
                                    <th className="league-table__tab table-disable  text-thin" >
                                        {teamLeague.draws}
                                    </th>
                                    <th className="league-table__tab table-disable text-thin">
                                        {teamLeague.looses}
                                    </th>
                                    <th className="league-table__tab table-disable text-thin" >
                                        {teamLeague.goalsFor}
                                    </th>
                                    <th className="league-table__tab table-disable text-thin" >
                                        {teamLeague.goalsAgainst}
                                    </th>
                                    <th className="league-table__tab text-thin">
                                        {teamLeague.goalsDiff}
                                    </th>
                                    <th className="league-table__tab text-thin">
                                        {teamLeague.points}
                                    </th>
                                </tr>)
                            }
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableAll