import React, {useEffect, useState} from 'react';
import IncrementValue from './components/IncrementValue';
import CounterValue from './components/CounterValue';
import Timer from './components/Timer';
import './App.css'


function App() {
  //how to set state variable... 
  const [counter, setCounter] = useState(0);
  const [increase, setIncrease] = useState(0);

  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  // handle the counter button and increament the value..
  const handleCounter = (props) => {
    setCounter(counter+5)
  }
  const handleIncrease = (props) => {
    setIncrease(increase+10)
  }
  // manage side-effect in react js.........
    useEffect(() => {
      setInput1(input1 + 5);
     }, [counter])
  
   useEffect(() => {
     setInput2(input2 + 10);
   }, [increase])

  return (
    <div className="p">
      <CounterValue currentCounter={counter} currentIncrease={increase}/>
      <IncrementValue handleCounter={handleCounter} handleIncrease={handleIncrease} />
      <div>
        <input value={input1} />
        <br />
        <br/>
        <input value={input2} />
      </div>
      <div>
        <Timer/>
      </div>
    </div>
  )
}

export default App
