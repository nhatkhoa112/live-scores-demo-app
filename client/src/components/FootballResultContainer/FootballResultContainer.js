import React, { useEffect } from 'react'
import './footballResultContainer.css';
import TournamentResultDay from './TournamentResultDay/TournamentResultDay';
import { useDispatch, useSelector } from 'react-redux'
import { countryActions, leagueActions } from '../../redux/actions'



const FootballResultContainer = ({ leagueId, countryId }) => {
    const dispatch = useDispatch()
    const { countries } = useSelector((state) => state.country)
    const { league } = useSelector((state) => state.league)
    const { matches } = useSelector((state) => state.match)

    useEffect(() => {
        countryId && dispatch(countryActions.getCountryById(countryId))
        leagueId && dispatch(leagueActions.getLeagueById(leagueId))

    }, [dispatch, countryId, leagueId])




    return (
        <div className='fb-result-container'>
            <div className="tour-results__overview">
                {leagueId && countryId && [league].map((league, index) =>
                    <TournamentResultDay key={index} league={league} overview={1} leagueId={leagueId}  />
                )
                }


                {!leagueId && !countryId && [league].map((league, index) =>
                    <TournamentResultDay key={index} league={league} leagueId={leagueId} matches={matches} />
                )
                }
            </div>


        </div>
    )
}

export default FootballResultContainer