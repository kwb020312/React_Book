import React,{useState, useEffect,memo} from 'react';

const Info = () => {
    const [name,setName] = useState('');
    const [nickname,setNickname] = useState('');
    useEffect(() => {
        setNickname('Chobby');
        console.log('componentDidMount');
        return () => {
            setNickname('');
            console.log('componentWillUnmount');
        }
    },[]);
    const chname = (e) => {
        setName(e.target.value);
    }
    const chnick = (e) => {
        setNickname(e.target.value);
    }
    return(
        <>
            <p><input value={name} onChange={chname} placeholder="이름을 입력해주세요"></input></p>
            <p><input value={nickname} onChange={chnick} placeholder="별명을 입력해주세요"></input></p>
            <p></p>
            <p>{`이름 : ${name}`}</p>
            <p>{`별명 : ${nickname}`}</p>
        </>
    )
}

export default memo(Info);