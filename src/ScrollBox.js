import React,{useRef} from 'react';

const ScrollBox = ( ) => {
    const style = {
        border: '1px solid black',
        height: '300px',
        width: '300px',
        overflow: 'auto',
        position: 'relative'
    };
    const divref = useRef();
    const innerStyle = {
        width: '100%',
        height: '650px',
        background: 'linear-gradient(white, black)'
    }
    return(
        <div style={style} ref={divref}>
            <div style={innerStyle}></div>
        </div>
    )
}

export default ScrollBox;