import React, {useState} from 'react';

const Counter = () => {
    const [count,setCount] = useState(0);
    const onclick = () => {
        setCount(count+1);
    };
    const down = () => {
        setCount(prevState => (prevState-1))
    }
    return(
        <div>
            <h1>{`현재 카운터 값은${count} 입니다.`}</h1>
            <button onClick={onclick}>+</button>
            <button onClick={down}>-</button>
        </div>
    )
};

export default Counter;