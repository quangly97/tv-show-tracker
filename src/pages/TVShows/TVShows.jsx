import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Recent, Upcoming, TBA, Ended } from '../../components';

const TVShows = () => {

    const [showRecent, setShowRecent] = useState(true);
    const [showEnded, setShowEnded] = useState(true);
    const [showTBA, setShowTBA] = useState(true);
    const [showUpcoming, setShowUpcoming] = useState(true);

    return (
        <div>
            <Link to='/search'><button className='btn'>+</button></Link>
            <h2 onClick={() => setShowRecent(!showRecent)}>RECENTLY AIRED</h2>
            {
                showRecent && <Recent/>
            }
            <h2 onClick={() => setShowUpcoming(!showUpcoming)}>UPCOMING</h2>
            {
                showUpcoming && <Upcoming/>
            }
            <h2 onClick={() => setShowTBA(!showTBA)}>TO BE ANNOUNCED</h2>
            {
                showTBA && <TBA/>
            }
            <h2 onClick={() => setShowEnded(!showEnded)}>ENDED</h2>
            {
                showEnded && <Ended/>
            }
        </div>
    )
}

export default TVShows;
