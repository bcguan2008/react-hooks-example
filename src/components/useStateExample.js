import React, { useEffect, useState } from 'react';

const useStateExample = function () {
    const [state, setState] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            alert(`you clicked ${state} times`);
        },3000)
    })

    return <div className='title'>
        <p>Demo1 - useState1</p>

        <div className="view">
            {state}
        </div>

        <div className='action'>
            <button onClick={() => {
                setState(state=>(state+1))
            }}>+1</button>
        </div>

        
    </div>
}

export default useStateExample;