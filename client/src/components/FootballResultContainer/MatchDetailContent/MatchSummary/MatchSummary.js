import React, { useState } from 'react';
import './matchSummary.css'

const MatchSummary = ({ match }) => {
  const [summaryTabShow, setSummaryTabShow] = useState(1)
  return (
    <div className='match-summary__container'>
      <div className="tabs-container summary-tabs">
        <div className="tab-inner summary-tab__inner">
          <div onClick={() => setSummaryTabShow(1)} className={summaryTabShow === 1 ? "sumarry-tab summary-tab-active" : "sumarry-tab"}>Events</div>
          <div onClick={() => setSummaryTabShow(2)} className={summaryTabShow === 2 ? "sumarry-tab summary-tab-active" : "sumarry-tab"}>Commentarys</div>
        </div>
      </div>

      <div className="summary-tab__content">
        {
          summaryTabShow === 1 && <div className="tab-event__content">
            {match.summaryEvent && match.summaryEvent?.map((event) =>
              <div key={event.id} className="tab-event__row">
                <div className="tab-event__time">
                  {parseInt(event.minute) ? event.minute + "'" : event.minute}
                </div>
                <div className="tab-event__info">
                  {(event.event === "goal" || event.event === "hafttime" || event.event === "fulltime") && <div className="tab-event__infor-scores">{event.score}</div>}
                  <div className={event.team === "home team" ? "tab-event__homeTeam" : "tab-event__awayTeam"}>
                    <div className={event.team === "home team" ? "tab-event__player-home": "tab-event__player-away"}>
                      <div className="tab-event__player-main">{event.playerName1}</div>
                      {event.playerName2 && <div className='tab-event__player-assistane'>{event.playerName2}</div>}
                    </div>
                    <div className="tab-event__icon">
                      {event.event === "goal" && <i className="fa-regular fa-futbol"></i>}
                      {event.cardType === "yellow" && <span className="yellow-card"></span>}
                      {event.cardType === "red" && <span className="red-card"></span>}
                    </div>

                  </div>
                </div>
              </div>)}
            { !match.summaryEvent && <div className="tab__note">Key match events will display here as they happen</div> }
          </div>
        }
      </div>

    </div>
  )
}

export default MatchSummary