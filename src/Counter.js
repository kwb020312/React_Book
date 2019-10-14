import React, {useState} from 'react';

const Counter = () => {
    const [count,setCount] = useState(0);
    const onclick = () => {
        setCount(count+1);
    };

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={onclick}>카운트 업!</button>
        </div>
    )
};

export default Counter;