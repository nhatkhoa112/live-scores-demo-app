import React, { useState } from 'react'
import './teamDetailContent.css'
import { teams } from '../../../utils/table'
import { useParams } from 'react-router-dom'
import TeamOverview from './TeamOverview/TeamOverview'
import TeamMatches from './TeamMatches/TeamMatches'
import TeamTable from './TeamTable/TeamTable'
import TeamNews from './TeamNews/TeamNews'
import TeamPlayerStars from './TeamPlayerStars/TeamPlayerStars'


const tabs = [
    { title: "Overview", index: 1 },
    { title: "Matches", index: 2 },
    { title: "Tables", index: 3 },
    { title: "News", index: 4 },
    { title: "Player Stars", index: 5 },

]


const TeamDetailContent = () => {
    const { teamId, tourId } = useParams();
    const [isTabActive, setIsTabActive] = useState(1)
    let team;
    team = parseInt(tourId) === 1 ? teams.find((team) => team.teamId === parseInt(teamId)) : teams[12]


    return (
        <div className="content-center team-detail-content">
            <div className="team-header">
                <div className="team-infor">
                    <div className="team-flag">
                        <img src={team.flag} alt="" />
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

            {isTabActive === 1 && <TeamOverview team={team} />}
            {isTabActive === 2 && <TeamMatches team={team} />}
            {isTabActive === 3 && <TeamTable team={team} />}
            {isTabActive === 4 && <TeamNews team={team} />}
            {isTabActive === 5 && <TeamPlayerStars team={team} />}

        </div>
    )
}

export default TeamDetailContent