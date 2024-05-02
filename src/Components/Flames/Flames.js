import React, { useEffect, useState } from "react";
import './flames.css'


const Flames=()=>{

    const[urName,setUrName]=useState('');
    const[crushName,setCrushName]=useState('');
    const[names,setNames]=useState([]);
    const[result,setResult]=useState('Enter name');
    const[comment,setComment]=useState('')
   

    function handlleNameChange(e){
    
     setUrName(e.target.value);
    
    }
    const handleButtonClick=()=>{
      setNames(()=> [urName,crushName])  
    
     
      
    
    }
    function handleClick(){
      setUrName('');
      setCrushName('');
      setNames([])
      setResult("enter name");
      setComment("comment")
     // console.log(result);
     
    
     }
    useEffect(function selection(){
  
  
     if(names){
      const flatSplitArray = names.map(str => str.split('')).flat();
   
     const uniqueArray = Array.from(new Set(flatSplitArray));
      //console.log("hi",uniqueArray);
    const length=uniqueArray.length;
    //console.log(length);
    //console.log(names);
   
      if(length===8 || length ===12 || length ===13 || length ===17){
       
        setResult("Affection");
        setComment("sister ah  nalla pathugoo thala..");

     
     }else if(length===1 ){
     
      setResult("Sister");
      setComment("sister ah  nalla pathugoo thala..")
      
     
     }else if(length===10 || length ===19 || length===9){
      setResult("Love");
      setComment("Yoww...love-u thala love.  i'm increasing your confidence level ")
     
     }
     else if(length===3 || length ===5 || length ===16 || length ===14 || length ===18 || length ===21|| length ===23){
    
      setResult("Friend");
      setComment("Friend Nalla pathugoo thala ..");
     
    }
     else if(length===6 || length ===11 || length ===15 || length ===26 ){
      setResult("Marriage");
      setComment("May be future la  Partner oda irugalam..")
    
   
     } else if(length===2 || length ===4 || length ===7 || length ===20||length===22||length===24||length===25){
       setResult("Enenmy");
       setComment("Don't worry thala...summa sonnen");
     
      }
  
     
      }
    
});
  


  return(
    <div >
    
    <main>
     <center><h2>Flames</h2></center>
     <label className="name1">Your Name:</label>
     <input className="text1" type="text" placeholder="(i.e)Fahadh" value={urName} onChange={handlleNameChange}  />
     
 <br></br>    <labe className='name2'>Your Crush Name:</labe>
     <input className="text2" type="text" placeholder="(i.e)Nazriya" value={crushName} onChange={(e)=>setCrushName(e.target.value)}  />
    <br></br> <button className="button-flame" onClick={handleButtonClick}>submit</button>
     <button className="restart" onClick={handleClick}>Restart</button>
     <h2 className="result"> <span className="result-head">Result:</span> {result}</h2>
     <p className="comment"><span className="result-head">Comment :</span>{comment}</p>
    
    
    </main>
   
    
    
   
  
     </div>
  )
}

export default Flames;