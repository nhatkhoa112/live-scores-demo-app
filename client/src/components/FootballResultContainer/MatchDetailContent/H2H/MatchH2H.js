import React from 'react'
import './matchH2H.css'
import TourResult from './TourResult/TourResult'


let results = [
    {
        id: 1,
        name: "Premier League 21/22",
        country: "England",
        flag: "https://static.livescore.com/i2/fh/england.jpg",
        matchs: [
            {
                matchId: 1,
                date: '2022',
                homeTeam: {
                    name: "West Ham United",
                    flag: "https://lsm-static-prod.livescore.com/medium/enet/8654.png",
                    scores: 2,
                },
                awayTeam: {
                    name: "Everton",
                    flag: "https://lsm-static-prod.livescore.com/medium/enet/8668.png",
                    scores: 1,
                }
            },
            {
                matchId: 1,
                date: '2021',
                awayTeam: {
                    name: "West Ham United",
                    flag: "https://lsm-static-prod.livescore.com/medium/enet/8654.png",
                    scores: 1,
                },
                homeTeam: {
                    name: "Everton",
                    flag: "https://lsm-static-prod.livescore.com/medium/enet/8668.png",
                    scores: 0,
                }
            },
        ]
    },
    {
        id: 1,
        name: "Premier League 20/21",
        country: "England",
        flag: "https://static.livescore.com/i2/fh/england.jpg",
        matchs: [
            {
                matchId: 1,
                date: '2021',
                homeTeam: {
                    name: "West Ham United",
                    flag: "https://lsm-static-prod.livescore.com/medium/enet/8654.png",
                    scores: 0,
                },
                awayTeam: {
                    name: "Everton",
                    flag: "https://lsm-static-prod.livescore.com/medium/enet/8668.png",
                    scores: 1,
                }
            },
            {
                matchId: 1,
                date: '2021',
                awayTeam: {
                    name: "West Ham United",
                    flag: "https://lsm-static-prod.livescore.com/medium/enet/8654.png",
                    scores: 1,
                },
                homeTeam: {
                    name: "Everton",
                    flag: "https://lsm-static-prod.livescore.com/medium/enet/8668.png",
                    scores: 0,
                }
            },
        ]
    },
    {
        id: 1,
        name: "EFL Cup 20/21",
        country: "England",
        flag: "https://static.livescore.com/i2/fh/england.jpg",
        matchs: [
            {
                matchId: 1,
                date: '2020',
                awayTeam: {
                    name: "West Ham United",
                    flag: "https://lsm-static-prod.livescore.com/medium/enet/8654.png",
                    scores: 1,
                },
                homeTeam: {
                    name: "Everton",
                    flag: "https://lsm-static-prod.livescore.com/medium/enet/8668.png",
                    scores: 4,
                }
            },
        ]
    },
    {
        id: 1,
        name: "Premier League 20/21",
        country: "England",
        flag: "https://static.livescore.com/i2/fh/england.jpg",
        matchs: [
            {
                matchId: 1,
                date: '2020',
                homeTeam: {
                    name: "West Ham United",
                    flag: "https://lsm-static-prod.livescore.com/medium/enet/8654.png",
                    scores: 0,
                },
                awayTeam: {
                    name: "Everton",
                    flag: "https://lsm-static-prod.livescore.com/medium/enet/8668.png",
                    scores: 1,
                }
            },
            {
                matchId: 1,
                date: '2019',
                awayTeam: {
                    name: "West Ham United",
                    flag: "https://lsm-static-prod.livescore.com/medium/enet/8654.png",
                    scores: 1,
                },
                homeTeam: {
                    name: "Everton",
                    flag: "https://lsm-static-prod.livescore.com/medium/enet/8668.png",
                    scores: 0,
                }
            },
        ]
    },
]


const MatchH2H = ({ match }) => {
    
    return (
        <div className='match-confrontation__container'>
            {results.map((result, index) => <TourResult result={result} key={index} match={match} />)}
        </div>
    )
}

export default MatchH2H