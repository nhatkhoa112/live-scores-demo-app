import React, { useState, useEffect } from 'react';
import TournamentsContainer from '../ContentLeftTournament/TournamentsContainer';
import './tournamentDetail.css'
import { useParams, Link } from 'react-router-dom';
import Football from '../Football';
import Baseball from '../../Baseball/Baseball';
import Basketball from '../../Basketball/Basketball';
import Tennis from '../../Tennis/Tennis';
import FlashNews from '../ContentRightFlashNews/FlashNews';
import ScoresShedule from '../ContentCenter/ScoresShedule';
import {matchActions} from '../../../../redux/actions'



const sportList = [
    { name: "Football", index: 0 },
    { name: "BaseBall", index: 1 },
    { name: "BasketBall", index: 2 },
    { name: "Tennis", index: 3 }
]


const TournamentDetail = () => {
    let { countryId, leagueId } = useParams();
    const [isSportItemActive, setIsSportItemActive] = useState(0);
    const [hiddenResult, setHiddenResult] = useState(false)
    const [isTimeNav, setIsTimeNav] = useState(false)
   



    return (
        <div className="scores-page">
            <div className="sportlist">
                {sportList.map((s) => <Link to={`/${s.index}`} key={s.index}
                    className={s.index === isSportItemActive ? 'sportlist-item isActive' : 'sportlist-item'}
                    onClick={() => {
                        setHiddenResult(true);
                        setIsSportItemActive(s.index)
                        setIsTimeNav(false)
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
                    <TournamentsContainer countryId ={countryId} leagueId={leagueId} />
                    <ScoresShedule isTimeNav={isTimeNav} leagueId={leagueId} countryId={countryId} />
                    <FlashNews />
                </div>
            )}
        </div>

    )
}

export default TournamentDetail