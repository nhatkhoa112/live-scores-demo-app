git aimport React, { useState, useEffect } from 'react';
import './teamDetail.css'
import { useSelector, useDispatch } from 'react-redux';
import { teamActions, leagueActions } from '../../../../redux/actions';
import TournamentsContainer from '../ContentLeftTournament/TournamentsContainer';
import { useParams } from 'react-router-dom';
import Football from '../Football';
import Baseball from '../../Baseball/Baseball';
import Basketball from '../../Basketball/Basketball';
import Tennis from '../../Tennis/Tennis';
import FlashNews from '../ContentRightFlashNews/FlashNews';
import { Link } from 'react-router-dom';
import TeamDetailContent from '../../../../components/FootballResultContainer/TeamDetailContent/TeamDetailContent';


const sportList = [
    { name: "Football", index: 0 },
    { name: "BaseBall", index: 1 },
    { name: "BasketBall", index: 2 },
    { name: "Tennis", index: 3 }
]



const TeamDetail = () => {
    const dispatch = useDispatch()
    let { leagueId, teamId } = useParams();
    const [isSportItemActive, setIsSportItemActive] = useState(0);
    const [hiddenResult, setHiddenResult] = useState(false);
    const { team } = useSelector((state) => state.team)
    const { league } = useSelector((state) => state.league)

    useEffect(() => {
        dispatch(teamActions.getTeamById(teamId))
        dispatch(leagueActions.getLeagueById(leagueId))
        dispatch(leagueActions.getAllLeague())

    }, [dispatch, teamId])


    const countryId = league && league.seasons?.reverse()[0].country._id



    return (

        <div className="scores-page">
            <div className="sportlist">
                {sportList.map((s) => <Link to={`/${s.index}`} key={s.index}
                    className={s.index === isSportItemActive ? 'sportlist-item isActive' : 'sportlist-item'}
                    onClick={() => {
                        setHiddenResult(true);
                        setIsSportItemActive(s.index)
                    }}
                >
                    {s.name}
                </Link>)}
            </div>

            {hiddenResult && isSportItemActive === 0 && <Football isTimeNav={false} />}
            {hiddenResult && isSportItemActive === 1 && <Baseball />}
            {hiddenResult && isSportItemActive === 2 && <Basketball />}
            {hiddenResult && isSportItemActive === 3 && <Tennis />}

            {!hiddenResult && (
                <div className="football-layout-container">
                    <TournamentsContainer countryId={countryId} leagueId={leagueId} />
                    <TeamDetailContent team={team} leagueId={league._id} league={league}/>
                    <FlashNews />
                </div>
            )}
        </div>

    )
}

export default TeamDetail