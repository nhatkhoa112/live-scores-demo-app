import React from 'react'
import './footballResultContainer.css';
import TournamentResultDay from './TournamentResultDay/TournamentResultDay';
import {results} from '../../utils/result'


const FootballResultContainer = ({ tourId, countryId }) => {
    return (
        <div className='fb-result-container'>
            {tourId && countryId && results.filter((result) => result.tourId === parseInt(tourId) && result.countryId === parseInt(countryId)).map((result, index) =>
                <TournamentResultDay key={index} result={result}  />
            )
            }

            {!tourId && !countryId && results.map((result, index) =>
                <TournamentResultDay key={index} result={result}   />
            )
            }
        
        </div>
    )
}

export default FootballResultContainer