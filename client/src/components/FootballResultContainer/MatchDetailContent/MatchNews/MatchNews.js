import React, { useState } from 'react'
import './matchNews.css'
import moment from 'moment'
import News from '../News/News'

const news = [
    {
        id: 1, name: "Everton", news: [
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
            }, {
                id: 4,
                img: "https://uk1.sportal365images.com/process/smp-image-api/livescore.com/30092022/3e6533d1-48bb-49da-9cae-8b1daf6fbc9b.jpg?operations=fit(260:)&w=260&quality=100",
                title: "Premier League Matchday 9: Derby delight as top flight returns",
                tags: [
                    { id: 1, title: "Southampton" },
                    { id: 2, title: "Everton" }
                ],
                time: new Date(2022, 9, 27, 20, 0, 0)
            }, {
                id: 5,
                img: "https://uk1.sportal365images.com/process/smp-image-api/livescore.com/30092022/8ea97a83-dacd-4669-979d-c2b3f06d0fc2.jpg?operations=fit(260:)&w=260&quality=100",
                title: "Southampton vs Everton predictions: Blues to maintain uplift in form",
                tags: [
                    { id: 1, title: "Asernal" },
                    { id: 2, title: "Tottenham Hotspur" }
                ],
                time: new Date(2022, 9, 26, 20, 0, 0)
            }, {
                id: 6,
                img: "https://images.performgroup.com/di/library/omnisport/63/80/anthony-gordon_1bcivv7l0lzlv13s3au5om3b6i.jpg?t=-1964614973&operations=fit(260:)&w=260&quality=100",
                title: "Premier League: Predictions for all seven games on Saturday",
                tags: [
                    { id: 1, title: "Premier League" },
                    { id: 2, title: "Everton" }
                ],
                time: new Date(2022, 9, 25, 20, 0, 0)
            }, {
                id: 7,
                img: "https://uk1.sportal365images.com/process/smp-image-api/livescore.com/28092022/21c9d309-cfcd-48c4-bab0-5a4fc95fd800.jpg?operations=fit(260:)&w=260&quality=100",
                title: "Gordon 'never desperate' to leave Everton despite Chelsea interest",
                tags: [
                    { id: 1, title: "Premier League" },
                    { id: 2, title: "Everton" }
                ],
                time: new Date(2022, 10, 24, 20, 0, 0)
            }, {
                id: 8,
                img: "https://uk1.sportal365images.com/process/smp-image-api/livescore.com/28092022/21c9d309-cfcd-48c4-bab0-5a4fc95fd800.jpg?operations=fit(260:)&w=260&quality=100",
                title: "LiveScore Daily: The latest football news in bite-sized chunks",
                tags: [
                    { id: 1, title: "Premier League" },
                    { id: 2, title: "Everton" }
                ],
                time: new Date(2022, 9, 22, 20, 0, 0)
            }, {
                id: 9,
                img: "https://images.performgroup.com/di/library/omnisport/d4/a7/allan_5w7ztajifzfg1ikx1zqo3gbzs.jpg?t=2076494835&operations=fit(260:)&w=260&quality=100",
                title: "Allan leaves Everton for Abu Dhabi side Al Wahda",
                tags: [
                    { id: 1, title: "Premier League" },
                    { id: 2, title: "Everton" }
                ],
                time: new Date(2022, 9, 19, 20, 0, 0)
            },

        ]
    },
    {
        id: 2, name: "West Ham Unitesd", news: [
             {
                id: 5,
                img: "https://uk1.sportal365images.com/process/smp-image-api/livescore.com/30092022/8ea97a83-dacd-4669-979d-c2b3f06d0fc2.jpg?operations=fit(260:)&w=260&quality=100",
                title: "Southampton vs Everton predictions: Blues to maintain uplift in form",
                tags: [
                    { id: 1, title: "Asernal" },
                    { id: 2, title: "Tottenham Hotspur" }
                ],
                time: new Date(2022, 10, 1, 20, 0, 0)
            }, {
                id: 6,
                img: "https://images.performgroup.com/di/library/omnisport/63/80/anthony-gordon_1bcivv7l0lzlv13s3au5om3b6i.jpg?t=-1964614973&operations=fit(260:)&w=260&quality=100",
                title: "Premier League: Predictions for all seven games on Saturday",
                tags: [
                    { id: 1, title: "Premier League" },
                    { id: 2, title: "West Ham Unitesd" }
                ],
                time: new Date(2022, 9, 29, 20, 0, 0)
            }, {
                id: 7,
                img: "https://uk1.sportal365images.com/process/smp-image-api/livescore.com/28092022/21c9d309-cfcd-48c4-bab0-5a4fc95fd800.jpg?operations=fit(260:)&w=260&quality=100",
                title: "Gordon 'never desperate' to leave Everton despite Chelsea interest",
                tags: [
                    { id: 1, title: "Premier League" },
                    { id: 2, title: "West Ham Unitesd" }
                ],
                time: new Date(2022, 9, 28, 20, 0, 0)
            }, {
                id: 8,
                img: "https://uk1.sportal365images.com/process/smp-image-api/livescore.com/28092022/21c9d309-cfcd-48c4-bab0-5a4fc95fd800.jpg?operations=fit(260:)&w=260&quality=100",
                title: "LiveScore Daily: The latest football news in bite-sized chunks",
                tags: [
                    { id: 1, title: "Premier League" },
                    { id: 2, title: "West Ham Unitesd" }
                ],
                time: new Date(2022, 9, 27, 20, 0, 0)
            }, {
                id: 9,
                img: "https://images.performgroup.com/di/library/omnisport/d4/a7/allan_5w7ztajifzfg1ikx1zqo3gbzs.jpg?t=2076494835&operations=fit(260:)&w=260&quality=100",
                title: "Allan leaves Everton for Abu Dhabi side Al Wahda",
                tags: [
                    { id: 1, title: "Premier League" },
                    { id: 2, title: "West Ham Unitesd" }
                ],
                time: new Date(2022, 9, 26, 20, 0, 0)
            },
            {
                id: 1,
                img: "https://uk1.sportal365images.com/process/smp-image-api/livescore.com/01102022/fbcb997f-ac0a-4cb1-9bca-a6d33c47e7e9.jpg?operations=fit(260:)&w=260&quality=100",
                title: "Stat Attack: All you need to know about Southampton 1-2 Everton",
                tags: [
                    { id: 1, title: "Southampton" },
                    { id: 2, title: "West Ham Unitesd" }
                ],
                time: new Date(2022, 9, 24, 7, 24, 0)
            },
            {
                id: 2,
                img: "https://uk1.sportal365images.com/process/smp-image-api/livescore.com/30092022/5ad40eac-9c54-45c6-ad0f-7ae04749f24b.jpg?operations=fit(260:)&w=260&quality=100",
                title: "Fantasy football injury update: Rash in line to play in City clash",
                tags: [
                    { id: 1, title: "Premier League" },
                    { id: 2, title: "AFC Bournemouth" }
                ],
                time: new Date(2022, 9, 20, 18, 0, 0)
            },
            {
                id: 3,
                img: "https://uk1.sportal365images.com/process/smp-image-api/livescore.com/30092022/53785255-cc93-4ea0-9e85-de3e48920081.jpg?operations=fit(260:)&w=260&quality=100",
                title: "Premier League Matchday 9: Derby delight as top flight returns",
                tags: [
                    { id: 1, title: "Premier League" },
                    { id: 2, title: "Asernal" }
                ],
                time: new Date(2022, 9, 19, 12, 0, 0)
            }, {
                id: 4,
                img: "https://uk1.sportal365images.com/process/smp-image-api/livescore.com/30092022/3e6533d1-48bb-49da-9cae-8b1daf6fbc9b.jpg?operations=fit(260:)&w=260&quality=100",
                title: "Premier League Matchday 9: Derby delight as top flight returns",
                tags: [
                    { id: 1, title: "Southampton" },
                    { id: 2, title: "West Ham Unitesd" }
                ],
                time: new Date(2022, 9, 18, 20, 0, 0)
            },

        ]
    }
]




const MatchNews = ({ match }) => {
    const [isNewsTabActive, setIsNewsTabActive] = useState(1)
    console.log(isNewsTabActive);
    console.log(match)
    return (
        <div className='match-news__container'>
            <div className="news-tabs__container">
                <div onClick={() => setIsNewsTabActive(1)} className={isNewsTabActive === 1 ? "news-tab news-tab__active" : "news-tab"}>{match.homeTeam.name}</div>
                <div onClick={() => setIsNewsTabActive(2)} className={isNewsTabActive === 2 ? "news-tab news-tab__active" : "news-tab"}>{match.awayTeam.name}</div>
            </div>
            {isNewsTabActive === 1 && <div className='match-news__content'>
                <div className="match-news__inner">
                    {news[0].news.map(news =>
                        <News news={news} />
                    )}
                </div>
            </div>}
            {isNewsTabActive === 2 && <div className='match-news__content'>
                <div className="match-news__inner">
                    {news[1].news.map(news =>
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
                    )}
                </div>
            </div>}
        </div>
    )
}

export default MatchNews