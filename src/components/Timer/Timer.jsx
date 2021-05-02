import React, { useState, useEffect } from 'react'

const Timer = ({airstamp}) => {

     const [seconds, setSeconds] = useState(0);
     const [minutes, setMinutes] = useState(0);
     const [hours, setHours] = useState(0);
     const [days, setDays] = useState(0);
     const [months, setMonths] = useState(0);
     const [years, setYears] = useState(0);

    useEffect(() => {
        let timer = setInterval(() => {
            const today = new Date();
            const airdate = Date.parse(airstamp);

            var larger = 0; 
            var smaller = 0;

            if(today > airdate){
                larger = today;
                smaller = airdate;
            }else{
                larger = airdate;
                smaller = today;
            }

            var milliseconds = larger - smaller;
            var seconds = Math.floor(milliseconds / 1000);
            var minutes = Math.floor(seconds / 60);
            var hours = Math.floor(minutes / 60);
            var days = Math.floor(hours / 24);
            var months = Math.floor(days / 30.4167);
            var years = Math.floor(months / 12)

            months = months - (years * 12);
            days = days - (years * 12 * 30.4167) - (months * 30.4167);
            hours = hours - (years * 12 * 30.4167 * 24) - (months * 30.4167 * 24) - (days * 24);
            minutes = minutes - (years * 12 * 30.4167 * 24 * 60) - (months * 30.4167 * 24 * 60) - (days * 24 * 60) - (hours * 60);
            seconds = seconds - (years * 12 * 30.4167 * 24 * 60 * 60) - (months * 30.4167 * 24 * 60 * 60) - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

            setYears(Math.floor(years));
            setMonths(Math.floor(months));
            setDays(Math.floor(days));
            setHours(Math.floor(hours));
            setMinutes(Math.floor(minutes));
            setSeconds(Math.floor(seconds));
        }, 1000);

        return () => {
            clearInterval(timer)
        }
    }, [years, months, days, hours, minutes, seconds]);

    const chooseDate = () => {
        if(years > 0){
            return <h2>{`${years} YEARS ${months} MONTHS ${days} DAYS`}</h2>;
        }else if(months > 0){
            return <h2>{`${months} MONTHS ${days} DAYS ${hours} HOURS`}</h2>
        }else if(days > 0){
            return <h2>{`${days} DAYS ${hours} HOURS ${minutes} MINUTES`}</h2>
        }else{
            return <h2>{`${hours} HOURS ${minutes} MINUTES ${seconds} SECONDS`}</h2>
        }
    }

    return (
      <div>
        {chooseDate()}
      </div>
    );
}

export default Timer
