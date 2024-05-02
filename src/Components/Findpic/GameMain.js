import React, { useEffect, useState } from 'react';
import './stylish.css'
import Card from './component/Card';

const gameImages=[
    {
        "src":`${process.env.PUBLIC_URL}/images/MemoryGame/freefire.jpg`,matched:false
    },
    {
        "src":`${process.env.PUBLIC_URL}/images/MemoryGame/jan.png`,matched:false
    },
    {
        "src":`${process.env.PUBLIC_URL}/images/MemoryGame/rahane.jpg`,matched:false
    },
    {
        "src":`${process.env.PUBLIC_URL}/images/MemoryGame/thala.jpg`,matched:false
    },
    {
        "src":`${process.env.PUBLIC_URL}/images/MemoryGame/tom.jpg`,matched:false
    },
    {
        "src":`${process.env.PUBLIC_URL}/images/MemoryGame/mt15.jpg`,matched:false
    },
]

function GameMain() {

    const[cards,setCards]=useState([])
    const[turns,setTurns]=useState(0)
    const[choiceOne,setChoiceOne]=useState(null)
    const[choiceTwo,setChoiceTwo]=useState(null)
    const[disabled,setDisabled]=useState(false)
     
    function shuffleCards(){
        const shuffleCards=[...gameImages, ...gameImages]
        .sort(()=>Math.random()-0.5)
        .map((card)=>({...card,id:Math.random()}))
        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffleCards)
        setTurns(0)
    }
     //console.log(cards,turns);

     //handle a choice
     const handleChoice=(card)=>{
        //console.log(card);
        choiceOne?setChoiceTwo(card):setChoiceOne(card)
     }
     //compare 2 selective card
     useEffect(()=>{
       
        if(choiceOne && choiceTwo){
            setDisabled(true)
           if(choiceOne.src === choiceTwo.src){

                 // console.log('those cards match');
                 if(choiceOne.src===choiceTwo.src){
                    setCards(precars=>{
                        return precars.map(card=>{
                            if(card.src === choiceOne.src){
                                return{...card,matched:true}
                            }else{
                                return card
                            }
                        })
                    })
                  }
                resetTurn()
            }else{
                console.log("those card do not match");
               setTimeout(()=>resetTurn(),1000) 
            }
        }
     },[choiceOne,choiceTwo])
       //console.log(cards);
     //reset choice & increase turn
     function resetTurn(){
        setChoiceOne(null)
        setChoiceTwo(null)
        setTimeout(prevTurn=>prevTurn+1)
        setDisabled(false)
     }
     //start new game automatically
     useEffect(()=>{
     shuffleCards()
     },[])
    
  return (
    <div>
    <h1 className='title'>Magic Match</h1>
    <button onClick={shuffleCards} className='reset' >New Game</button>
    
    <div className='card-grid'>
    
     {cards.map(card=>(
       <Card
        key={card.id}
       card={card}
       handleChoice={handleChoice}
        flipped={card === choiceOne || card === choiceTwo || card.matched}  
        disabled={disabled}
       />
        
     ))}
    </div>
    
    </div>
  )
}

export default GameMain