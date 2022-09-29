import React, { useState } from 'react'
import './flashNews.css'
import { Link } from 'react-router-dom'
import new1 from '../../../../assets/images/news-1.jpeg'
import new2 from '../../../../assets/images/news-2.jpeg'
import new3 from '../../../../assets/images/new-3.jpeg'
import new4 from '../../../../assets/images/news-4.jpeg'

const FlashNews = () => {
    const [isTabActive, setIsTabActive] = useState(0)
    return (
        <div className="content-right flash-news">
            <div className='popular-news row-1'>
                <Link to="/news" className="popular-news-title">
                    <div className="title-text">Popular News</div>
                    <i className="fa-solid fa-chevron-right"></i>
                </Link>
                <div className="news-column">
                    <div className="news-content">
                        <span className="news-number">01</span>
                        <Link to="/" className="news-item">
                            <img src={new1} alt="" className="background-news" />
                            <div className="text-content">
                                <p>
                                    Toney earns first England call-up as Henderson and Dier return
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="news-content">
                        <span className="news-number">02</span>
                        <Link to="/" className="news-item">
                            <img src={new2} alt="" className="background-news" />
                            <div className="text-content">
                                <p>
                                    In Focus: Antony arrival can kick-start Red Devils revival
                                </p>
                            </div>

                        </Link>
                    </div>
                    <div className="news-content">
                        <span className="news-number">03</span>
                        <Link to="/" className="news-item">
                            <img src={new3} alt="" className="background-news" />
                            <div className="text-content">
                                <p>
                                    In Focus: Paqueta can be West Ham's Iron fist
                                </p>
                            </div>

                        </Link>
                    </div>
                    <div className="news-content">
                        <span className="news-number">04</span>
                        <Link to="/" className="news-item">
                            <img src={new4} alt="" className="background-news" />
                            <div className="text-content">
                                <p>
                                    Azpilicueta absolves Silva of blame after Chelsea drop points to Salzburg
                                </p>
                            </div>

                        </Link>
                    </div>
                </div>
            </div>
            <div className='trending-news row-2'>
                <Link to="/news" className="popular-news-title">
                    <div className="title-text">Top Trending News</div>
                    <i className="fa-solid fa-chevron-right"></i>
                </Link>
                <ul className="nav-tabs" role="tablist">
                    <div onClick={() => setIsTabActive(0)} role="presentation" className={isTabActive === 0 ? "nav-tab-item    tab-active" : "nav-tab-item "}>
                        <p className="tab-text" role="tab">Newset</p>
                    </div>
                    <div onClick={() => setIsTabActive(1)} role="presentation" className={isTabActive === 1 ? "nav-tab-item tab-active" : "nav-tab-item"}>
                        <p className="tab-text" role="tab">Most Comment</p>
                    </div>
                </ul>
                {isTabActive === 0 && (<div className="news-column">
                    <div className="news-content">
                        <Link to="/" className="news-item">
                            <img src={new1} alt="" className="background-news" />
                            <div className="text-content">
                                <p>
                                    Toney earns first England call-up as Henderson and Dier return
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="news-content">
                        <Link to="/" className="news-item">
                            <img src={new2} alt="" className="background-news" />
                            <div className="text-content">
                                <p>
                                    In Focus: Antony arrival can kick-start Red Devils revival
                                </p>
                            </div>

                        </Link>
                    </div>
                    <div className="news-content">
                        <Link to="/" className="news-item">
                            <img src={new3} alt="" className="background-news" />
                            <div className="text-content">
                                <p>
                                    In Focus: Paqueta can be West Ham's Iron fist
                                </p>
                            </div>

                        </Link>
                    </div>
                    <div className="news-content">
                        <Link to="/" className="news-item">
                            <img src={new4} alt="" className="background-news" />
                            <div className="text-content">
                                <p>
                                    Azpilicueta absolves Silva of blame after Chelsea drop points to Salzburg
                                </p>
                            </div>

                        </Link>
                    </div>
                </div>)}
                {isTabActive === 1 && (<div className="news-column">

                    <div className="news-content">
                        <Link to="/" className="news-item">
                            <img src={new3} alt="" className="background-news" />
                            <div className="text-content">
                                <p>
                                    In Focus: Paqueta can be West Ham's Iron fist
                                </p>
                            </div>a
                        </Link>
                    </div>
                    <div className="news-content">
                        <Link to="/" className="news-item">
                            <img src={new4} alt="" className="background-news" />
                            <div className="text-content">
                                <p>
                                    Azpilicueta absolves Silva of blame after Chelsea drop points to Salzburg
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="news-content">
                        <Link to="/" className="news-item">
                            <img src={new1} alt="" className="background-news" />
                            <div className="text-content">
                                <p>
                                    Toney earns first England call-up as Henderson and Dier return
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="news-content">
                        <Link to="/" className="news-item">
                            <img src={new2} alt="" className="background-news" />
                            <div className="text-content">
                                <p>
                                    In Focus: Antony arrival can kick-start Red Devils revival
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>)}
            </div>

        </div>
    )
}

export default FlashNews