import React, {useEffect} from 'react';
import useCount  from '../hooks/useCount';

const useEffectExample = function(){
    const [count,addCount] = useCount(0);

    useEffect(()=>{
        let interval = setInterval(() => {
            addCount();
        }, 1000);
        return ()=>{
            clearInterval(interval);
        }
    },[count])

    return <div className='title'>
        <p>Demo1 - useState1</p>
    
        <div className="view">
        {count}
        </div>

        <div className='action'>
        <button onClick={()=>{
            addCount();
        }}>+1</button>
        </div>
    </div>
}
export default useEffectExample;