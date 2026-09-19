import React, { useState, useEffect } from "react";

export default function Free() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            console.log("Reading count:", count);
            setCount( prevCount => prevCount + 1); // Use functional update to ensure the latest state is used
        }, 1000);

        return () => clearInterval(id);
    }, []); // Re-runs effect whenever count changes

    return <h1>{count}</h1>;
}