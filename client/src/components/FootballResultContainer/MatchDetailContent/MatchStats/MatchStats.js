import React from 'react';
import './matchStats.css';
import styled from 'styled-components';

const BarHome = styled.span`
  ${props => props.away && props.home && `
    width: calc(100% * ${props.home / (props.home + props.away)});
    height: 10px;
    border-radius: 4px;
    z-index: 21;
    position: absolute;
    top:0;
    right: 0;
  `}
  ${props => props.away < props.home ? `
  box-shadow: 0px 0px 2px 2px  #EF6A37;
  background: linear-gradient(to right ,rgba(255,220,75,1), rgba(255,220,75,0.7) , #EF6A37, rgba(255,220,75,0.7), rgba(255,220,75,1)) ;
  ` : `background: #aaa`}
`;


const BarAway = styled.span`
  ${props => props.away && props.home && `
    width: calc(100% * ${props.home / (props.home + props.away)});
    height: 10px;
    border-radius: 4px;
    z-index: 21;
    position: absolute;
    top:0;
    right: left;
  `}
  ${props => props.away > props.home ? `
    box-shadow: 0px 0px 2px 2px  #EF6A37;
    background: linear-gradient(to right ,rgba(255,220,75,1), rgba(255,220,75,0.7) , #EF6A37, rgba(255,220,75,0.7), rgba(255,220,75,1)) ;
  ` : `background: #aaa`}
`;

const stats = [
  {
    title: "Shots on target", home: 2, away: 4
  },
  {
    title: "Shots off target", home: 4, away: 4
  },
  {
    title: "Blocked Shots", home: 1, away: 6
  },
  {
    title: "Possession (%)", home: 53, away: 47
  },
  {
    title: "Corner Kicks", home: 5, away: 14
  },
  {
    title: "Offsides", home: 1, away: 1
  },
  {
    title: "Fouls", home: 8, away: 11
  },
  {
    title: "Throw ins", home: 19, away: 21
  },
  {
    title: "Yellow cards", home: 1, away: 1
  },
  {
    title: "Crossest", home: 18, away: 26
  },
  {
    title: "Counter attacks", home: 1, away: 1
  },
  {
    title: "Goalkeeper saves", home: 4, away: 1
  },
  {
    title: "Goal kicks", home: 7, away: 10
  },
  {
    title: "Treatments", home: 4, away: 1
  }
]

const MatchStats = () => {
  return (
    <div className="match-stats__container">
      {stats?.map((stat, index) => <div key={index} className="match-stat__statistis">
        <div className="match-stat__header">
          <div className={stat.home > stat.away ? "match-stat__text strong" : "match-stat__text"}>{stat.home}</div>
          <div className="match-stat__text">{stat.title}</div>
          <div className={stat.away > stat.home ? "match-stat__text strong" : "match-stat__text"}>{stat.away}</div>

        </div>
        <div className="match-stat__bars">
          <span className="match-stat__bar">
            <BarHome home={stat.home} away={stat.away}  ></BarHome>
          </span>
          <span className="match-stat__bar">
            <BarAway home={stat.home} away={stat.away} ></BarAway>
          </span>
        </div>

      </div>)}

    </div>
  )
}

export default MatchStats

