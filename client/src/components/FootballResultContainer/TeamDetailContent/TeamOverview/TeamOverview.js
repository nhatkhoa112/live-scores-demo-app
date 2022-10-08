import React from 'react'
import './teamOverview.css'
import MatchResult from '../../MatchResult/MatchResult'
import News from '../../MatchDetailContent/News/News'


let awayTeam = {
  flag: "https://lsm-static-prod.livescore.com/high/enet/10260.png",
  name: "Manchester United"
}

let result = {
  countryId: 1,
  tourId: 1
}

let matches = [

  {
    matchId: 1,
    status: "fulltime",
    homeTeam: {
      name: "Southampton",
      flag: "https://lsm-static-prod.livescore.com/medium/enet/8466.png",
      scores: 1,
    },
    awayTeam: {
      name: "Everton",
      flag: "https://lsm-static-prod.livescore.com/medium/enet/8668.png",
      scores: 2,
    }
  },
  {
    matchId: 2,
    status: "fulltime",
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
  {
    matchId: 3,
    status: "fulltime",
    awayTeam: {
      name: "Asernal",
      flag: "https://lsm-static-prod.livescore.com/medium/enet/9825.png",
      scores: 3,
    },
    homeTeam: {
      name: "Everton",
      flag: "https://lsm-static-prod.livescore.com/medium/enet/8668.png",
      scores: 0,
    }
  },
]


let news = [
  {
    id: 1,
    img: "https://uk1.sportal365images.com/process/smp-image-api/livescore.com/01102022/fbcb997f-ac0a-4cb1-9bca-a6d33c47e7e9.jpg?operations=fit(260:)&w=260&quality=100",
    title: "Stat Attack: All you need to know about Southampton 1-2 Everton",
    tags: [
      { id: 1, title: "Southampton" },
      { id: 2, title: "Everton" }
    ],
    time: new Date(2022, 10, 2, 7, 24, 0)
  },
  {
    id: 2,
    img: "https://uk1.sportal365images.com/process/smp-image-api/livescore.com/30092022/5ad40eac-9c54-45c6-ad0f-7ae04749f24b.jpg?operations=fit(260:)&w=260&quality=100",
    title: "Fantasy football injury update: Rash in line to play in City clash",
    tags: [
      { id: 1, title: "Premier League" },
      { id: 2, title: "AFC Bournemouth" }
    ],
    time: new Date(2022, 10, 1, 18, 0, 0)
  },
  {
    id: 3,
    img: "https://uk1.sportal365images.com/process/smp-image-api/livescore.com/30092022/53785255-cc93-4ea0-9e85-de3e48920081.jpg?operations=fit(260:)&w=260&quality=100",
    title: "Premier League Matchday 9: Derby delight as top flight returns",
    tags: [
      { id: 1, title: "Premier League" },
      { id: 2, title: "Asernal" }
    ],
    time: new Date(2022, 9, 29, 12, 0, 0)
  },]


const TeamOverview = ({ team, setIsTabActive, setIsMatchesTabActive }) => {
  return (
    <div className='team-overview__container'>
      <div className="team-overview__scoreboard">
        Next Match
      </div>
      <div className="team-overview__next">
        <div className="team-overview__next-inner">
          <div className="next__home">
            <div className="next__home-flag"><img src={team.flag} alt="" /></div>
            <div className="next__home-name">{team.name}</div>
          </div>
          <div className="next__infor">
            <div className="next__infor-time">
              <span className="infor__time">20 : 30</span>
              <span className="infor__day">15 October 2022</span>
            </div>
            <span className="next__vs">VS</span>
            <div className="next__infor-place">Goodison Park</div>
          </div>
          <div className="next__away">
            <div className="next__away-flag"><img src={awayTeam.flag} alt="" /></div>
            <div className="next__away-name">{awayTeam.name}</div>
          </div>
        </div>
      </div>
      <div className="team-overview__results">
        <div className="results__title">Form</div>
        {matches.map((match, index) => <MatchResult key={index} match={match} result={result} />)}
        <button onClick={() => {
          setIsTabActive(2)
          setIsMatchesTabActive(2)
        }} className="results__see-all">See All</button>
      </div>
      <div className="team-overview__news">
        <div className="results__title">News</div>
        <div className="news__inner">
          {news.map(news => <News key={news.id} news={news} />)}
        </div>
        <button onClick={() => setIsTabActive(4)} className="results__see-all width-100">See All</button>
      </div>
    </div>
  )
}

export default TeamOverview