import React ,{useReducer} from 'react'

const initialState = {
    count:0,
};

const reducer = (state,action) => {
    switch(action.type) {
        case 'INC' :
            return  {count:state.count+1}
        case 'DEC' :
            return {count:state.count-1}
    }
};



const Reducer = ( ) => {
    const [state,dispatch] = useReducer(reducer,initialState);
    const inc = () => {
        dispatch({
            type: 'INC',
        })
    }
    const dec = () => {
        dispatch({
            type: 'DEC',
        })
    }
    return (
        <>
            <h1>카운트의 값은 {state.count}</h1>
            <p>
                <button onClick={inc}>+</button>
                <button onClick={dec}>-</button>
            </p>
        </>
    )
}

export default Reducer;