import React,{useState} from 'react'
import LifeCycleSample from './LifeCycleSample'
import ErrorBoundary from './ErrorBoundary'

const Color = () => {
    const [color,setColor] = useState('#000000');
    const getcolor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    const onclick = () => {
        setColor(getcolor);
    }
    return(
        <>
            <button onClick={onclick}>랜덤 색상</button>
            <ErrorBoundary>
                <LifeCycleSample color={color}/>
            </ErrorBoundary>
        </>
    )
}

export default Color;