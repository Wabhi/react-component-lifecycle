import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setTime(new Date()), 6 * 1000);
        console.log("componentDidMount|componentDidUpdate with valueOf : ", id);
        return () => {
            console.log("useEffect as component unmount valueOf : ", id);
            clearInterval();
        };
    })
    return (
        <div>
            
        </div>
    );
};

export default Timer;