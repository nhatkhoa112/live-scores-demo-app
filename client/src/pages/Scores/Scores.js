import React, { useState, useEffect } from 'react'
import Baseball from './Baseball/Baseball';
import Basketball from './Basketball/Basketball';
import Football from './Football/Football';
import { useDispatch } from 'react-redux';
import './scores.css';
import Tennis from './Tennis/Tennis';
import FixtureSlider from '../../components/Slider/FixtureSlider';
import { Link, useParams } from 'react-router-dom';
import {matchActions} from '../../redux/actions'



const sportList = [
  { name: "Football", index: 0 },
  { name: "BaseBall", index: 1 },
  { name: "BasketBall", index: 2 },
  { name: "Tennis", index: 3 }
]


const Scores = () => {
  const { index } = useParams();
  const [isSportItemActive, setIsSportItemActive] = useState(index ? parseInt(index) : 0)
  const [limit, setLimit] = useState(20);
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(matchActions.getMatches(limit))
  }, [limit, dispatch])

  return (
    <div className="scores-page">
      <div className="sportlist">
        {sportList.map((s) =>
          <Link to="/" key={s.index}
            className={s.index === isSportItemActive ? 'sportlist-item isActive' : 'sportlist-item'}
            onClick={() => setIsSportItemActive(s.index)}
          >
            {s.name}
          </Link>
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


