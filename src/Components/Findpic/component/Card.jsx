import React from 'react'

const finfImage=[
  {
    src:`${process.env.PUBLIC_URL}/images/MemoryGame/finding.jpg`
  }
]

console.log("pugazh",finfImage);

function Card({card,handleChoice,flipped,disabled}) {
    function handleClick(){
        if(!disabled)
        { handleChoice(card)}
       

    }
  return (
    
    <div className='card' >
    <div className={flipped ? "flipped" :""}> 
          <img className='front' src={card.src} alt='card-front' />    
          <img className='back' src={finfImage.map((img)=>img.src)} alt='card-back' onClick={handleClick} />       
    </div>
 </div>
   
  )
}

export default Card