import React,{useState,useRef} from 'react';

const Map = () => {
    const [names,setNames] = useState([
        {id:1, title:'눈사람'},
        {id:2, title:'얼음'},
        {id:3, title:'눈'},
        {id:4, title:'바람'},
    ]);
    const onref = useRef();
    const [usein,setUsein] = useState('');
    const [prevId,setPrevId] = useState(4);
    const nameList = names.map(name => (<li onDoubleClick={() => {dbclick(name.id)}} key={names.id}>{name.title}</li>));
    const onchange = (e) => {
        setUsein(e.target.value);
    }
    const onclick = () => {
        const newName = names.concat({
            id:prevId+1,
            title:usein,
        });
        setPrevId(prevState => (
            prevState+1
        ));
        setNames(newName)
        setUsein('');
        onref.current.focus();
    }
    const dbclick = (id) => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }
    return (
        <>
            <input type="text" ref={onref} value={usein} onChange={onchange}></input>
            <button onClick={onclick}>추가하기</button>
            <ul>
                {nameList}
            </ul>
        </>
    )
}

export default Map;