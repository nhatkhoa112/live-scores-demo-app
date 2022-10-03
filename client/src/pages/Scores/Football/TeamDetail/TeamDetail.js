import React, { useState } from 'react';
import './teamDetail.css'
import TournamentsContainer from '../ContentLeftTournament/TournamentsContainer';
import { useParams } from 'react-router-dom';
import Football from '../Football';
import Baseball from '../../Baseball/Baseball';
import Basketball from '../../Basketball/Basketball';
import Tennis from '../../Tennis/Tennis';
import FlashNews from '../ContentRightFlashNews/FlashNews';
import {Link} from 'react-router-dom';
import TeamDetailContent from '../../../../components/FootballResultContainer/TeamDetailContent/TeamDetailContent';


const sportList = [
    { name: "Football", index: 0 },
    { name: "BaseBall", index: 1 },
    { name: "BasketBall", index: 2 },
    { name: "Tennis", index: 3 }
]



const TeamDetail = () => {
    let { countryId, tourId } = useParams();
    const [isSportItemActive, setIsSportItemActive] = useState(0);
    const [hiddenResult, setHiddenResult] = useState(false);

    return (

        <div className="scores-page">
            <div className="sportlist">
                {sportList.map((s) => <Link to={`/${s.index}`} key={s.index}
                    className={s.index === isSportItemActive ? 'sportlist-item isActive' : 'sportlist-item'}
                    onClick={() => {
                        console.log(isSportItemActive)
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
                    <TournamentsContainer countryId={countryId} tourId={tourId} />
                    <TeamDetailContent  />
                    <FlashNews />
                </div>
            )}
        </div>

    )
}

export default TeamDetail