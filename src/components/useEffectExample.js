import React, { useEffect, useState, useCallback, useReducer } from 'react';

const nameList = ['ben', 'lucy', 'peter', 'mylo', 'wind', 'leon', 'lynn']

const reducer = (state, action) => {
    switch (action.type) {
        case 'tick':
            return {
                ...state,
                count: state.count + action.value
            }
        default:
            throw new Error('no action')
    }
}

const Count = ({ step }) => {
    const [state, dispath] = useReducer(reducer, { count: 0 });

    console.log('count render', step);
    useEffect(() => {
        console.log('effect');
        const id = setInterval(() => {
            dispath({ type: 'tick', value: step })
        }, 1000)

        return () => {
            console.log('remove effect')
            clearInterval(id);
        }
    }, [step])

    return <div>{state.count}</div>
}

const useEffectExample = function () {
    const [step, setStep] = useState(1);

    console.log('component-render');

    return <div>
        <Count step={step}></Count>
        <input value={step} onChange={(e) => {
            const number = Number(e.target.value);
            setStep(number);
        }}></input>
    </div>
}

export default useEffectExample;