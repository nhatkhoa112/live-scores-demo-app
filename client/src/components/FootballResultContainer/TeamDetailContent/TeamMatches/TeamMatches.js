import React, { useState } from 'react'
import './teamMatches.css';
import TournamentResultDay from '../../TournamentResultDay/TournamentResultDay';

const fixtures = [
  {
    country: "England",
    countryId: 1,
    flag: "https://static.livescore.com/i2/fh/england.jpg",
    tournament: "Premire League",
    tourId: 1,
    matches: [
      {
        status: "not yet",
        matchId: 1,
        day: " 10 Oct",
        time: "01:00",
        homeTeam: {
          name: "Everton",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/8668.png",
        },
        awayTeam: {
          name: "Manchester United",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/10260.png"
        }
      },
      {
        status: "not yet",
        matchId: 2,
        day: " 15 Oct",
        time: "23:30",
        awayTeam: {
          name: "Everton",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/8668.png",
        },
        homeTeam: {
          name: "Tottenham Hotspur",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/8586.png"
        }
      }, {
        status: "not yet",
        matchId: 3,
        day: " 20 Oct",
        time: "01:30",
        awayTeam: {
          name: "Everton",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/8668.png",
        },
        homeTeam: {
          name: "Newcastle United",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/10261.png"
        }
      }, {
        status: "not yet",
        matchId: 4,
        day: " 22 Oct",
        time: "21:00",
        homeTeam: {
          name: "Everton",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/8668.png",
        },
        awayTeam: {
          name: "Crystal Palace",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/9826.png"
        }
      }, {
        status: "not yet",
        matchId: 5,
        day: " 29 Oct",
        time: "23:30",
        awayTeam: {
          name: "Everton",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/8668.png",
        },
        homeTeam: {
          name: "Fulham",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/9879.png"
        }
      }, {
        status: "not yet",
        matchId: 5,
        day: " 06 Nov",
        time: "00:30",
        awayTeam: {
          name: "Everton",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/8668.png",
        },
        homeTeam: {
          name: "Leicester City",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/8197.png"
        }
      },
    ]
  }, {
    country: "England",
    countryId: 1,
    flag: "https://static.livescore.com/i2/fh/england.jpg",
    tournament: "EFL Cup",
    tourId: 4,
    matches: [
      {
        status: "not yet",
        matchId: 1,
        day: " 09 Nov",
        time: "02:45",
        awayTeam: {
          name: "Everton",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/8668.png",
        },
        homeTeam: {
          name: "AFC Bournemouth",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/8678.png"
        }
      }
    ]
  },
  {
    country: "England",
    countryId: 1,
    flag: "https://static.livescore.com/i2/fh/england.jpg",
    tournament: "Premire League",
    tourId: 1,
    matches: [
      {
        status: "not yet",
        matchId: 1,
        day: " 12 Nov",
        time: "22:00",
        awayTeam: {
          name: "Everton",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/8668.png",
        },
        homeTeam: {
          name: "AFC Bournemouth",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/8678.png"
        }
      },
      {
        status: "not yet",
        matchId: 2,
        day: " 26 Dec",
        time: "22:30",
        homeTeam: {
          name: "Everton",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/8668.png",
        },
        awayTeam: {
          name: "Wolverhampton Wanderers",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/8602.png"
        }
      }, {
        status: "not yet",
        matchId: 3,
        day: " 31 Dec",
        time: "22:00",
        awayTeam: {
          name: "Everton",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/8668.png",
        },
        homeTeam: {
          name: "Mancester City",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/8556.png"
        }
      }, {
        status: "not yet",
        matchId: 4,
        day: " 02 Jan",
        time: "22:00",
        homeTeam: {
          name: "Everton",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/8668.png",
        },
        awayTeam: {
          name: "Brighton & Hove Albion",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/10204.png"
        }
      }, {
        status: "not yet",
        matchId: 5,
        day: " 29 Oct",
        time: "23:30",
        awayTeam: {
          name: "Everton",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/8668.png",
        },
        homeTeam: {
          name: "Fulham",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/9879.png"
        }
      }, {
        status: "not yet",
        matchId: 5,
        day: " 06 Nov",
        time: "00:30",
        awayTeam: {
          name: "Everton",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/8668.png",
        },
        homeTeam: {
          name: "Leicester City",
          flag: "https://lsm-static-prod.livescore.com/medium/enet/8197.png"
        }
      },
    ]
  }

]

const tours = [
  {
    name: "All Competition",
    chooseString: "",
    flag: "https://www.livescore.com/ls-web-assets/images/global-fb4143ccfed4377df5947292f2479be5.svg",
  },
  {
    name: "Premire League",
    chooseString: "Premire League",
    flag: "https://static.livescore.com/i2/fh/england.jpg",

  },
  {
    name: "EFL Cup",
    chooseString: "EFL Cup",
    flag: "https://static.livescore.com/i2/fh/england.jpg",

  }
]


const TeamMatches = () => {
  const [isTabActive, setIsTabActive] = useState(1)
  const [tourChoose, setTourChoose] = useState(tours[0])
  const [darkMarkShow, setDarkMarkShow] = useState(false)
  console.log(tourChoose)
  return (
    <div className='team-matches__container'>
      <div className="tabs-container summary-tabs">
        <div className="tab-inner summary-tab__inner">
          <div onClick={() => setIsTabActive(1)} className={isTabActive === 1 ? "sumarry-tab summary-tab-active" : "sumarry-tab"}>Fixtures</div>
          <div onClick={() => setIsTabActive(2)} className={isTabActive === 2 ? "sumarry-tab summary-tab-active" : "sumarry-tab"}>Results</div>
        </div>
      </div>

      <div className="tour-choose">
        <div className="tour__row">
          <span onClick={() => setDarkMarkShow(true)} className="tour__row-icon">
            <i className="fa-regular fa-futbol"></i>
            <i className="fa-sharp fa-solid fa-caret-down"></i>
          </span>
          <span onClick={() => setDarkMarkShow(true)} className="tour__row-text">{tourChoose.name}</span>
          {darkMarkShow && <div onClick={() => setDarkMarkShow(!darkMarkShow)} className="dark-mask"></div>}
          {darkMarkShow && <div className="tour-dropdown-menu">
            {tours.map((tour, index) => <div key={index} className="tour-choose__row">
            <img className="image-height" src={tour.flag} alt="" />
              <span onClick={() => {
               setDarkMarkShow(false);
               setTourChoose(tour);
              }}>{tour.name}</span>
            </div>)}
          </div>}
        </div>


      </div>


      {isTabActive === 1 && < div className='fixtures__container'>
        {tourChoose.chooseString && fixtures.filter((fixture) => fixture.tournament === tourChoose.chooseString).map((result, index) =>
          <TournamentResultDay key={index} result={result} />
        )
        }

        {!tourChoose.chooseString && fixtures.map((result, index) =>
          <TournamentResultDay key={index} result={result} />
        )
        }
      </div>}

    </div >
  )
}

export default TeamMatches