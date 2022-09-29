import React from 'react'
import './matchLineUp.css'
import logo from '../../../../assets/images/soccer-field.png'
import styled from 'styled-components'

const lineUp = [
    {
        id: 1, team: "home team", officalPlayer: [
            { number: 15, name: "Asmir Begovic", position: "GK", card: false, cardType: "", score: 0, change: false, changeType: "", playerChange: "" },
            { number: 3, name: "Nathan Patterson", position: "RDF", card: false, cardType: "", score: 0, change: false, changeType: "", playerChange: "" },
            { number: 30, name: "Conor Coady", position: "MDF", card: true, cardType: "yellow", score: 0, change: false, changeType: "", playerChange: "" },
            { number: 2, name: "James Tarkowski", position: "MDF", card: false, cardType: "", score: 0, change: false, changeType: "", playerChange: "" },
            { number: 19, name: "Vitaliy Mykolenko", position: "LDF", card: false, cardType: "", score: 0, change: false, changeType: "", playerChange: "" },
            { number: 8, name: "Amadou Mvom Onana", position: "RMMF", card: false, cardType: "", score: 0, change: false, changeType: "", playerChange: "" },
            { number: 27, name: "Idrissa Gueye", position: "MMF", card: false, cardType: "", score: 0, change: false, changeType: "", playerChange: "" },
            { number: 17, name: "Alex Iwobi", position: "LMF", card: false, cardType: "", score: 0, change: false, changeType: "", playerChange: "" },
            { number: 11, name: "Demarai Gray", position: "RFW", card: false, cardType: "", score: 0, change: true, changeType: "out", playerChange: "Abdoulaye Doucoure" },
            { number: 20, name: "Neal Maupay", position: "MFW", card: false, cardType: "", score: 1, change: true, changeType: "out", playerChange: "Salomon Rondon" },
            { number: 10, name: "Anthony Gordon", position: "LFW", card: true, cardType: "yellow", score: 0, change: true, changeType: "out", playerChange: "Dwight McNeil" },
        ],
        subtitutePlayer: [
            { number: 35, name: "Eldin Jakupovic", score: 0, change: false, changeType: "", changePlayer: "" },
            { number: 5, name: "Michael Keane", score: 0, change: false, changeType: "", changePlayer: "" },
            { number: 23, name: "Seamus Coleman", score: 0, change: false, changeType: "", changePlayer: "" },
            { number: 29, name: "Ruben Vinagre", score: 0, change: false, changeType: "", changePlayer: "" },
            { number: 7, name: "Dwight McNeil", score: 0, change: true, changeType: "in", changePlayer: "Anthony Gordon", card: true, cardType: "yellow" },
            { number: 16, name: "Abdoulaye Doucoure", score: 0, change: true, changeType: "in", changePlayer: "Demarai Gray", card: false, cardType: "" },
            { number: 26, name: "Tom Davies", score: 0, change: false, changeType: "", changePlayer: "" },
            { number: 37, name: "Tom Davies", score: 0, change: false, changeType: "", changePlayer: "" },
            { number: 33, name: "Salomon Rondon", score: 0, change: true, changeType: "in", changePlayer: "Neal Maupay" },
        ],
        injuries: [
            { name: "Yerry Mina", typeInjury: "Ankle injury" },
            { name: "Jordan Pickford", typeInjury: "Thigh injury" },
            { name: "Andros Townsend", typeInjury: "Cruciate ligament injury" },
            { name: "Ben Godfrey", typeInjury: "Broken leg" },
            { name: "Mason Holgate", typeInjury: "Knee injury" },
            { name: "Dominic Calvert-Lewin", typeInjury: "Knee injury" },
        ]
    },
    {
        id: 2, team: "away team", officalPlayer: [
            { number: 1, name: "Lukasz Fabianski", position: "GK", card: false, cardType: "", score: 0, change: false, changeType: "", playerChange: "" },
            { number: 3, name: "Aaron Cresswell", position: "RDF", card: false, cardType: "", score: 0, change: true, changeType: "out", playerChange: "Emerson" },
            { number: 24, name: "Thilo Kehrer", position: "MDF", card: false, cardType: "", score: 0, change: false, changeType: "", playerChange: "" },
            { number: 4, name: "Kurt Zouma", position: "MDF", card: false, cardType: "", score: 0, change: false, changeType: "", playerChange: "" },
            { number: 5, name: "Vladimir Coufal", position: "LDF", card: false, cardType: "", score: 0, change: false, changeType: "", playerChange: "" },
            { number: 41, name: "Declan Rice", position: "RMMF", card: false, cardType: "", score: 0, change: false, changeType: "", playerChange: "" },
            { number: 28, name: "Tomas Soucek", position: "LMF", card: false, cardType: "", score: 0, change: false, changeType: "", playerChange: "" },
            { number: 8, name: "Pablo Fornals", position: "RFW", card: false, cardType: "", score: 0, change: true, changeType: "out", playerChange: "Maxwel Cornet" },
            { number: 11, name: "Lucas Paqueta", position: "MFW", card: false, cardType: "", score: 0, change: true, changeType: "out", playerChange: "Said Benrahma" },
            { number: 20, name: "Jarrod Bowen", position: "LFW", card: false, cardType: "", score: 0, change: false, changeType: "", playerChange: "" },
            { number: 9, name: "Michail Antonio", position: "STK", card: false, cardType: "", score: 0, change: true, changeType: "out", playerChange: "Gianluca Scamacca" },
        ],
        subtitutePlayer: [
            { number: 13, name: "Alphonse Areola", score: 0, change: false, changeType: "", changePlayer: "" },
            { number: 15, name: "Craig Dawson", score: 0, change: false, changeType: "", changePlayer: "" },
            { number: 21, name: "Angelo Ogbonna", score: 0, change: false, changeType: "", changePlayer: "" },
            { number: 33, name: "Emerson", score: 0, change: true, changeType: "in", changePlayer: "Aaron Cresswell" },
            { number: 10, name: "Manuel Lanzini", score: 0, change: false, changeType: "", changePlayer: "" },
            { number: 12, name: "Flynn Downes", score: 0, change: false, changeType: "", changePlayer: "" },
            { number: 7, name: "Gianluca Scamacca", score: 0, change: true, changeType: "in", changePlayer: "Michail Antonio", card: true, cardType: "yellow" },
            { number: 14, name: "Maxwel Cornet", score: 0, change: true, changeType: "in", changePlayer: "Pablo Fornals" },
            { number: 22, name: "Said Benrahma", score: 0, change: true, changeType: "in", changePlayer: "Lucas Paqueta" },
        ],
        injuries: [
            { name: "Ben Johnson", typeInjury: "Knock " },
            { name: "Ben Johnson", typeInjury: "Ankle injury" },
        ]
    }
]

