import React from 'react'
import './news.css'
import moment from 'moment'


const News = ({ news }) => {
    return (
        (<div key={news.id} className="match-news__row">
            <img src={news.img} alt="" />
            <div className='match-news__infor'>
                <div className='match-news__text'>
                    <span>{news.title}</span>
                </div>
                <div className="match-news__time-cate">
                    <div className="match-news__tags">
                        {news.tags.map(tag => <div key={tag.id} className="match-news__tag">{tag.title}</div>)}
                    </div>
                    <div className="match-news__time">
                        {moment((news.time.getFullYear()).toString() + (news.time.getMonth() < 10 ? ("0" + (news.time.getMonth()).toString()) : (news.time.getMonth()).toString()) + (news.time.getDate() < 10 ? ("0" + (news.time.getDate()).toString()) : (news.time.getDate()).toString())).startOf('days').fromNow()}
                    </div>
                </div>
            </div>
        </div>)
    )
}

export default News