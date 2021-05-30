import {useState} from 'react';

const useCount  = (initialValue)=>{
    const [count,setCount] = useState(initialValue);

    return [
        count,
        ()=>{
            setCount(x=>x+1)
        }
    ]
}

export default useCount;