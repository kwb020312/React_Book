import React,{useState, useEffect,memo} from 'react';
// useEffect 는 LifeCycle 을 사용하기위해 import 해온다
const Info = () => {
    const [name,setName] = useState('');
    const [nickname,setNickname] = useState('');
    useEffect(() => {
        // componentDidMount 의 과정
        setNickname('Chobby');
        console.log('componentDidMount');
        return () => {
            // componentWillUnmount 의 과정이다
            setNickname('');
            console.log('componentWillUnmount');
        }
        // 빈 괄호는 DidMount 를 위해 필요하며 여기다 넣는 State 는 호출을 담당하는 State이다
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