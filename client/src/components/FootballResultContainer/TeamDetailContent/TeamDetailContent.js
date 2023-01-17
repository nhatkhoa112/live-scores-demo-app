import React, { useState, useEffect } from 'react'
import './teamDetailContent.css'
import { teams } from '../../../utils/table'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { teamActions } from '../../../redux/actions'
import TeamOverview from './TeamOverview/TeamOverview'
import TeamMatches from './TeamMatches/TeamMatches'
import TeamNews from './TeamNews/TeamNews'
import TeamPlayerStats from './TeamPlayerStats/TeamPlayerStats'
import MatchTable from '../MatchDetailContent/MatchTable/MatchTable'

const tabs = [
    { title: "Overview", index: 1 },
    { title: "Matches", index: 2 },
    { title: "Tables", index: 3 },
    { title: "News", index: 4 },
    { title: "Player Stats", index: 5 },

]


const TeamDetailContent = ({team, leagueId, league}) => {
    const [isMatchesTabActive, setIsMatchesTabActive] = useState(1)
    const [isTabActive, setIsTabActive] = useState(1)
    
    
    return (
        <div className="content-center team-detail-content">
            <div className="team-header">
                <div className="team-infor">
                    <div className="team-flag">
                        <img src={team.flagUrl} alt="" />
                    </div>
                    <div className="team-infor">
                        <div className="team-name">{team.name}</div>
                        <div className="country__name">England</div>
                    </div>
                </div>
            </div>
            <div className="tabs-container border-bottom">
                <div className='tab-inner'>
                    {tabs.map((tab) => <div onClick={() => setIsTabActive(tab.index)} key={tab.index} className={tab.index === isTabActive ? "tab tab-hover tab-active" : "tab tab-hover"}>{tab.title}</div>)}
                </div>
            </div>

            {isTabActive === 1 && <TeamOverview setIsMatchesTabActive={setIsMatchesTabActive} team={team} leagueId={leagueId} setIsTabActive={setIsTabActive} league={league}  />}
            {isTabActive === 2 && <TeamMatches isTabActive={isTabActive} isMatchesTabActive={isMatchesTabActive} setIsMatchesTabActive={setIsMatchesTabActive} team={team} leagueId={leagueId} league={league}/>}
            {isTabActive === 3 && <MatchTable propsTeam={team} tourId={1} setIsTabActive={setIsTabActive} leagueId={leagueId}  league={league}  />}
            {isTabActive === 4 && <TeamNews team={team} leagueId={leagueId} league={league} />}
            {isTabActive === 5 && <TeamPlayerStats team={team} />}

        </div>
    )
}

export default TeamDetailContent