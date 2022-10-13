import React from 'react'
import Slider from "react-slick";
import './fixtureSlider.css'

const settings = {
    className: "center",
    centerMode: false,
    centerPadding: "60px",
    autoplay: true,
    slidesToScroll: 1,
    slidesToShow: 5,
    autoplaySpeed: 2000,
    speed: 2000,
    infinite: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    ,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

};

const resultsMatch = [
    { time: 'September 17, 2022', homeTeam: { shortName:"TOT", name: "Tottenham Hotspur", flag: "https://lsm-static-prod.livescore.com/medium/enet/8586.png", scores: 6 }, awayTeam: { shortName:"LEI", name: "Leicester City", flag: "https://lsm-static-prod.livescore.com/medium/enet/8197.png", scores: 2 } },
    { time: 'September 17, 2022', homeTeam: { shortName:"NEW", name: "Newcastle United", flag: "https://lsm-static-prod.livescore.com/medium/enet/10261.png", scores: 1 }, awayTeam: { shortName:"BRN", name: "AFC Bournemouth", flag: "https://lsm-static-prod.livescore.com/medium/enet/8678.png", scores: 1 } },
    { time: 'September 18, 2022', homeTeam: { shortName:"LIL", name: "Lille", flag: "https://lsm-static-prod.livescore.com/medium/enet/8639.png", scores: 2 }, awayTeam: { shortName:"TFC", name: "Toulouse", flag: "https://lsm-static-prod.livescore.com/medium/enet/9941.png", scores: 1 } },
    { time: 'September 10, 2022', homeTeam: { shortName:"PSG", name: "Paris Saint-Germain", flag: "https://lsm-static-prod.livescore.com/medium/enet/9847.png", scores: 1 }, awayTeam: { shortName:"SB", name: "Brest", flag: "https://lsm-static-prod.livescore.com/medium/enet/8521.png", scores: 0 } },
    { time: 'September 12, 2022', homeTeam: { shortName:"ASM", name: "Monaco", flag: "https://lsm-static-prod.livescore.com/medium/enet/9829.png", scores: 2 }, awayTeam: { shortName:"OL", name: "Lyon", flag: "https://lsm-static-prod.livescore.com/medium/enet/9748.png", scores: 1 } },
    { time: 'September 18, 2022', homeTeam: { shortName:"TOR", name: "Torino", flag: "https://lsm-static-prod.livescore.com/medium/enet/9804.png", scores: 0 }, awayTeam: { shortName:"SAS", name: "Sassuolo", flag: "https://lsm-static-prod.livescore.com/medium/enet/7943.png", scores: 1 } },
    { time: 'September 13, 2022', homeTeam: { shortName:"EMP", name: "Empoli", flag: "https://lsm-static-prod.livescore.com/medium/enet/8534.png", scores: 1 }, awayTeam: { shortName:"ROM", name: "Roma", flag: "https://lsm-static-prod.livescore.com/medium/enet/8686.png", scores: 2 } },
    { time: 'September 12, 2022', homeTeam: { shortName:"JUV", name: "Juventus", flag: "https://lsm-static-prod.livescore.com/medium/enet/9885.png", scores: 2 }, awayTeam: { shortName:"SAL", name: "Salernitana", flag: "https://lsm-static-prod.livescore.com/medium/enet/6480.png", scores: 2 } }
]


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        ><i className="fa fa-angle-right"></i></div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        ><i className="fa fa-angle-left"></i></div>
    );
}


const FixtureSlider = () => {
    return (
        <div className="fixture-slider">
            <Slider {...settings}>
                {resultsMatch.map((resultMath, index) =>
                    <div key={index} className="slider-layer">
                        <div className="layer-time">{resultMath.time}</div>
                        <div className="layer-row-1 home-team">
                            <div className="home-team-content">
                                <img src={resultMath.homeTeam.flag} alt="" />
                                <p> {resultMath.homeTeam.shortName} </p>
                            </div>
                            <div className="home-team-scores">
                                <p>{resultMath.homeTeam.scores}</p>
                            </div>
                        </div>
                        <div className="layer-row-2 away-team">
                        <div className="away-team-content">
                                <img src={resultMath.awayTeam.flag} alt="" />
                                <p> {resultMath.awayTeam.shortName} </p>
                            </div>
                            <div className="away-team-scores">
                                <p>{resultMath.awayTeam.scores}</p>
                            </div>
                        </div>
                    </div>)}
            </Slider>
        </div>
    )
}

export default FixtureSlider

