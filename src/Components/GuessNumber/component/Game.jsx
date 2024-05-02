import React, { useCallback, useEffect, useState } from 'react'
import Results from './Results';
import './Game.css'
import { render } from '@testing-library/react';


const secNum=Math.floor(Math.random()*10)+1;
function Game() {

  const[term,setterm]=useState();


 

  function handlechange(e){
     setterm(e.target.value)
      // console.log(value);
  }
   

 
  return (
   
    
    <div className='body'>
    <div className='wrapper'>
      
         
          <section className='guess-game'>
          <h1 className='game-name'>Guess The Number</h1>
             <label htmlFor='text' className='description'>Guess the number between 1 to 10 </label>
             </section>
        
             <input id="text" type='number' onChange={handlechange}   className='input' />
         
         <Results 
         secNum={secNum}
         term={term}
      />
           
             
             
          
         
    
    </div>
    </div>
 
  )
}

export default Game