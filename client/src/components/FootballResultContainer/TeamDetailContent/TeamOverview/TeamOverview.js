import React from 'react'
import './teamOverview.css'
import MatchResult from '../../MatchResult/MatchResult'
import News from '../../MatchDetailContent/News/News'
import { Link } from 'react-router-dom'

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


const TeamOverview = ({ team, setIsTabActive, setIsMatchesTabActive, leagueId, league }) => {

  let leagueOfTeamNewestSeason = team.seasons && team.seasons.reverse()[0].leagues.find((league) => {
    return league.league._id === leagueId
  })


  const matches = leagueOfTeamNewestSeason && leagueOfTeamNewestSeason.matches

  const matchesSortedByDay = (matches) => {
    return matches?.sort((a, b) => {
      let aDay = new Date(a.day).getDate()
      let bDay = new Date(b.day).getDate()
      let aMonth = new Date(a.day).getMonth()
      let bMonth = new Date(b.day).getMonth()
      let aYear = new Date(a.day).getFullYear()
      let bYear = new Date(b.day).getFullYear()

      if (aYear > bYear) { return -1 }
      else if (aYear < bYear) { return 1 }
      else {
        if (aMonth > bMonth) { return -1 }
        else if (aMonth < bMonth) { return 1 }
        else {
          if (aDay > bDay) { return -1 }
          else if (aDay < bDay) { return 1 }
        }
      }
    })
  }

  let homeTeam = matches && matchesSortedByDay(matches)[0] && matchesSortedByDay(matches)[0].homeTeam.team 
  let awayTeam = matches && matchesSortedByDay(matches)[0] && matchesSortedByDay(matches)[0].awayTeam.team





  if (!awayTeam)
    awayTeam = {
      flagUrl: "https://lsm-static-prod.livescore.com/high/enet/10260.png",
      name: "Manchester United",
      _id: "6387249b29932092ea03437f"
    }




  return (
    <div className='team-overview__container'>
      <div className="team-overview__scoreboard">
        Next Match
      </div>
      <div className="team-overview__next">
        <div className="team-overview__next-inner">
          <div className="next__home">
            <Link to={`/football/team/${leagueId}/${homeTeam && homeTeam._id}`} className="next__home-flag"><img src={homeTeam ? homeTeam.flagUrl : team.flagUrl} alt="" /></Link>
            <Link to={`/football/team/${leagueId}/${homeTeam && homeTeam._id}`} className="next__home-name">{homeTeam && homeTeam.name || team.name}</Link>
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
            <Link  to={`/football/team/${leagueId}/${awayTeam._id}`} className="next__away-flag"><img src={awayTeam.flagUrl} alt="" /></Link>
            <Link to={`/football/team/${leagueId}/${awayTeam._id}`} className="next__away-name">{awayTeam.name}</Link>
          </div>
        </div>
      </div>
      <div className="team-overview__results">
        <div className="results__title">Form</div>
        {matches?.map((match, index) => <MatchResult key={index} match={match} league={league}  />)}
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