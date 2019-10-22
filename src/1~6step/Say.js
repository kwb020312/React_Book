import React ,{useState} from 'react';

const Say = () =>{
    const [alert,setAlert] = useState('');
    const [useColor,setUseColor] = useState('');
    const enter = () => {
        setAlert('입장 하셨습니다!');
    }
    const exit = () => {
        setAlert('퇴장 하셨습니다!');
    }
    const red = () => {
        setUseColor('red');
    }
    const green = () => {
        setUseColor('green');
    }
    const blue = () => {
        setUseColor('blue');
    }
    return(
        <>
            <p></p>
            <button onClick={enter}>입장</button>
            <button onClick={exit}>퇴장</button>
            <h1 style={{color:useColor}} className='useColor'>{alert}</h1>
            <button style={{color:'red'}} onClick={red} value="빨">빨</button>
            <button style={{color:'green'}} onClick={green}>초</button>
            <button style={{color:'blue'}} onClick={blue}>파</button>
        </>
    )
}

export default Say;