import React, {useReducer} from 'react';

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

const useReducerExample = function(){
    const [state,dispatch] = useReducer(reducer,initialState);

    return <div className='title'>
        <p>Demo3 - useReducer</p>
    
        <div className="view">
        {state.count}
        </div>

        <div className='action'>
        <button onClick={()=>{
            dispatch({type:'add'});
        }}>+1</button>

        <button onClick={()=>{
            dispatch({type:'sub'});
        }}>-1</button>
        </div>
    </div>
}
export default useReducerExample;