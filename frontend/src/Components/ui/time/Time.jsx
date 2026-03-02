import React, { useState, useEffect } from 'react';

const Time = () => {
    const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });

    useEffect(() => {
        const finishline = new Date('March 9, 2026 23:59:59').getTime();
        const startCountdown = () => {
            const now = new Date().getTime();
            const gap = finishline - now;
            if (gap > 0) {
                setTimeLeft({
                    days: String(Math.floor(gap / (1000 * 60 * 60 * 24))).padStart(2, '0'),
                    hours: String(Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
                    minutes: String(Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
                    seconds: String(Math.floor((gap % (1000 * 60)) / 1000)).padStart(2, '0')
                });
                setTimeout(startCountdown, 1000);
            }
        };
        startCountdown();
    }, []);

    return (
        <div className="d-flex gap-1 justify-content-center justify-content-lg-start">
            {[
                { label: 'Days', val: timeLeft.days, hideMobile: true },
                { label: 'Hour', val: timeLeft.hours },
                { label: 'Min', val: timeLeft.minutes },
                { label: 'Sec', val: timeLeft.seconds }
            ].map((item, i) => (
                <div key={i} className={`p-1 bg-light border rounded text-center ${item.hideMobile ? 'd-none d-md-block' : ''}`} style={{ minWidth: '45px' }}>
                    <div className="fw-bold mb-0" style={{fontSize: '14px'}}>{item.val}</div>
                    <small style={{ fontSize: '10px', color: '#8B96A5' }}>{item.label}</small>
                </div>
            ))}
        </div>
    );
};

export default Time;