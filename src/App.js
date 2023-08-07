
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { decrement, increment } from './Redux/counter';

function App() {
  const {count} = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button onClick={()=> dispatch(increment())}>Increase</button>
      <button onClick={()=> dispatch(decrement())}>Decrease</button>
    </div>
  );
}

export default App;
