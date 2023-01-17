import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { matchActions } from '../../redux/actions';
import './timeNav.css';
import Calendar from 'react-calendar';


const TimeNav = () => {
    const [isHideCalendar, setIsHideCalendar] = useState(true);
    const [isHideNav, setIsHideNav] = useState(true);
    const [isDayActive, setIsDayActive] = useState(2);
    const [dateChoosed, setDateChoosed] = useState(new Date([2022, 12, 10]));
    const [isDateChoosed, setIsDateChoosed] = useState(false);
    const [monthIndex, setMonthIndex] = useState(dateChoosed.getMonth())
    const [yearIndex, setYearIndex] = useState(dateChoosed.getFullYear())

    let varDay = new Date();               
    const dispatch = useDispatch()
    const today = new Date()
    const days = ["sunday", "monday", 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];
    let fiveDays2 = [{}, {}, {}, {}, {}, { dayOfWeek: "All Match", }]




    let fiveDays1 = [new Date([2022, 12, 10]), new Date([2022, 12, 10]), new Date([2022, 12, 10]), new Date([2022, 12, 10]), new Date([2022, 12, 10])]
    fiveDays1[0].setDate(fiveDays1[0].getDate() - 2);
    fiveDays1[1].setDate(fiveDays1[1].getDate() - 1);
    fiveDays1[3].setDate(fiveDays1[3].getDate() + 1);
    fiveDays1[4].setDate(fiveDays1[4].getDate() + 2);


    const getDate = (fiveDays1) => {
       


        fiveDays1.map((day, index) => {
            fiveDays2[index].dayOfWeek = days[day.getDay()];
            fiveDays2[index].utcDay = day.getDate();
            fiveDays2[index].month = month[day.getMonth()];
            fiveDays2[index].shortMonth = fiveDays2[index].month.slice(0, 3)
            return []
        })
    }
    getDate(fiveDays1)

    let shortDateChoose = '';



    const getDateChose = () => {
        shortDateChoose = '';
        shortDateChoose += today.getDate();
        shortDateChoose += " ";
        shortDateChoose += month[today.getMonth()].slice(0, 3)
    }
    getDateChose()

    useEffect(() => {
        const day = dateChoosed.toString().split(" ").slice(1,4).join(" ")
        dispatch(matchActions.getMatchesByDay(day))
    }, [dispatch, dateChoosed])

    console.log(dateChoosed)

    return (
        <div className="scores-shedule-row-1">
            <div className="time-nav">
                {isHideCalendar && !isDateChoosed && (<div className="left-content">
                    <div onClick={() => setIsDayActive(5)} className={isDayActive === 5 ? "match-calender-live live-active" : "match-calender-live"}>
                        <span>live</span>
                    </div>
                    <div className="match-calender-days">
                        {
                            fiveDays2.map((day, index) => {

                                return (

                                    <div key={index}>
                                        {index < 5 && (<div key={index} onClick={() => {
                                            setIsDayActive(index)
                                            let day = fiveDays1[index].toString().split(" ").slice(1,4).join(" ")
                                            dispatch(matchActions.getMatchesByDay(day))
                                            }} className={isDayActive === index ? "match-calender-day day-active" : "match-calender-day"}>
                                            <span className="day">{index === 2 ? 'today' : day.dayOfWeek.slice(0, 3)}</span>
                                            <span className="dayutc-month">{day.utcDay + ' ' + day.shortMonth}</span>
                                        </div>)}

                                        {index === 5 && (<div key={index}
                                            onClick={() => {
                                                setIsDayActive(index + 1)
                                                dispatch(matchActions.getMatches())
                                            }}
                                            className={isDayActive === index + 1 ? "match-calender-day day-active" : "match-calender-day"}>
                                            <span className="day">All</span>
                                            <span className="dayutc-month">{" "}</span>
                                        </div>)}
                                    </div>
                                )
                            })
                        }
                    </div></div>)}
                {!isHideCalendar && (!isDateChoosed || !isHideNav) && (<div className="left-content">
                    <div onClick={() => {
                        setDateChoosed(new Date([2022, 12, 10]))
                    }} className="today" >
                        <span className="day">today</span>
                        <span className="dayutc-month">{(new Date([2022, 12, 10])).toString().split(' ').slice(1,3).join(' ')}</span>
                    </div>
                    <div className="calendar-nav-center-content">
                        <i onClick={() => {
                            let n = monthIndex
                            if (n - 1 <= 0) setYearIndex(yearIndex - 1);
                            setMonthIndex(n - 1 === -1 ? n - 1 + 12 : n - 1 === 12 ? n - 1 + 12 : n - 1);
                            document.querySelector('button.react-calendar__navigation__prev-button').click()
                        }} className="fa-solid fa-chevron-left"></i>
                        <div className="month-year">
                            <span className="month">{month[monthIndex]}</span>
                            <span className="year">{yearIndex}</span>
                        </div>
                        <i onClick={() => {
                            let n = monthIndex
                            if (n + 1 > 11) setYearIndex(yearIndex + 1);
                            setMonthIndex(n + 1 === 12 ? n + 1 - 12 : n + 1 === -1 ? n + 1 + 12 : n + 1)
                            document.querySelector('button.react-calendar__navigation__next-button').click()
                        }} className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>)}

                {(!isHideNav && isHideCalendar) && isDateChoosed && (<div className="left-content">
                    <div onClick={() => { setIsDateChoosed(false); setDateChoosed(new Date([2022, 12, 10])) }} className="today" >
                        <span className="day">today</span>
                        <span className="dayutc-month">{(new Date([2022, 12, 10])).toString().split(' ').slice(1,3).join(' ')}</span>
                    </div>
                    <div className="calendar-nav-center-content">
                        <i onClick={() => {
                            varDay = new Date(dateChoosed.getTime() - 86400000);
                            setDateChoosed(varDay)
                        }} className="fa-solid fa-chevron-left"></i>
                        <div className="month-year">
                            <span className="day-of-week">{days[dateChoosed.getDay()]}</span>
                            <span className="day-month-year">{
                                dateChoosed.getDate() + ' ' + month[dateChoosed.getMonth()] + ', ' + dateChoosed.getFullYear()
                            }</span>
                        </div>
                        <i onClick={() => {
                            varDay = new Date(dateChoosed.getTime() + 86400000);
                            setDateChoosed(varDay)
                        }} className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>)}
                <div className="match-calendar-dp-trigger">
                    <span><i onClick={() => {
                        setIsHideCalendar(!isHideCalendar);
                        setIsHideNav(false);
                    }} className={!isHideCalendar ? "fa-regular fa-calendar-days active-button" : "fa-regular fa-calendar-days"}></i></span>
                </div>
                <Calendar onClickDay={() => {
                    setIsHideCalendar(true);
                    setIsHideNav(false);
                    setIsDateChoosed(true);
                }} onChange={(date) => { setDateChoosed(date) }} value={dateChoosed} className={isHideCalendar ? "hide-calendar" : ''} />
            </div>
        </div>
    )
}

export default TimeNav