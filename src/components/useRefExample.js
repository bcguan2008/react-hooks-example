import React, {useRef,useReducer} from 'react';

const initialState = {count:0}     
const reducer = (state,action)=>{
    switch (action.type) {
        case 'add':
            return {count:state.count+1};
        case 'sub':
            return {count:state.count-1}
        default:
            return {count:state.count};
    }
}

const useRefExample = function(){
    const [state,dispatch] = useReducer(reducer,initialState);

    const refInput = useRef();

    const prev = useRef(null);

    return (<div className='title'>
        <p>Demo5 - useRef</p>

        <div className="view">
            <input ref={refInput}/>
        </div>

        <div className='action'>
            <button onClick={()=>{
                refInput.current.focus();
            }}>focus</button>
        </div>

        <div className='view'>
            <p>当前的值:{state.count}</p>
            <p>之前的值:{prev.current}</p>
        </div>
        <div>
            <button onClick={()=>{
                prev.current = state.count;
                dispatch({type:'add'})
            }}>add</button>
            <button onClick={()=>{
                prev.current = state.count;
                dispatch({type:'sub'})
            }}>sub</button>
        </div>

    </div>)
}
export default useRefExample;