import React, { useState } from 'react'
import Baseball from './Baseball/Baseball';
import Basketball from './Basketball/Basketball';
import Football from './Football/Football';
import './scores.css';
import Tennis from './Tennis/Tennis';
import FixtureSlider from '../../components/Slider/FixtureSlider';


const sportList = [
  { name: "Football", index: 0 },
  { name: "BaseBall", index: 1 },
  { name: "BasketBall", index: 2 },
  { name: "Tennis", index: 3 }
]


const Scores = () => {
  const [isSportItemActive, setIsSportItemActive] = useState(0)
  return (
    <div className="scores-page">
      <div className="sportlist">
        {sportList.map((s) =>
         <li key={s.index}
          className={s.index === isSportItemActive ? 'sportlist-item isActive' : 'sportlist-item'}
          onClick={() => setIsSportItemActive(s.index)}
        >
          {s.name}
        </li>
        )}
      </div>
     <FixtureSlider />
      {isSportItemActive === 0 && <Football isTimeNav={true} />}
      {isSportItemActive === 1 && <Baseball />}
      {isSportItemActive === 2 && <Basketball />}
      {isSportItemActive === 3 && <Tennis />}

    </div>
  )
}

export default Scores


