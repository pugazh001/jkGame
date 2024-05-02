import React from 'react'

function Results({secNum,term}) {
    let results;
    if(term){
         if(term==secNum){

            results="haree bhaiii you guessed correct value "

        }
       else if(term>secNum){
            results="higer value u enter ,come on buddy u almost found it"
        }
      else if(term<secNum){
        results="lower value u enter ,come on buddy u almost found it"

      }

    }else {
      results="enter the valid number"
   }
     
  return (
    <div >
      <h3 className='result'><span className='ques'>You Guessed :</span>{results}</h3>
    </div>
  )
}

export default Results