const PlayerCard = styled.span`
    ${props => props.card && `
    width: 8px;
    height: 12px;
    border-radius: 2px;
    position: absolute;
    background: ${props.card};
    top: 0;
    right: 0;
    z-index: 3;
    `}
`

const MatchLineUp = () => {
    return (
        <div className="match-line-up__container">
            <div className="match-line-up__field">
                <img src={logo} alt="" className="background-field" />
                <div className="home-team-line-up__container">
                    {lineUp[0].officalPlayer.map((player) => <div className="home-player__container">
                        <div key={player.id} className="home-player__inner">
                            <div className="home-player__number">{player.number}</div>
                            <div className="home-player__name">{player.name}</div>
                            {player.card && <PlayerCard card={player.cardType}></PlayerCard>}
                            {player.score !== 0 && <span className="home-player__score">
                                <i className="fa-solid fa-futbol"></i>
                            </span>}
                            {player.change && <span className="home-player__change">
                                <i class="fa-solid fa-arrow-down"></i>
                            </span>}

                        </div>
                    </div>)}
                </div>
                <div className="away-team-line-up__container">
                    {lineUp[1].officalPlayer.map((player) => <div className="away-player__container">
                        <div key={player.id} className="away-player__inner">
                            <div className="away-player__number">{player.number}</div>
                            <div className="away-player__name">{player.name}</div>
                            {player.card && <PlayerCard card={player.cardType}></PlayerCard>}
                            {player.score !== 0 && <span className="away-player__score">
                                <i className="fa-solid fa-futbol"></i>
                            </span>}
                            {player.change && <span className="away-player__change">
                                <i class="fa-solid fa-arrow-down"></i>
                            </span>}
                        </div>
                    </div>)}
                </div>
            </div>
            <div className="subtitute-player__container">
                <div className="subtitute-player__header">Subtitute Player </div>
                <div className='subtitute-player__box'>
                    <div className="subtitute-player__inner">
                        <div className='home-subtitute-players'>
                            {lineUp[0].subtitutePlayer.map(player => <div key={player.number} className="home-subtitute-player">
                                <div className="home-subtitute-player__detail"></div>
                            </div>)}
                        </div>
                        <div className='away-subtitute-players'>
                            {lineUp[1].subtitutePlayer.map(player => <div key={player.number} className="away-subtitute-player">
                                <div className="away-subtitute-player__detail"></div>

                            </div>)}

                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default MatchLineUp