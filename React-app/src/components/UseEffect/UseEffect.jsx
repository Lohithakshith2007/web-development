import { useState, useEffect } from 'react';

export default function VisibleBugDemo() {
  const [seconds, setSeconds] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    console.log(`--- Effect ran! Click count: ${clickCount} ---`);

    // Starts a new interval every time clickCount changes
    const timerId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // NOTICE: We left out the cleanup function (clearInterval) on purpose!
    // return () => clearInterval(timerId);

  }, [clickCount]); // Effect re-runs whenever clickCount changes

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Timer: {seconds} seconds</h1>
      <p>Button Clicked: {clickCount} times</p>
      
      <button 
        onClick={() => setClickCount(prev => prev + 1)}
        style={{ padding: '10px 15px', fontSize: '16px', cursor: 'pointer' }}
      >
        Click to Trigger Re-render
      </button>
    </div>
  );
}