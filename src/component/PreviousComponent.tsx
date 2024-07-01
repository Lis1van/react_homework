import React, {useEffect, useState} from 'react';
import usePrevious from "../custom-hooks/usePrevois";

const PreviousComponent = () => {
    const [count, setCount] = useState<number>(0);
    const prevCount = usePrevious(count);

    useEffect(() => {
        if (prevCount !== undefined) {
            console.log(`Previous count: ${prevCount}, Current count: ${count}`);
        }
    }, [count, prevCount]);

    return (
        <div>
            <p>Current count: {count}</p>
            <p>Previous count: {prevCount}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default PreviousComponent;
