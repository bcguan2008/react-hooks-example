import React, {useState,useEffect} from 'react';
import useCount from './hooks/useCount';
import ReducerExample from './components/useReducerExample';
import EffectExample from './components/useEffectExample';
import ContextExample from './components/useContextExample';
import RefExample from './components/useRefExample';

function App() {
  return (<div>
    <EffectExample /> 
    <ReducerExample /> 
    <ContextExample />
    <RefExample />
  </div>)
}

export default App;
