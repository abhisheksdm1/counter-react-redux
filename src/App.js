import logo from './logo.svg';
import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';

import './App.css';



function App() {

 const count=useSelector(state=>state.count);
 const dispatch=useDispatch();

  return (
    <>
      <h1 className='Tittle'>Counter-React-Redux</h1>
      <div className='container'>
      <button className='btn1' onClick={()=>{dispatch({type:'increment'})}}>+</button>
      <h1 className='counter'>{count}</h1>
      <button className='btn2' onClick={()=>{dispatch({type:'decrement'})}}>-</button>
      </div>
    </>

  );
}

export default App;
