import React, {useState,useRef} from 'react';
import './ValidationSample.css';

const ValidationSample =  () => {
    const [password,setPassword] = useState('');
    const [clicked,setClicked] = useState(false);
    const [validated,setValidated] = useState(false);
    const inputref = useRef();

    const pwchange = (e) => {
        setPassword(e.target.value);
    };
    const btClick = (e) => {
        setClicked(true);
        setValidated(password==='0000');
        setPassword('');
        inputref.current.focus();
    }
    return(
        <>
            <input type="password" ref={inputref} value={password} onChange={pwchange} className={clicked ? (validated ? 'success' : 'failure') : ''}></input>
            <button onClick={btClick}>검증하기</button>
        </>
    )
}

export default ValidationSample;