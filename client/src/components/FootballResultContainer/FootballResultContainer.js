import React from 'react'
import './footballResultContainer.css';
import TournamentResultDay from './TournamentResultDay/TournamentResultDay';
import { results } from '../../utils/result'


const FootballResultContainer = ({ tourId, countryId,  }) => {
    return (
        <div className='fb-result-container'>
            <div className="tour-results__overview">
                {tourId && countryId && results.filter((result) => result.tourId === parseInt(tourId) && result.countryId === parseInt(countryId)).map((result, index) =>
                    <TournamentResultDay key={index} result={result} overview={1} tourId={tourId} />
                )
                }

                {!tourId && !countryId && results.map((result, index) =>
                <TournamentResultDay key={index} result={result} tourId={tourId} />
                )
                }
            </div>

        </div>
    )
}

export default FootballResultContainer