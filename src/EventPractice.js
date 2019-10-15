import React ,{useState} from 'react';

const Event = () => {
    const [message,setMessage] = useState('');
    const [username,setUsername] = useState('');
    const changeinput = (e) => {
        setMessage(e.target.value);
    }
    const changename = (e) => {
        setUsername(e.target.value);
    }
    const btclick = (e) => {
        alert(`${username} : ${message}`);
    }
    const KeyPress = (e) => {
        if(e.key === 'Enter') {
            alert(`${username} : ${message}`);
        }
    }
    return(
        <>
            <h1>이벤트 연습</h1>
            <input type="text" placeholder="input username" onChange={changename} value={username}></input>
            <input type='text' onChange={changeinput} value={message} placeholder='Input Value' onKeyPress={KeyPress}></input>
            <button onClick={btclick}>확인</button>
        </>
    )
};

export default Event;